import React from 'react'
import { Metadata } from 'next'
import { DaskAdresKoduSorgulamaLayout } from '@/components/pages/dask-adres-kodu-sorgulama'

export const metadata: Metadata = {
  title: 'DASK Adres Kodu Sorgulama | Sigortanı Karşılaştır',
  description: 'DASK adres kodu sorgulama aracı ile konutunuzun adres kodunu öğrenin. UAVT adres kodu sorgulama ile DASK sigortası için gerekli bilgileri alın.',
  keywords: 'DASK adres kodu sorgulama, UAVT adres kodu, adres kodu sorgulama aracı, DASK sigortası adres kodu',
}

export default function DaskAdresKoduSorgulamaPage() {
  return <DaskAdresKoduSorgulamaLayout />
}


