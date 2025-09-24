'use client'

import React from 'react'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface PricingTableProps {
  productSlug?: string;
}

function PricingTable({ productSlug }: PricingTableProps) {
  // URL'den slug al veya prop'tan kullan
  const params = useParams();
  const slug = productSlug || (params?.slug as string) || 'default';
  
  // Ürün datasını getir
  const productData = getProductData(slug) || defaultProductData;
  const { pricing } = productData;

  // Eğer pricing bilgisi yoksa component'i render etme
  if (!pricing) {
    return null;
  }

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container max-w-[800px]'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6'>
            {pricing.title}
          </h2>
          <p className='text-lg text-[#223140] leading-relaxed max-w-3xl mx-auto'>
            {pricing.description}
          </p>
        </div>
        
        <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='px-6 py-4 text-center font-semibold text-gray-900'>
                    Şehir
                  </th>
                  <th className='px-6 py-4 text-center font-semibold text-gray-900'>
                    {productData.name} Fiyatları
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.cities.map((city, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                  >
                    <td className='px-6 py-4 text-center font-medium text-gray-900'>
                      {city.city}
                    </td>
                    <td className='px-6 py-4 text-center font-semibold text-gray-900'>
                      {city.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PricingTable }
