import React from 'react'
import { Banner, CTASection } from '@/components/common'
import { DaskAdresKoduSorgulamaForm } from './sections/DaskAdresKoduSorgulamaForm'
import { DaskAdresKoduBilgiIcerik } from './sections/DaskAdresKoduBilgiIcerik'

export function DaskAdresKoduSorgulamaLayout() {
  return (
    <main>
      <Banner text="DASK Adres Kodu Sorgulama" />
      <DaskAdresKoduSorgulamaForm />
      <DaskAdresKoduBilgiIcerik />
      <CTASection />
    </main>
  )
}

