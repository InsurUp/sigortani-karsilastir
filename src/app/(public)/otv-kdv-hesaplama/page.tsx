import React from 'react'
import { Metadata } from 'next'
import { OtvKdvHesaplamaLayout } from '@/components/pages/otv-kdv-hesaplama'

export const metadata: Metadata = {
  title: 'ÖTV ve KDV Hesaplama | Sigortanı Karşılaştır',
  description: 'Araç ÖTV ve KDV hesaplama aracı ile aracınızın vergi miktarını öğrenin. Güncel ÖTV ve KDV oranları ile hesaplama yapın.',
  keywords: 'ÖTV hesaplama, KDV hesaplama, araç vergi hesaplama, ÖTV KDV hesaplama aracı',
}

export default function OtvKdvHesaplamaPage() {
  return <OtvKdvHesaplamaLayout />
}


