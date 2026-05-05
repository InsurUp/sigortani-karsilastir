import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import CepTelefonuQuotePage from '@/components/QuoteFlow/CepTelefonuQuote/CepTelefonuQuotePage';
import { getSiteUrl, getSiteName } from '@/utils/site';

export const metadata: Metadata = {
  title: `Cep Telefonu Sigortası Teklif Al | ${getSiteName()}`,
  description:
    'Cep telefonu sigortası için teklif talebinizi hızlıca oluşturun. Cihazınız için uygun koruma seçenekleriyle uzman ekibimiz sizinle iletişime geçsin.',
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: `${getSiteUrl()}/cep-telefonu-teklif`,
  },
  openGraph: {
    title: `Cep Telefonu Sigortası Teklif Al | ${getSiteName()}`,
    description:
      'Cep telefonu sigortası için teklif talebinizi hızlıca oluşturun. Cihazınız için uygun koruma seçenekleriyle uzman ekibimiz sizinle iletişime geçsin.',
    url: `${getSiteUrl()}/cep-telefonu-teklif`,
    type: 'website',
  },
  twitter: {
    title: `Cep Telefonu Sigortası Teklif Al | ${getSiteName()}`,
    description:
      'Cep telefonu sigortası için teklif talebinizi hızlıca oluşturun. Cihazınız için uygun koruma seçenekleriyle uzman ekibimiz sizinle iletişime geçsin.',
    card: 'summary_large_image',
  },
};

function LoadingFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: 2,
      }}
    >
      <CircularProgress size={40} />
      <Typography variant="body1" color="text.secondary">
        Cep Telefonu Sigortası formu yükleniyor...
      </Typography>
    </Box>
  );
}

export default function CepTelefonuTeklifPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CepTelefonuQuotePage />
    </Suspense>
  );
}
