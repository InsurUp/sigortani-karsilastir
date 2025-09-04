import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import OzelSaglikQuotePage from '@/components/QuoteFlow/OzelSaglikQuote/OzelSaglikQuotePage';


export const metadata: Metadata = {
  title: "Özel Sağlık Sigortası Teklif Al - Tarımınızı Güvence Altına Alın | Sigortanı Karsılaştır",
  description: "Tarım ürünlerinizi, seralarınızı ve hayvanlarınızı doğal afetler, hastalıklar ve beklenmedik risklere karşı özel sağlık sigortası ile güvence altına alın. En uygun teklifleri hemen karşılaştırın.",
  metadataBase: new URL('https://sigortagen.com'),
  alternates: {
    canonical: "https://sigortanikarsilastir.com/ozel-saglik-sigortasi-teklif"
  },
  openGraph: {
    title: "Özel Sağlık Sigortası Teklif Al - Tarımınızı Güvence Altına Alın | Sigortanı Karsılaştır",
    description: "Tarım ürünlerinizi, seralarınızı ve hayvanlarınızı doğal afetler, hastalıklar ve beklenmedik risklere karşı özel sağlık sigortası ile güvence altına alın. En uygun teklifleri hemen karşılaştırın.",
    url: "https://sigortanikarsilastir.com/ozel-saglik-sigortasi-teklif",
    type: "website"
  },
  twitter: {
    title: "Özel Sağlık Sigortası Teklif Al - Tarımınızı Güvence Altına Alın | Sigortanı Karsılaştır",
    description: "Tarım ürünlerinizi, seralarınızı ve hayvanlarınızı doğal afetler, hastalıklar ve beklenmedik risklere karşı özel sağlık sigortası ile güvence altına alın. En uygun teklifleri hemen karşılaştırın.",
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
        Özel Sağlık Sigortası formu yükleniyor...
      </Typography>
    </Box>
  );
}

export default function TarsimTeklifPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OzelSaglikQuotePage />
    </Suspense>
  );
} 