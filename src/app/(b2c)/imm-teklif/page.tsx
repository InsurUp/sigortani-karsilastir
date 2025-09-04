import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import ImmQuotePage from '@/components/QuoteFlow/ImmQuote/ImmQuotePage';

export const metadata: Metadata = {
  title: "İMM Sigortası Teklif Al - İhtiyari Mali Mesuliyet | Sigortagen",
  description: "İhtiyari mali mesuliyet sigortası tekliflerini hızlıca alın ve online poliçe oluşturun.",
  metadataBase: new URL('https://sigortagen.com'),
  alternates: {
    canonical: "https://sigortagen.com/imm-teklif"
  },
  openGraph: {
    title: "İMM Sigortası Teklif Al - İhtiyari Mali Mesuliyet | Sigortagen",
    description: "İhtiyari mali mesuliyet sigortası tekliflerini hızlıca alın ve online poliçe oluşturun.",
    url: "https://sigortagen.com/imm-teklif",
    type: "website"
  },
  twitter: {
    title: "İMM Sigortası Teklif Al - İhtiyari Mali Mesuliyet | Sigortagen",
    description: "İhtiyari mali mesuliyet sigortası tekliflerini hızlıca alın ve online poliçe oluşturun.",
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
        İMM Sigortası formu yükleniyor...
      </Typography>
    </Box>
  );
}

export default function ImmTeklifPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ImmQuotePage />
    </Suspense>
  );
} 