import React from 'react'
import { Hero, Brands, HowItWorks, EasyQuote, AIFeatures, Testimonials, CampaignSection, AllBrands } from './sections'
import { AccordionSection, BlogGrid, CTASection } from '@/components/common'

const MainPageLayout = () => {
  return (
    <main>
      <Hero />
      <Brands />  
      <HowItWorks />
      <EasyQuote />
      <AIFeatures />
      <Testimonials />
      <AllBrands />
      <CampaignSection />
      <AccordionSection />
      <BlogGrid />
      <CTASection />
    </main>
  )
}

export default MainPageLayout