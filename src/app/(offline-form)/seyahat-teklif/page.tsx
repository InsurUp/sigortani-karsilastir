import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import SeyahatQuotePage from '@/components/QuoteFlow/SeyahatQuote/SeyahatQuotePage';

export const metadata: Metadata = {
  title: "Seyahat Sigortası Teklif Al - Yükünüz Güvende | Sigortanı Karsılaştır",
  description: "Yük ve eşyalarınızı taşımacılık sırasında oluşabilecek risklere karşı korumak için en uygun seyahat sigortası tekliflerini hızlıca alın. Online poliçe oluşturun ve güvenle taşıyın.",
  metadataBase: new URL('https://sigortagen.com'),
  alternates: {
    canonical: "https://sigortanikarsilastir.com/seyahat-sigortasi-teklif"
  },
  openGraph: {
    title: "Seyahat Sigortası Teklif Al - Yükünüz Güvende | Sigortanı Karsılaştır",
    description: "Yük ve eşyalarınızı taşımacılık sırasında oluşabilecek risklere karşı korumak için en uygun seyahat sigortası tekliflerini hızlıca alın. Online poliçe oluşturun ve güvenle taşıyın.",
    url: "https://sigortanikarsilastir.com/seyahat-sigortasi-teklif",
    type: "website"
  },
  twitter: {
    title: "Seyahat Sigortası Teklif Al - Yükünüz Güvende | Sigortanı Karsılaştır",
    description: "Yük ve eşyalarınızı taşımacılık sırasında oluşabilecek risklere karşı korumak için en uygun seyahat sigortası tekliflerini hızlıca alın. Online poliçe oluşturun ve güvenle taşıyın.",
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
        Seyahat Sigortası formu yükleniyor...
      </Typography>
    </Box>
  );
}

export default function NakliyatTeklifPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SeyahatQuotePage />
    </Suspense>
  );
} 