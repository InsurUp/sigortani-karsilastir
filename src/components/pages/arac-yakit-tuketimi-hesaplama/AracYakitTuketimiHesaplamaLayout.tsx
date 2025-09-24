import React from 'react'
import { Banner, CTASection } from '@/components/common'
import { YakıtTuketimiHesaplamaForm } from './sections/YakıtTuketimiHesaplamaForm'
import { YakıtTuketimiBilgiIcerik } from './sections/YakıtTuketimiBilgiIcerik'

export function AracYakitTuketimiHesaplamaLayout() {
  return (
    <main>
      <Banner text="Yakıt Tüketimi Hesaplama!" />
      <YakıtTuketimiHesaplamaForm />
      <YakıtTuketimiBilgiIcerik />
      <CTASection />
    </main>
  )
}

