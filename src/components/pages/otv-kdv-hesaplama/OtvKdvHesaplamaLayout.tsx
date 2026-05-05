import React from 'react'
import { Banner, CTASection } from '@/components/common'
import { OtvKdvHesaplamaForm } from './sections/OtvKdvHesaplamaForm'
import { OtvKdvBilgiIcerik } from './sections/OtvKdvBilgiIcerik'

export function OtvKdvHesaplamaLayout() {
  return (
    <main>
      <Banner text="ÖTV ve KDV Hesapla!" />
      <OtvKdvHesaplamaForm />
      <CTASection />
      <OtvKdvBilgiIcerik />
      <CTASection />
    </main>
  )
}
