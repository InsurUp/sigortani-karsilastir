import { Banner, CTASection } from '@/components/common'
import { OurGoals, OurWe, MissionVision, AboutArticle } from './section'
import { aboutArticleData } from '@/data/about'
import React from 'react'

function AboutLayout() {
  return (
   <main>
    <Banner text="Hakkımızda" />
    <AboutArticle content={aboutArticleData} />
    <OurWe />
    <OurGoals />
    <MissionVision />
    <CTASection />
   </main>
  )
}

export { AboutLayout };    
