import React from 'react'
import { Banner, Article, Guaranties, OfferSteps } from './section'
import { AccordionSection, BlogGrid, CTASection } from '@/components/common'

function ProductDetail() {
  return (
    <main>
      <Banner />
      <Article />
      <Guaranties />
      <OfferSteps />
      <Article />
      <AccordionSection />
      <BlogGrid />
      <CTASection />
    </main>
  )
}

export default ProductDetail