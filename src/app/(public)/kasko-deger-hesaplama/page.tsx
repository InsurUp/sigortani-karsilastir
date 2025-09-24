import React from 'react'
import { Metadata } from 'next'
import { KaskoDegerHesaplamaLayout } from '@/components/pages/kasko-deger-hesaplama'

export const metadata: Metadata = {
  title: 'Araç Kasko Değer Hesaplama | Sigortanı Karşılaştır',
  description: 'Araç kasko değer hesaplama aracı ile aracınızın kasko bedelini öğrenin. Türkiye Sigorta Birliği verilerine göre güncel kasko değer listesi.',
  keywords: 'kasko değer hesaplama, araç kasko değeri, kasko bedel sorgulama, araç değer listesi',
}

export default function KaskoDegerHesaplamaPage() {
  return <KaskoDegerHesaplamaLayout />
}


