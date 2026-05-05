'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert, Box, Button, Card, CardContent, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

type WindowWithDataLayer = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

const productNames: Record<string, string> = {
  kasko: 'Kasko Sigortasi',
  trafik: 'Zorunlu Trafik Sigortasi',
  dask: 'DASK Sigortasi',
  konut: 'Konut Sigortasi',
  saglik: 'Saglik Sigortasi',
  tss: 'Tamamlayici Saglik Sigortasi',
  imm: 'IMM Sigortasi',
};

function pushToDataLayer(eventData: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    const currentWindow = window as WindowWithDataLayer;
    currentWindow.dataLayer?.push(eventData);
  }
}

export default function PurchasePaymentResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventTriggeredRef = useRef(false);

  const success = searchParams.get('success') === 'true';
  const type = searchParams.get('type') || 'sigorta';
  const policyId = searchParams.get('policyId') || '';
  const productName = productNames[type] || 'Sigorta';

  useEffect(() => {
    if (eventTriggeredRef.current) return;

    pushToDataLayer({
      event: `${type}_satinal`,
      form_name: success ? `${type}_odeme_basarili` : `${type}_odeme_basarisiz`,
    });

    eventTriggeredRef.current = true;
  }, [success, type]);

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 8,
        p: 4,
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: '100%',
          textAlign: 'center',
          borderRadius: 3,
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          border: success ? '2px solid #4CAF50' : '2px solid #f44336',
        }}
      >
        <CardContent sx={{ p: 6 }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              bgcolor: success ? '#4CAF50' : '#f44336',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
              mx: 'auto',
            }}
          >
            {success ? (
              <CheckCircleIcon sx={{ fontSize: 58, color: 'white' }} />
            ) : (
              <ErrorIcon sx={{ fontSize: 58, color: 'white' }} />
            )}
          </Box>

          <Typography
            variant="h4"
            gutterBottom
            color={success ? 'success.main' : 'error.main'}
            fontWeight="600"
          >
            {success ? 'Satin Alma Basarili' : 'Satin Alma Basarisiz'}
          </Typography>

          <Typography variant="h6" gutterBottom color="text.primary" sx={{ mb: 3 }}>
            {success
              ? `${productName} odemeniz alindi`
              : `${productName} satin alma islemi tamamlanamadi`}
          </Typography>

          {success && (
            <Alert severity="success" sx={{ mb: 3, textAlign: 'left' }}>
              Odeme sonucu alindi. Police veya siparis durumunu hesabinizdan kontrol edebilirsiniz.
            </Alert>
          )}

          {policyId && (
            <Alert severity="info" sx={{ mb: 3, textAlign: 'left' }}>
              Police Numarasi: {policyId}
            </Alert>
          )}

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {success
              ? 'Police detaylarinizi dashboard uzerinden goruntuleyebilirsiniz.'
              : 'Lutfen bilgilerinizi kontrol ederek tekrar deneyiniz. Sorun devam ederse musteri hizmetleriyle iletisime gecebilirsiniz.'}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {success ? (
              <Button variant="contained" color="success" size="large" onClick={() => router.push('/dashboard/policies')}>
                Policelerimi Goruntule
              </Button>
            ) : (
              <>
                <Button variant="contained" color="primary" size="large" onClick={() => router.back()}>
                  Tekrar Dene
                </Button>
                <Button variant="outlined" color="primary" size="large" onClick={() => router.push('/')}>
                  Anasayfa
                </Button>
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
