'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getProductData } from '@/data/products'

interface PricingData {
  brand: string
  modelYear: string
  model: string
  discountRate: string
  price: string
}

interface DiscountData {
  years: string
  discountRate: string
  application: string
}

interface KaskoPricingData {
  title: string
  description: string
  pricing: PricingData[]
  discounts: DiscountData[]
  pricingFooter: string
  discountFooter: string
}

const kaskoData: KaskoPricingData = {
  title: 'Kasko Fiyatları ve Hasarsızlık İndirimleri',
  description: '',
  pricing: [
    { brand: 'TOGG', modelYear: '2025', model: 'T10X V2 RWD UZUN MENZIL 160KW', discountRate: '0%', price: '22.310 TL' },
    { brand: 'RENAULT (OYAK)', modelYear: '2024', model: 'CLIO EVOLUTION 1.0 TCE X-TRONIC 90', discountRate: '0%', price: '10.635 TL' },
    { brand: 'KGMOBILITY', modelYear: '2024', model: 'TORRES EVX', discountRate: '30%', price: '16.549 TL' },
    { brand: 'CHERY', modelYear: '2024', model: 'TIGGO 7 PRO AVANTGARDE', discountRate: '30%', price: '13.223 TL' },
    { brand: 'TOGG', modelYear: '2024', model: 'T10X V2 RWD UZUN MENZIL 160KW', discountRate: '40%', price: '16.957 TL' },
    { brand: 'VOLKSWAGEN', modelYear: '2024', model: 'POLO 1.0 TSI 95 DSG LIFE', discountRate: '40%', price: '11.807 TL' },
    { brand: 'TOFAS-FIAT', modelYear: '2023', model: 'EGEA CROSS URBAN 1.4 FIRE 95 E6D', discountRate: '50%', price: '7.089 TL' },
    { brand: 'OPEL', modelYear: '2022', model: 'CROSSLAND 1.2 130 AT6 ESSENTIAL', discountRate: '50%', price: '8.005 TL' },
    { brand: 'TOYOTA', modelYear: '2021', model: 'COROLLA 1.5 DREAM MULTIDRIVE S', discountRate: '60%', price: '7.246 TL' },
    { brand: 'SKODA', modelYear: '2021', model: 'KAMIQ 1.0 TSI 110 DSG ELITE', discountRate: '60%', price: '7.664 TL' }
  ],
  discounts: [
    { 
      years: '0', 
      discountRate: '-', 
      application: 'Kasko poliçesini ilk kez yaptıran sigortalı için hasarsızlık indirimi uygulanmaz.' 
    },
    { 
      years: '1', 
      discountRate: '30%', 
      application: 'İlk yılını hasarsız geçiren sigortalı için ilk kasko yenilemesinde %30 hasarsızlık indirimi uygulanır.' 
    },
    { 
      years: '2', 
      discountRate: '40%', 
      application: 'İkinci yılını hasarsız geçiren sigortalı için ikinci yıl kasko yenilemesinde %40 hasarsızlık indirimi uygulanır.' 
    },
    { 
      years: '3', 
      discountRate: '50%', 
      application: 'Üçüncü yılını hasarsız geçiren sigortalı için üçüncü yıl kasko yenilemesinde %50 hasarsızlık indirimi uygulanır.' 
    },
    { 
      years: '4', 
      discountRate: '60%', 
      application: 'Dördüncü yılını hasarsız geçiren sigortalı için dördüncü yıl kasko yenilemesinde %60 hasarsızlık indirimi uygulanır.' 
    }
  ],
  pricingFooter: '',
  discountFooter: 'Kasko hasarsızlık indiriminin uygulanması için kasko her yıl yenilenmelidir. Bir kaza ya da hasar durumunda kasko kullanılıp poliçe bozulursa, araç sahibi bir alt kademedeki hasarsızlık indiriminden faydalanabilir. Hasarsızlık indirimleri sigorta şirketlerine göre değişmektedir.'
}

export function KaskoPricingTabs() {
  const params = useParams()
  const slug = params.slug as string
  const productData = getProductData(slug)
  
  if (!productData || slug !== 'kasko-sigortasi') {
    return null
  }

  const [activeTab, setActiveTab] = useState<'pricing' | 'discounts'>('pricing')

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6'>
            {kaskoData.title}
          </h2>
          <p className='text-lg text-[#12141D] opacity-70 max-w-4xl mx-auto leading-relaxed'>
            {kaskoData.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-8'>
          <div className='flex bg-white rounded-lg p-1 shadow-sm border'>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'pricing'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Kasko Fiyatları
            </button>
            <button
              onClick={() => setActiveTab('discounts')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'discounts'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Hasarsızlık İndirimleri
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
          {activeTab === 'pricing' && (
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Marka</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Model Yılı</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Model</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Hasarsızlık İndirimi</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Kasko Fiyatı</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {kaskoData.pricing.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className='px-6 py-4 text-sm text-gray-900'>{item.brand}</td>
                      <td className='px-6 py-4 text-sm text-gray-900'>{item.modelYear}</td>
                      <td className='px-6 py-4 text-sm text-gray-900'>{item.model}</td>
                      <td className='px-6 py-4 text-sm text-gray-900'>{item.discountRate}</td>
                      <td className='px-6 py-4 text-sm font-semibold text-gray-900'>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

           {activeTab === 'discounts' && (
             <div className='overflow-x-auto'>
               <table className='w-full'>
                 <thead className='bg-gray-50'>
                   <tr>
                     <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Hasarsız Geçirilen Yıl</th>
                     <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Hasarsızlık İndirimi (%)</th>
                     <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Kasko Hasarsızlık İndirimi Uygulaması</th>
                   </tr>
                 </thead>
                 <tbody className='divide-y divide-gray-200'>
                   {kaskoData.discounts.map((item, index) => (
                     <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                       <td className='px-6 py-4 text-sm text-gray-900'>{item.years}</td>
                       <td className='px-6 py-4 text-sm font-semibold text-gray-900'>{item.discountRate}</td>
                       <td className='px-6 py-4 text-sm text-gray-900'>{item.application}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           )}

          {/* Footer */}
          {activeTab === 'discounts' && (
            <div className='px-6 py-4 bg-gray-50 border-t'>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {kaskoData.discountFooter}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
