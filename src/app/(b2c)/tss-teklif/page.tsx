import { Metadata } from 'next';
import { Suspense } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import TssQuotePage from '@/components/QuoteFlow/TssQuote/TssQuotePage';
import { getSiteUrl, getSiteName } from '@/utils/site';

export const metadata: Metadata = {
  title: `TSS Sigortası Teklif Al - Tamamlayıcı Sağlık | ${getSiteName()}`,
  description: "SGK anlaşmalı tamamlayıcı sağlık sigortası tekliflerini hızlıca alın. Online poliçe oluşturun ve sağlığınızı güvence altına alın.",
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: `${getSiteUrl()}/tss-teklif`
  },
  openGraph: {
    title: `TSS Sigortası Teklif Al - Tamamlayıcı Sağlık | ${getSiteName()}`,
    description: "SGK anlaşmalı tamamlayıcı sağlık sigortası tekliflerini hızlıca alın. Online poliçe oluşturun ve sağlığınızı güvence altına alın.",
    url: `${getSiteUrl()}/tss-teklif`,
    type: "website"
  },
  twitter: {
    title: `TSS Sigortası Teklif Al - Tamamlayıcı Sağlık | ${getSiteName()}`,
    description: "SGK anlaşmalı tamamlayıcı sağlık sigortası tekliflerini hızlıca alın. Online poliçe oluşturun ve sağlığınızı güvence altına alın.",
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
        TSS Sigortası formu yükleniyor...
      </Typography>
    </Box>
  );
}

export default function TssTeklifPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TssQuotePage />
    </Suspense>
  );
} 