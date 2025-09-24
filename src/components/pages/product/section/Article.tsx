'use client'

import React from 'react'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface ArticleProps {
  productSlug?: string;
}

function Article({ productSlug }: ArticleProps) {
    // URL'den slug al veya prop'tan kullan
    const params = useParams();
    const slug = productSlug || (params?.slug as string) || 'default';
    
    // Ürün datasını getir
    const productData = getProductData(slug) || defaultProductData;
    const { about } = productData;

    return (
        <section className='py-[50px] md:py-[90px]'>
            <div className='container'>
                <article className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6 text-center'>
                        {about.title}
                    </h2>
                    <div className='prose prose-lg max-w-none'>
                        <p className='text-lg text-[#223140] leading-relaxed text-center'>
                            {about.description}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export { Article }