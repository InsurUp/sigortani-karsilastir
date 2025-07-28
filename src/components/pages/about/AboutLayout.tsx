import { Banner, CTASection } from '@/components/common'
import { OurGoals, OurWe, MissionVision } from './section'
import React from 'react'

function AboutLayout() {
  return (
   <main>
    <Banner text="Hakkımızda" />
    <OurWe />
    <OurGoals />
    <MissionVision />
    <CTASection />
   </main>
  )
}

export { AboutLayout };    
