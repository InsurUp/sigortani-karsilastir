import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL, API_ENDPOINTS } from '@/config/api';

export const runtime = 'nodejs';

type CardPayload = {
  number: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
  holderName: string;
};

type PaymentPurchasePayload = {
  proposalId: string;
  proposalProductId: string;
  installmentNumber: number;
  callbackUrl: string;
  card: CardPayload;
  identityNumber?: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ProviderResponse = Record<string, unknown>;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 20;

const globalRateLimit = globalThis as typeof globalThis & {
  __paymentPurchaseRateLimit?: Map<string, RateLimitEntry>;
};

if (!globalRateLimit.__paymentPurchaseRateLimit) {
  globalRateLimit.__paymentPurchaseRateLimit = new Map<string, RateLimitEntry>();
}

const rateLimitStore = globalRateLimit.__paymentPurchaseRateLimit as Map<string, RateLimitEntry>;

const noStoreHeaders = {
  'Cache-Control': 'no-store',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return (
    forwardedFor?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function readPayload(value: unknown): PaymentPurchasePayload | null {
  if (!isRecord(value) || !isRecord(value.card)) return null;

  const proposalId = getString(value.proposalId);
  const proposalProductId = getString(value.proposalProductId);
  const callbackUrl = getString(value.callbackUrl);
  const installmentNumber = Number(value.installmentNumber);
  const card = value.card;

  const number = getString(card.number);
  const cvc = getString(card.cvc);
  const expiryMonth = getString(card.expiryMonth);
  const expiryYear = getString(card.expiryYear);
  const holderName = getString(card.holderName);

  if (
    !proposalId ||
    !proposalProductId ||
    !callbackUrl ||
    !Number.isFinite(installmentNumber) ||
    installmentNumber < 1 ||
    !number ||
    !cvc ||
    !expiryMonth ||
    !expiryYear ||
    !holderName
  ) {
    return null;
  }

  return {
    proposalId,
    proposalProductId,
    callbackUrl,
    installmentNumber,
    card: {
      number,
      cvc,
      expiryMonth,
      expiryYear,
      holderName,
    },
    identityNumber: getString(value.identityNumber),
  };
}

function getNestedProviderData(data: ProviderResponse): ProviderResponse {
  if (isRecord(data.data)) {
    return { ...data, ...data.data };
  }

  if (isRecord(data.result)) {
    return { ...data, ...data.result };
  }

  return data;
}

function getFirstString(data: ProviderResponse, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = getString(data[key]);
    if (value) return value;
  }

  return undefined;
}

function getFormParameters(data: ProviderResponse): Record<string, string> {
  const candidates = [
    data.formParameters,
    data.formParams,
    data.parameters,
    data.redirectParameters,
    data.redirectFormParameters,
  ];

  for (const candidate of candidates) {
    if (!isRecord(candidate)) continue;

    return Object.entries(candidate).reduce<Record<string, string>>((params, [key, value]) => {
      if (value === undefined || value === null) return params;
      params[key] = String(value);
      return params;
    }, {});
  }

  return {};
}

function getProviderMessage(data: ProviderResponse): string | undefined {
  return getFirstString(data, ['message', 'error', 'errorMessage', 'detail', 'title']);
}

async function readProviderResponse(response: Response): Promise<ProviderResponse> {
  const responseText = await response.text();
  if (!responseText) return {};

  try {
    const parsed = JSON.parse(responseText);
    return isRecord(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { message: 'Cok fazla odeme denemesi yapildi. Lutfen kisa bir sure sonra tekrar deneyin.' },
      { status: 429, headers: noStoreHeaders }
    );
  }

  const authorization = request.headers.get('authorization');

  if (!authorization) {
    return NextResponse.json(
      { message: 'Oturum bilgisi bulunamadi.' },
      { status: 401, headers: noStoreHeaders }
    );
  }

  let payload: PaymentPurchasePayload | null = null;

  try {
    payload = readPayload(await request.json());
  } catch {
    payload = null;
  }

  if (!payload) {
    return NextResponse.json(
      { message: 'Odeme bilgileri eksik veya gecersiz.' },
      { status: 400, headers: noStoreHeaders }
    );
  }

  const endpoint = API_ENDPOINTS.PROPOSAL_PRODUCT_PURCHASE_ASYNC(
    payload.proposalId,
    payload.proposalProductId
  );

  const upstreamBody = {
    $type: process.env.INSURUP_ASYNC_3D_TYPE || '3d-secure',
    paymentType: 'ASYNC_3D_SECURE',
    proposalId: payload.proposalId,
    proposalProductId: payload.proposalProductId,
    installmentNumber: payload.installmentNumber,
    callbackUrl: payload.callbackUrl,
    card: payload.card,
    ...(payload.identityNumber ? { identityNumber: payload.identityNumber } : {}),
  };

  try {
    const upstreamResponse = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      body: JSON.stringify(upstreamBody),
      cache: 'no-store',
    });

    const providerRawData = await readProviderResponse(upstreamResponse);
    const providerData = getNestedProviderData(providerRawData);

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          message:
            getProviderMessage(providerData) ||
            '3D Secure odeme baslatilamadi. Lutfen bilgilerinizi kontrol edip tekrar deneyin.',
        },
        { status: upstreamResponse.status, headers: noStoreHeaders }
      );
    }

    const redirectUrl = getFirstString(providerData, [
      'redirectUrl',
      'redirectURL',
      'paymentUrl',
      'paymentURL',
      'threeDSecureUrl',
      'threeDSecureURL',
      'url',
    ]);

    if (!redirectUrl) {
      return NextResponse.json(
        { message: 'Odeme saglayicisindan 3D Secure yonlendirme adresi alinamadi.' },
        { status: 502, headers: noStoreHeaders }
      );
    }

    const method = getFirstString(providerData, ['method', 'redirectMethod'])?.toUpperCase();

    return NextResponse.json(
      {
        success: true,
        redirectUrl,
        formParameters: getFormParameters(providerData),
        method: method === 'GET' ? 'GET' : 'POST',
        paymentType: 'ASYNC_3D_SECURE',
        merchantPaymentId: getFirstString(providerData, [
          'merchantPaymentId',
          'merchantPaymentID',
          'paymentId',
          'transactionId',
          'orderId',
        ]),
      },
      { headers: noStoreHeaders }
    );
  } catch {
    return NextResponse.json(
      { message: 'Odeme saglayicisina ulasilamadi. Lutfen tekrar deneyin.' },
      { status: 502, headers: noStoreHeaders }
    );
  }
}
