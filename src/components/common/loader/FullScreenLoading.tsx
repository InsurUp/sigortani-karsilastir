import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import './LoadingScreen.css';

interface FullScreenLoadingProps {
  productType: string; // 'kasko', 'trafik', 'dask', 'konut', etc.
}

const getIconPathForProduct = (productType: string): string => {
  const type = productType.toLowerCase();
  const iconMap: Record<string, string> = {
    'kasko': '/images/product/icon/kasko.svg',
    'trafik': '/images/product/icon/traffic.svg',
    'dask': '/images/product/icon/dask.svg',
    'konut': '/images/product/icon/konut.svg',
    'tss': '/images/product/icon/tss.svg',
    'imm': '/images/product/icon/imm.svg',
  };
  return iconMap[type] || '/images/product/icon/kasko.svg';
};

export default function FullScreenLoading({ productType }: FullScreenLoadingProps) {
  // Ürün başlıkları mapping
  const productTitles: Record<string, string> = {
    tss: 'Tamamlayıcı Sağlık Sigortası',
    kasko: 'Kasko Sigortası',
    dask: 'DASK',
    konut: 'Konut Sigortası',
    trafik: 'Trafik Sigortası',
    imm: 'İhtiyari Mali Mesuliyet Sigortası',
  };

  const productTitle = productTitles[productType.toLowerCase()] || 'Sigorta';

  return (
    <Box className="loading-container">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box sx={{ mb: 2, width: 80, height: 80, position: 'relative' }}>
          <Image
            src={getIconPathForProduct(productType)}
            alt={productTitle}
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'text.primary',
            mt: 2,
            textAlign: 'center',
          }}
        >
          {productTitle}
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'text.primary',
          maxWidth: 450,
          lineHeight: 1.5,
          mb: 3.75,
          textAlign: 'center',
        }}
      >
        Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir
        araya getiriyoruz.
      </Typography>

      {/* Dönen mavi halka */}
      <div className="loader"></div>
    </Box>
  );
}
