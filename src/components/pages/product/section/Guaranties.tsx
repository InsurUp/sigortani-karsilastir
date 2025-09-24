'use client'

import React from 'react'
import Image from 'next/image'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface GuarantiesProps {
  productSlug?: string;
}

function Guaranties({ productSlug }: GuarantiesProps) {
  // URL'den slug al veya prop'tan kullan
  const params = useParams();
  const slug = productSlug || (params?.slug as string) || 'default';
  
  // Ürün datasını getir
  const productData = getProductData(slug) || defaultProductData;
  const { guarantees } = productData;

  return (
    <section className='py-20 bg-[#FAFAFA] relative' style={{ clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0 100%)', zIndex: 1 }}>
      <div className='container max-w-[900px]'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-[#0D0D0D] md:mb-15 mb-10'>
          {guarantees.title}
        </h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {guarantees.items.map((item, index) => (
            <li key={index} className='flex items-start gap-4'>
              <div className='flex-shrink-0 mt-1'>
                <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='teminat' />
              </div>
              <div className='flex-1'>
                <h3 className='text-[#12141D] text-base font-semibold mb-1'>
                  {item.title}
                </h3>
                <p className='text-[#12141D] text-sm opacity-70 leading-relaxed'>
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

export { Guaranties }