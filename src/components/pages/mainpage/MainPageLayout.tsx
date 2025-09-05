import React from 'react'
import { Hero, Brands, HowItWorks, EasyQuote, AIFeatures, CampaignSection } from './sections'
import { AccordionSection, BlogGrid, CTASection } from '@/components/common'

const MainPageLayout = () => {
  return (
    <main>
      <Hero />
      <Brands />  
      <HowItWorks />
      <EasyQuote />
      <AIFeatures />
      <CampaignSection />
      <AccordionSection />
      <BlogGrid />
      <CTASection />
    </main>
  )
}

export default MainPageLayout