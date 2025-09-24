import React from 'react'
import { Hero, Brands, HowItWorks, EasyQuote, AIFeatures, Testimonials, UserStories, CampaignSection, AllBrands } from './sections'
import { AccordionSection, BlogGrid, CTASection } from '@/components/common'

const MainPageLayout = () => {
  return (
    <main>
      <Hero />
      <Brands />  
      <HowItWorks />
      <EasyQuote />
      <AIFeatures />
      {/* <Testimonials /> */}
      <UserStories />
      <AllBrands />
      {/* <CampaignSection /> */}
      <AccordionSection />
      <BlogGrid />
      <CTASection />
    </main>
  )
}

export default MainPageLayout