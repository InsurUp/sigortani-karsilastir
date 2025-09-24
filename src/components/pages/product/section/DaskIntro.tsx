'use client'

import React from 'react'
import { TitleDescription } from '@/components/common'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface ProductIntroProps {
  productSlug?: string;
}

function ProductIntro({ productSlug }: ProductIntroProps) {
  // URL'den slug al veya prop'tan kullan
  const params = useParams();
  const slug = productSlug || (params?.slug as string) || 'default';
  
  // Ürün datasını getir
  const productData = getProductData(slug) || defaultProductData;
  const { intro } = productData;

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container'>
        <TitleDescription
          title={intro.title}
          description={intro.description}
          titleAlignment="center"
          descriptionAlignment="center"
          containerClassName="max-w-4xl mx-auto"
        />
      </div>
    </section>
  )
}

export { ProductIntro }
