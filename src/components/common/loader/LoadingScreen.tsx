import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import './LoadingScreen.css';

interface LoadingScreenProps {
  duration?: number;
  shouldComplete?: boolean;
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

export default function LoadingScreen({
  duration = 60,
  shouldComplete = false,
  productType,
}: LoadingScreenProps) {
  const progressBarRef = useRef<SVGCircleElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);
  const [currentProgress, setCurrentProgress] = useState(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isCompletingRef = useRef(false);
  const shouldCompleteRef = useRef(shouldComplete);
  const currentProgressRef = useRef(0);

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

  // shouldComplete değiştiğinde ref'i güncelle
  useEffect(() => {
    shouldCompleteRef.current = shouldComplete;
  }, [shouldComplete]);

  // currentProgress değiştiğinde ref'i güncelle
  useEffect(() => {
    currentProgressRef.current = currentProgress;
  }, [currentProgress]);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    const progressText = progressTextRef.current;

    if (!progressBar || !progressText) return;

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    // İlk başta tamamen sıfırdan başlat - %0
    progressBar.style.strokeDasharray = `${circumference}`;
    progressBar.style.strokeDashoffset = `${circumference}`;
    progressText.textContent = '%0';
    setCurrentProgress(0);

    let startTime: number | null = null;

    function updateProgress(value: number) {
      if (!progressBar || !progressText) return;
      const offset = circumference - (value / 100) * circumference;
      progressBar.style.strokeDashoffset = `${offset}`;
      progressText.textContent = `%${Math.floor(value)}`;
      setCurrentProgress(value);
    }

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const ratio = Math.min(elapsed / (duration * 1000), 1);

      // Smooth progress from 0% to 95%
      const target = ratio * 95; // 0% -> 95%

      updateProgress(target);

      // shouldComplete true olduğunda animasyonu durdur ve completion'a geç
      if (shouldCompleteRef.current && !isCompletingRef.current) {
        isCompletingRef.current = true;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        startCompletionAnimation();
        return;
      }

      if (elapsed < duration * 1000 && !shouldCompleteRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    }

    function startCompletionAnimation() {
      const startProgress = currentProgressRef.current;
      const completionStartTime = Date.now();
      const remainingProgress = 100 - startProgress;
      const completionDuration = 4000; // 4 saniye

      function completeAnimation() {
        if (!progressBar || !progressText) return;

        const elapsed = Date.now() - completionStartTime;
        const ratio = Math.min(elapsed / completionDuration, 1);
        const easedRatio = 1 - Math.pow(1 - ratio, 3); // Ease out cubic
        const progress = startProgress + remainingProgress * easedRatio;

        const offset = circumference - (progress / 100) * circumference;
        progressBar.style.strokeDashoffset = `${offset}`;
        progressText.textContent = `%${Math.floor(progress)}`;
        setCurrentProgress(progress);

        if (ratio < 1) {
          animationFrameRef.current = requestAnimationFrame(completeAnimation);
        }
      }

      completeAnimation();
    }

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration]);

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

      <Box className="progress-circle" sx={{ position: 'relative', width: 100, height: 100 }}>
        <svg style={{ transform: 'rotate(-90deg)', width: 100, height: 100 }}>
          <circle className="progress-bg" cx="50" cy="50" r="45"></circle>
          <circle ref={progressBarRef} className="progress-bar" cx="50" cy="50" r="45"></circle>
        </svg>
        <Box
          ref={progressTextRef}
          className="progress-text"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          %0
        </Box>
      </Box>

      {/* Alt bilgilendirme notları */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0, 0, 0, 0.02)',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '330px !important',
          gap: 1.5,
          px: 4,
          py: 4,
          width: '100%',
        }}
      >
        <Typography
          className="loading-titles"
          sx={{
            fontSize: '25px',
            fontWeight: 700,
            color: 'text.primary',
            mb: 0,
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          Sana özel en uygun teklif seçeneklerini kaçırma!
        </Typography>

        <Typography
          sx={{
            fontSize: '0.9375rem',
            color: 'text.secondary',
            lineHeight: 1.7,
            textAlign: 'center',
            maxWidth: 600,
          }}
        >
          Anlaşmalı sigorta şirketlerimizden senin için hazırlanan özel teklifleri hemen
          inceleyebilir, ihtiyacına en uygun poliçeyi seçerek anında güvenle satın alabilirsin.
          Üstelik tüm süreci birkaç adımda, zahmetsizce tamamlayabilirsin.
        </Typography>
      </Box>
    </Box>
  );
}
