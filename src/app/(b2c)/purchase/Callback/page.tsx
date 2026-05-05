'use client';

import { useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

const SUCCESS_STATUS_VALUES = new Set(['success', 'successful', 'approved', 'completed', 'ok', 'true', '1']);
const FAILURE_STATUS_VALUES = new Set(['fail', 'failed', 'error', 'declined', 'false', '0']);
const SUCCESS_MD_STATUS_VALUES = new Set(['1', '2', '3', '4']);

function readSuccess(searchParams: URLSearchParams): boolean {
  const success = searchParams.get('success');
  if (success && SUCCESS_STATUS_VALUES.has(success.toLowerCase())) return true;
  if (success && FAILURE_STATUS_VALUES.has(success.toLowerCase())) return false;

  const status = searchParams.get('status') || searchParams.get('paymentStatus');
  if (status && SUCCESS_STATUS_VALUES.has(status.toLowerCase())) return true;
  if (status && FAILURE_STATUS_VALUES.has(status.toLowerCase())) return false;

  const responseCode = searchParams.get('responseCode') || searchParams.get('procReturnCode');
  const mdStatus = searchParams.get('mdStatus');

  if (responseCode === '00') return true;
  if (mdStatus && SUCCESS_MD_STATUS_VALUES.has(mdStatus)) return true;

  return false;
}

function buildResultUrl(searchParams: URLSearchParams, success: boolean): string {
  const resultParams = new URLSearchParams();
  resultParams.set('success', success ? 'true' : 'false');

  const passthroughKeys = [
    'type',
    'proposalId',
    'proposalProductId',
    'merchantPaymentId',
    'paymentId',
    'transactionId',
    'policyId',
    'error',
  ];

  passthroughKeys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) resultParams.set(key, value);
  });

  return `/purchase/PaymentResult?${resultParams.toString()}`;
}

export default function PurchaseCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackResult = useMemo(() => {
    const params = new URLSearchParams(searchParams.toString());
    const success = readSuccess(params);

    return {
      params,
      success,
      resultUrl: buildResultUrl(params, success),
    };
  }, [searchParams]);

  useEffect(() => {
    const isInsideFrame = window.parent && window.parent !== window;

    if (isInsideFrame) {
      window.parent.postMessage(
        {
          type: '3d-secure-result',
          success: callbackResult.success,
          resultUrl: callbackResult.resultUrl,
          params: Object.fromEntries(callbackResult.params.entries()),
        },
        window.location.origin
      );
      return;
    }

    router.replace(callbackResult.resultUrl);
  }, [callbackResult, router]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 3,
        textAlign: 'center',
      }}
    >
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        3D Secure sonucu kontrol ediliyor...
      </Typography>
    </Box>
  );
}
