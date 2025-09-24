'use client'

import React from 'react'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface AttentionPointsProps {
  productSlug?: string;
}

function AttentionPoints({ productSlug }: AttentionPointsProps) {
  // URL'den slug al veya prop'tan kullan
  const params = useParams();
  const slug = productSlug || (params?.slug as string) || 'default';
  
  // Ürün datasını getir
  const productData = getProductData(slug) || defaultProductData;
  const { attentionPoints } = productData;

  // Eğer attentionPoints bilgisi yoksa component'i render etme
  if (!attentionPoints) {
    return null;
  }

  return (
    <section className='py-20 bg-white'>
      <div className='container max-w-[900px]'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-12'>
          {attentionPoints.title}
        </h2>
        <ul className='space-y-6'>
          {attentionPoints.items.map((item, index) => (
            <li key={index} className='flex items-start gap-4'>
              <div className='flex-shrink-0 w-2 h-2 bg-[#ED1D24] rounded-full mt-3'></div>
              <div className='flex-1'>
                <h3 className='text-[#12141D] text-lg font-semibold mb-2'>
                  {item.title}
                </h3>
                <p className='text-[#12141D] text-base opacity-70 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { AttentionPoints }
