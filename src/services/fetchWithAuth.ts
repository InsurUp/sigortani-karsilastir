import { useAuthStore } from '@/store/useAuthStore';
import { API_BASE_URL, API_ENDPOINTS } from '@/config/api';

interface ApiResponse<T> {
  ok: boolean;
  status: number;
  json: () => Promise<T>;
  text: () => Promise<string>;
}

let isRefreshing = false;
let requestQueue: Array<(token: string) => void> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  requestQueue.forEach((callback) => {
    if (error || !token) {
      callback('');
    } else {
      callback(token);
    }
  });
  requestQueue = [];
};

async function refreshAuthToken(): Promise<string> {
  const { refreshToken, setTokens, logout } = useAuthStore.getState();

  if (!refreshToken) {
    logout();
    throw new Error('Oturum açmanız gerekiyor: Refresh token yok.');
  }

  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.AUTH_REFRESH_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      logout();
      throw new Error(`Token yenileme başarısız: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.accessToken) {
      logout();
      throw new Error('Geçersiz token yenileme yanıtı.');
    }

    setTokens(data.accessToken, data.refreshToken || refreshToken);
    return data.accessToken;

  } catch (error) {
    if (!(error instanceof Error && error.message.startsWith('Token yenileme başarısız'))) {
      logout();
    }
    throw error;
  }
}

export async function fetchWithAuth(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  console.log('fetchWithAuth başladı');
  console.log('input:', input);
  console.log('init:', init);

  if (!input) {
    throw new Error('fetchWithAuth: input parametresi gereklidir');
  }

  const { accessToken } = useAuthStore.getState();
  console.log('accessToken:', accessToken ? 'var' : 'yok');

  const requestInit = { ...(init || {}) };
  const headers = new Headers(requestInit.headers);

  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }
  requestInit.headers = headers;

  let requestUrl: string;
  if (typeof input === 'string') {
    requestUrl = input.startsWith('http://') || input.startsWith('https://') 
      ? input 
      : `${API_BASE_URL}${input}`;
  } else if (input instanceof Request) {
    requestUrl = input.url.startsWith('http://') || input.url.startsWith('https://')
      ? input.url
      : `${API_BASE_URL}${input.url}`;
  } else {
    const inputString = input.toString();
    requestUrl = inputString.startsWith('http://') || inputString.startsWith('https://')
      ? inputString
      : `${API_BASE_URL}${inputString}`;
  }

  console.log('requestUrl:', requestUrl);
  console.log('requestInit:', requestInit);

  let response = await fetch(requestUrl, requestInit);

  console.log('fetch response status:', response.status);
  console.log('fetch response ok:', response.ok);

  if (response.status === 401 && !requestUrl.includes(API_ENDPOINTS.AUTH_REFRESH_TOKEN)) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const newAccessToken = await refreshAuthToken();

          headers.set('Authorization', `Bearer ${newAccessToken}`);
        requestInit.headers = headers;
          
          processQueue(null, newAccessToken);
          
        response = await fetch(requestUrl, requestInit);

        } catch (refreshError) {
        processQueue(
          refreshError instanceof Error ? refreshError : new Error('Bilinmeyen yenileme hatası'),
          null
        );
        return response;
        } finally {
          isRefreshing = false;
        }
      } else {
      return new Promise<Response>((resolve) => {
        const retryCallback = async (newToken: string) => {
          const retryHeaders = new Headers(init?.headers);
              retryHeaders.set('Authorization', `Bearer ${newToken}`);
          const retryInit = { ...init, headers: retryHeaders };

          try {
            const retryResponse = await fetch(requestUrl, retryInit);
            resolve(retryResponse);
          } catch (queueError) {
            resolve(new Response(JSON.stringify({ error: 'Kuyruk tekrarı başarısız' }), { status: 500 }));
            }
        };
        requestQueue.push(retryCallback);
        });
      }
    }

  return response;
}

// API yardımcı fonksiyonları
export const api = {
  // Profil işlemleri
  getProfile: async () => {
    const response = await fetchWithAuth(API_ENDPOINTS.CUSTOMER_ME);
    return response.json();
  },
  
  updateProfile: async (data: Partial<CustomerProfile>) => {
    const response = await fetchWithAuth(API_ENDPOINTS.CUSTOMER_ME, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  refreshInfo: async () => {
    // Refresh-info endpoint'i artık kullanılmıyor
    return Promise.resolve();
  },

  // Poliçe işlemleri
  getPolicies: async () => {
    const response = await fetchWithAuth('/api/customers/me/policies');
    return response.json();
  },
  
  getPolicyDetails: async (policyId: string) => {
    const response = await fetchWithAuth(`/api/customers/me/policies/${policyId}`);
    return response.json();
  },

  // Teklif işlemleri
  getProposals: async () => {
    const response = await fetchWithAuth('/api/customers/me/proposals');
    return response.json();
  },
  
  createProposal: async (data: any) => {
    const response = await fetchWithAuth('/api/customers/me/proposals', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Varlık işlemleri
  getVehicles: async () => {
    const response = await fetchWithAuth('/api/customers/me/vehicles');
    return response.json();
  },
  
  addVehicle: async (data: any) => {
    const response = await fetchWithAuth('/api/customers/me/vehicles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Hasar işlemleri
  getClaims: async () => {
    const response = await fetchWithAuth('/api/customers/me/claims');
    return response.json();
  },
  
  createClaim: async (data: any) => {
    const response = await fetchWithAuth('/api/customers/me/claims', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

// Tip tanımlamaları
export interface CustomerProfile {
  id: string;
  fullName: string | null;
  primaryEmail: string | null;
  primaryPhoneNumber: {
    number: string;
    countryCode: number;
  };
  identityNumber: number;
  createdAt: string;
  birthDate: string | null;
  city: { value: string; text: string } | string | null;
  district: { value: string; text: string } | string | null;
  gender: string | null;
  educationStatus: string | null;
  nationality: string | null;
  maritalStatus: string | null;
  job: string | null;
  representedBy: string | null;
} 