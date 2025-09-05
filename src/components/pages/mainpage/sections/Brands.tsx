'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { brands } from '@/data';

type Brand = { id: string | number; logo: string; alt: string };

export function Brands() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [unitWidth, setUnitWidth] = useState(0); // tek liste genişliği
  const [x, setX] = useState(0);                // current translateX
  const animRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);
  const pausedRef = useRef(false);

  // Hız: px/sn (daha yavaş için küçült)
  const SPEED = 80; // 80 px/s ideal; 60-160 arası deneyebilirsin

  // Tek liste genişliğini ölç
  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current || !containerRef.current) return;
      // track çocuklarının yarısı = tek liste
      const children = Array.from(trackRef.current.children);
      const half = children.slice(0, Math.floor(children.length / 2));
      const w = half.reduce((acc, el) => acc + (el as HTMLElement).offsetWidth, 0);
      setUnitWidth(w);
    };
    measure();
    // resize’da tekrar ölç
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Animasyon döngüsü
  useEffect(() => {
    const tick = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // saniye
      lastTsRef.current = ts;

      if (!pausedRef.current && unitWidth > 0) {
        // dt*speed kadar sola kaydır
        setX((prev) => {
          let nx = prev - SPEED * dt;
          // Yarıyı geçerse başa sar (görünmeden)
          if (nx <= -unitWidth) nx += unitWidth;
          return nx;
        });
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [unitWidth]);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  // Slide kartı – genişlik/boşluk ayarı burada
  const Slide = ({ item }: { item: Brand }) => (
    <div
      key={item.id}
      style={{
        flex: '0 0 auto',
        width: 'calc(100% / 7)', // 7 logo görünür olacak şekilde
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '64px',
        paddingLeft: '20px',
        paddingRight: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Image
        src={item.logo}
        alt={item.alt}
        width={120}
        height={60}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          filter: 'grayscale(1)',
          // hover efekti istersen:
          // transition: 'filter 0.3s',
        }}
      />
    </div>
  );

  return (
    <section style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#fff' }}>
      <div
        ref={containerRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        {/* Viewport */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {/* Track */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              transform: `translate3d(${x}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            {/* 2x render → sonsuz şerit */}
            {[...brands, ...brands].map((b, i) => (
              <Slide item={b} key={`${b.id}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
