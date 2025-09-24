'use client'

import React from 'react'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface WhyChooseUsProps {
  productSlug?: string;
}

function WhyChooseUs({ productSlug }: WhyChooseUsProps) {
  // URL'den slug al veya prop'tan kullan
  const params = useParams();
  const slug = productSlug || (params?.slug as string) || 'default';
  
  // Ürün datasını getir
  const productData = getProductData(slug) || defaultProductData;
  const { whyChooseUs } = productData;

  return (
    <section className='py-20 bg-white'>
      <div className='container max-w-[1000px]'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-12'>
          {whyChooseUs.title}
        </h2>
        <div className='flex flex-col items-center gap-8 max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
            {whyChooseUs.items.slice(0, 3).map((item, index) => (
              <div key={index} className='text-center'>
              <h3 className='text-[#12141D] text-lg font-bold mb-3'>
                {item.title}
              </h3>
              <p className='text-[#12141D] text-sm opacity-70 leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
          </div>
          {whyChooseUs.items.length > 3 && (
            <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
              {whyChooseUs.items.slice(3).map((item, index) => (
                <div key={index + 3} className='text-center max-w-xs'>
                  <h3 className='text-[#12141D] text-lg font-bold mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-[#12141D] text-sm opacity-70 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { WhyChooseUs }



