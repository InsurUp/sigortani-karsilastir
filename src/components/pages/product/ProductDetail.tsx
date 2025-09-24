import React from 'react'
import { notFound } from 'next/navigation'
import { Banner, Article, Guaranties, OfferSteps, ProductIntro, WhyChooseUs, PricingTable, KaskoPricingTabs, TrafikPricingTabs, AttentionPoints, ProductCTA } from './section'
import { AccordionSection, BlogGrid, CTASection } from '@/components/common'
import { getProductData } from '@/data/products'

interface ProductDetailProps {
  params: Promise<{ slug: string }>
}

async function ProductDetail({ params }: ProductDetailProps) {
  try {
    const resolvedParams = await params
    const slug = resolvedParams?.slug
    
    if (!slug) {
      notFound()
    }
    
    const productData = getProductData(slug)
    
    // Eğer ürün bulunamazsa 404 sayfasına yönlendir
    if (!productData) {
      notFound()
    }
  } catch (error) {
    notFound()
  }

  return (
    <main>
      <Banner />
      <ProductIntro />
      <OfferSteps />
      <Article />
      <Guaranties />
      <WhyChooseUs />
      <PricingTable />
      <KaskoPricingTabs />
      <TrafikPricingTabs />
      <AttentionPoints />
      <ProductCTA />
      <AccordionSection />
      <BlogGrid />
      <CTASection />
    </main>
  )
}

export default ProductDetail