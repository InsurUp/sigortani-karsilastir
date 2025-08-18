import { Banner } from '@/components/common'
import React from 'react'
import { ActiveCampaing, PastCampaing, SuggestCampaing } from './section' 

function CampaingPageLayout() {
  return (
    <main>
      <Banner text='Kampanyalar' />
      <SuggestCampaing />
      <ActiveCampaing />
      <PastCampaing />
    </main>
  )
}

export { CampaingPageLayout }