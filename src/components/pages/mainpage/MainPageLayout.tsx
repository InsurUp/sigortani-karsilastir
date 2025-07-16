import React from 'react'
import Hero from './sections/Hero'
import Brands from './sections/Brands'
import HowItWorks from './sections/HowItWorks'
import EasyQuote from './sections/EasyQuote'
import CampaignSection from './sections/CampaignSection'
import AccordionSection from '@/components/common/accordion/AccordionSection'
import BlogGrid from '@/components/common/blog/BlogGrid'
import CTASection from '@/components/common/cta/CTASection'
  
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