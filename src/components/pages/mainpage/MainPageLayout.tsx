import React from 'react'
import { Hero, Brands, HowItWorks, EasyQuote, CampaignSection } from './sections'
import { AccordionSection, BlogGrid, CTASection } from '@/components/common'

const MainPageLayout = () => {
  return (
    <main>
      <Hero />
      <Brands />  
      <HowItWorks />
      <EasyQuote />
      <CampaignSection />
      <AccordionSection />
      <BlogGrid />
      <CTASection />
    </main>
  )
}

export default MainPageLayout