import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import CepTelefonuQuotePage from '@/components/QuoteFlow/CepTelefonuQuote/CepTelefonuQuotePage';
import { getSiteUrl, getSiteName } from '@/utils/site';


export const metadata: Metadata = {
  title: `Cep Telefonu Sigortası Teklif Al - Güvende Kalın | ${getSiteName()}`,
  description: "Sevdiklerinizi ve geleceğinizi güvence altına almak için en avantajlı cep telefonu sigortası tekliflerini karşılaştırın. Hemen online başvuru yapın.",
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: `${getSiteUrl()}/cep-telefonu-teklif`
  },
  openGraph: {
    title: `Cep Telefonu Sigortası Teklif Al - Güvende Kalın | ${getSiteName()}`,
    description: "Sevdiklerinizi ve geleceğinizi güvence altına almak için en avantajlı cep telefonu sigortası tekliflerini karşılaştırın. Hemen online başvuru yapın.",
    url: `${getSiteUrl()}/cep-telefonu-teklif`,
    type: "website"
  },
  twitter: {
    title: `Cep Telefonu Sigortası Teklif Al - Güvende Kalın | ${getSiteName()}`,
    description: "Sevdiklerinizi ve geleceğinizi güvence altına almak için en avantajlı cep telefonu sigortası tekliflerini karşılaştırın. Hemen online başvuru yapın.",
    card: "summary_large_image"
  }
};


// Loading component
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

export default function HayatTeklifPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CepTelefonuQuotePage />
    </Suspense>
  );
} 