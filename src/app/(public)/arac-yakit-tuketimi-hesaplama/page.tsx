import React from 'react'
import { Metadata } from 'next'
import { AracYakitTuketimiHesaplamaLayout } from '@/components/pages/arac-yakit-tuketimi-hesaplama'

export const metadata: Metadata = {
  title: 'Araç Yakıt Tüketimi Hesaplama | Sigortanı Karşılaştır',
  description: 'Araç yakıt tüketimi hesaplama aracı ile aracınızın yakıt maliyetini hesaplayın. Yakıt tasarrufu için tüketim hesaplama yapın.',
  keywords: 'yakıt tüketimi hesaplama, araç yakıt maliyeti, yakıt tasarrufu, km başına yakıt tüketimi',
}

export default function AracYakitTuketimiHesaplamaPage() {
  return <AracYakitTuketimiHesaplamaLayout />
}

