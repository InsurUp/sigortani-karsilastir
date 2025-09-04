import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import CepTelefonuQuotePage from '@/components/QuoteFlow/CepTelefonuQuote/CepTelefonuQuotePage';


export const metadata: Metadata = {
  title: "Cep Telefonu Sigortası Teklif Al - Güvende Kalın | Sigortanı Karsılaştır",
  description: "Sevdiklerinizi ve geleceğinizi güvence altına almak için en avantajlı cep telefonu sigortası tekliflerini karşılaştırın. Hemen online başvuru yapın.",
  metadataBase: new URL('https://sigortagen.com'),
  alternates: {
    canonical: "https://sigortanikarsilastir.com/cep-telefonu-sigortasi-teklif"
  },
  openGraph: {
    title: "Cep Telefonu Sigortası Teklif Al - Güvende Kalın | Sigortanı Karsılaştır",
    description: "Sevdiklerinizi ve geleceğinizi güvence altına almak için en avantajlı cep telefonu sigortası tekliflerini karşılaştırın. Hemen online başvuru yapın.",
    url: "https://sigortanikarsilastir.com/cep-telefonu-sigortasi-teklif",
    type: "website"
  },
  twitter: {
    title: "Cep Telefonu Sigortası Teklif Al - Güvende Kalın | Sigortanı Karsılaştır",
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