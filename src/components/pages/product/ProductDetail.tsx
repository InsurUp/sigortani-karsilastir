import React from 'react'
import { notFound } from 'next/navigation'
import { Banner, Article, Guaranties, OfferSteps, ProductIntro, WhyChooseUs, PricingTable, KaskoPricingTabs, TrafikPricingTabs, AttentionPoints, ProductCTA } from './section'
import { AccordionSection, BlogGrid } from '@/components/common'
import ProductRequestForm from '@/components/common/ProductRequestForm'
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

    return (
      <main>
        <Banner productData={productData} />
        <ProductCTA productSlug={slug} />
        <ProductIntro />
        <OfferSteps />
        <Article />
        <section className="pb-[50px] md:pb-[90px]">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <ProductRequestForm defaultProduct={productData.name} />
            </div>
          </div>
        </section>
        <Guaranties />
        <WhyChooseUs />
        <PricingTable />
        <KaskoPricingTabs />
        <TrafikPricingTabs />
        <AttentionPoints />
        <AccordionSection />
        <BlogGrid />
        <ProductCTA productSlug={slug} />
      </main>
    )
  } catch {
    notFound()
  }
}

export default ProductDetail
