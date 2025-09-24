import React from 'react'
import { Banner, CTASection } from '@/components/common'
import { KaskoDegerHesaplamaForm } from './sections/KaskoDegerHesaplamaForm'
import { KaskoDegerBilgiIcerik } from './sections/KaskoDegerBilgiIcerik'

export function KaskoDegerHesaplamaLayout() {
  return (
    <main>
      <Banner text="Araç Kasko Değer Hesaplama" />
      <KaskoDegerHesaplamaForm />
      <KaskoDegerBilgiIcerik />
      <CTASection />
    </main>
  )
}


