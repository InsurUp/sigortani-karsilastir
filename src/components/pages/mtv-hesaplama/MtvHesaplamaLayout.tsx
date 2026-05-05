import React from 'react'
import { Banner, CTASection } from '@/components/common'
import { MtvHesaplamaForm } from './sections/MtvHesaplamaForm'
import { MtvBilgiIcerik } from './sections/MtvBilgiIcerik'

export function MtvHesaplamaLayout() {
  return (
    <main>
      <Banner text="Araç MTV Hesapla!" />
      <MtvHesaplamaForm />
      <CTASection />
      <MtvBilgiIcerik />
      <CTASection />
    </main>
  )
}
