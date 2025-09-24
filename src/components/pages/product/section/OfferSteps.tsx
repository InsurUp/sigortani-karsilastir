'use client'

import React from 'react'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'
import { 
  ClipboardDocumentListIcon, 
  MagnifyingGlassIcon, 
  ShieldCheckIcon,
  HomeIcon,
  TruckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

interface OfferStepsProps {
  productSlug?: string;
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<any>> = {
  'ClipboardDocumentListIcon': ClipboardDocumentListIcon,
  'MagnifyingGlassIcon': MagnifyingGlassIcon,
  'ShieldCheckIcon': ShieldCheckIcon,
  'HomeIcon': HomeIcon,
  'TruckIcon': TruckIcon,
  'BuildingOfficeIcon': BuildingOfficeIcon,
};

function OfferSteps({ productSlug }: OfferStepsProps) {
    // URL'den slug al veya prop'tan kullan
    const params = useParams();
    const slug = productSlug || (params?.slug as string) || 'default';
    
    // Ürün datasını getir
    const productData = getProductData(slug) || defaultProductData;
    const { offerSteps, name } = productData;

    return (
        <section className="md:py-[90px] py-[50px]">
            <div className='container max-w-[1000px]'>
                <h2 className='text-center text-3xl md:text-4xl font-bold text-[#0D0D0D] md:mb-15 mb-10'>
                    {name} Teklifi Al
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10'>
                    {offerSteps.map((step, index) => {
                        const IconComponent = iconMap[step.icon] || ClipboardDocumentListIcon;
                        return (
                            <div key={index} className="text-center">
                                <div className='bg-[#ED1D24] rounded-full w-[80px] sm:w-[100px] mx-auto h-[80px] sm:h-[100px] flex items-center justify-center mb-6'>
                                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                </div>
                                <h3 className='text-[#000] text-lg sm:text-xl font-bold mb-3'>
                                    {step.title}
                                </h3>
                                <p className='text-gray-600 text-sm sm:text-base leading-relaxed px-2'>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export { OfferSteps }
