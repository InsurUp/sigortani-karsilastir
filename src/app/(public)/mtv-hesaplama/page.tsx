import React from 'react'
import { Metadata } from 'next'
import { MtvHesaplamaLayout } from '@/components/pages/mtv-hesaplama'

export const metadata: Metadata = {
  title: 'Araç MTV Hesaplama | Sigortanı Karşılaştır',
  description: 'Motorlu Taşıtlar Vergisi (MTV) hesaplama aracı ile aracınızın MTV tutarını öğrenin. Güncel MTV tarifeleri ile hesaplama yapın.',
  keywords: 'MTV hesaplama, motorlu taşıtlar vergisi, araç MTV hesaplama aracı, MTV sorgulama',
}

export default function MtvHesaplamaPage() {
  return <MtvHesaplamaLayout />
}


