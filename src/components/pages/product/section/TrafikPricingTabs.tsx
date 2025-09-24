'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { getProductData } from '@/data/products'

interface PricingData {
  tarifeBasamak: string
  istanbul: string
  ankara: string
  izmir: string
  kocaeli: string
  antalya: string
}

interface DiscountData {
  tarifeBasamak: string
  hasarsizlikIndirimi: string
  primArtisi: string
}

interface CoverageData {
  aracGrubu: string
  saglikGideriKisi: string
  saglikGideriKaza: string
  sakatlanmaOluKisi: string
  sakatlanmaOluKaza: string
  maddiZararArac: string
  maddiZararKaza: string
}

interface TrafikPricingData {
  title: string
  description: string
  pricing: PricingData[]
  discounts: DiscountData[]
  coverage: CoverageData[]
  pricingFooter: string
  discountFooter: string
  coverageFooter: string
}

const trafikData: TrafikPricingData = {
  title: 'Trafik Sigortası Fiyatları ve Bilgileri',
  description: '',
  pricing: [
    { tarifeBasamak: '1', istanbul: '37.642 TL', ankara: '-', izmir: '50.464 TL', kocaeli: '-', antalya: '-' },
    { tarifeBasamak: '2', istanbul: '30.434 TL', ankara: '29.432 TL', izmir: '26.595 TL', kocaeli: '28.639 TL', antalya: '28.137 TL' },
    { tarifeBasamak: '3', istanbul: '23.115 TL', ankara: '21.854 TL', izmir: '21.806 TL', kocaeli: '22.569 TL', antalya: '21.371 TL' },
    { tarifeBasamak: '4', istanbul: '13.848 TL', ankara: '13.107 TL', izmir: '12.725 TL', kocaeli: '13.369 TL', antalya: '13.094 TL' },
    { tarifeBasamak: '5', istanbul: '15.608 TL', ankara: '15.498 TL', izmir: '15.106 TL', kocaeli: '15.505 TL', antalya: '15.426 TL' },
    { tarifeBasamak: '6', istanbul: '13.387 TL', ankara: '13.057 TL', izmir: '12.721 TL', kocaeli: '13.321 TL', antalya: '13.115 TL' },
    { tarifeBasamak: '7', istanbul: '10.289 TL', ankara: '10.167 TL', izmir: '9.914 TL', kocaeli: '10.167 TL', antalya: '9.754 TL' },
    { tarifeBasamak: '8', istanbul: '8.512 TL', ankara: '8.271 TL', izmir: '8.153 TL', kocaeli: '8.472 TL', antalya: '8.196 TL' }
  ],
  discounts: [
    { tarifeBasamak: '8', hasarsizlikIndirimi: '%50 Hasarsızlık İndirimi', primArtisi: '' },
    { tarifeBasamak: '7', hasarsizlikIndirimi: '%40 Hasarsızlık İndirimi', primArtisi: '' },
    { tarifeBasamak: '6', hasarsizlikIndirimi: '%20 Hasarsızlık İndirimi', primArtisi: '' },
    { tarifeBasamak: '5', hasarsizlikIndirimi: '%5 Hasarsızlık İndirimi', primArtisi: '' },
    { tarifeBasamak: '4', hasarsizlikIndirimi: '', primArtisi: '%10 Prim Artışı*' },
    { tarifeBasamak: '3', hasarsizlikIndirimi: '', primArtisi: '%45 Prim Artışı' },
    { tarifeBasamak: '2', hasarsizlikIndirimi: '', primArtisi: '%90 Prim Artışı' },
    { tarifeBasamak: '1', hasarsizlikIndirimi: '', primArtisi: '%135 Prim Artışı' },
    { tarifeBasamak: '0', hasarsizlikIndirimi: '', primArtisi: '%200 Prim Artışı' }
  ],
  coverage: [
    { 
      aracGrubu: 'Otomobil/Taksi (İnsan Taşımada Kullanılan Motorlu Araçlar)', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '13.500.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '13.500.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    },
    { 
      aracGrubu: 'Kamyonet, Kamyon, Minibüs veya Çekici (Eşya Taşımada Kullanılan Motorlu Araçlar, Römork ve İş Makineleri)', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '27.000.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '27.000.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    },
    { 
      aracGrubu: 'Tarım Araçları ile Özel Amaçlı Araçlar', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '13.500.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '13.500.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    },
    { 
      aracGrubu: 'Motosiklet ve Yük Motosikleti', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '8.100.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '8.100.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    },
    { 
      aracGrubu: 'Minibüs (sürücü dahil 10-17 koltuk)', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '6.075.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '6.075.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    },
    { 
      aracGrubu: 'Otobüs (sürücü dahil 18-30 koltuk)', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '15.795.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '15.795.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    },
    { 
      aracGrubu: 'Otobüs (sürücü dahil 31+üstü koltuk)', 
      saglikGideriKisi: '2.700.000 TL', 
      saglikGideriKaza: '31.590.000 TL', 
      sakatlanmaOluKisi: '2.700.000 TL', 
      sakatlanmaOluKaza: '31.590.000 TL', 
      maddiZararArac: '300.000 TL', 
      maddiZararKaza: '600.000 TL' 
    }
  ],
  pricingFooter: 'Tablodaki trafik sigortası fiyatları, otomobil araç türü için 1-23 Nisan 2025 tarihleri arasında Sigortam.net\'ten satın alınan ve illere göre ayrıştırılmış tüm trafik sigortası poliçe fiyatlarının medyan (gerçek fiyatların tam ortasındaki tutarlar) değerleridir. Fiyatlar sigorta şirketlerine, aracın bulunduğu ile ve teminatlara göre değişiklik gösterebilir.',
  discountFooter: 'Trafik sigortası hasarsızlık indirimleri, kazasız geçen yıllara göre uygulanır. İndirim oranları sigorta şirketlerine göre değişebilir.',
  coverageFooter: 'Trafik sigortası teminat limitleri, kanunla belirlenmiş minimum tutarlardır. Sigorta şirketleri bu limitleri aşabilir ancak altına düşemez.'
}

export function TrafikPricingTabs() {
  const params = useParams()
  const slug = params.slug as string
  const productData = getProductData(slug)
  
  if (!productData || slug !== 'trafik-sigortasi') {
    return null
  }

  const [activeTab, setActiveTab] = useState<'pricing' | 'discounts' | 'coverage'>('pricing')

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6'>
            {trafikData.title}
          </h2>
          <p className='text-lg text-[#12141D] opacity-70 max-w-4xl mx-auto leading-relaxed'>
            {trafikData.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-8'>
          <div className='flex bg-white rounded-lg p-1 shadow-sm border'>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm ${
                activeTab === 'pricing'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span>Trafik Sigortası<br />Fiyatları Tablosu</span>
            </button>
            <button
              onClick={() => setActiveTab('discounts')}
              className={`px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm ${
                activeTab === 'discounts'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span>Trafik Sigortası<br />Hasarsızlık İndirim Oranları</span>
            </button>
            <button
              onClick={() => setActiveTab('coverage')}
              className={`px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm ${
                activeTab === 'coverage'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span>Trafik Sigortası Teminatları<br />ve Limitleri</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
          {activeTab === 'pricing' && (
            <div>
              <div className='px-6 py-4 bg-gray-50 border-b flex justify-between items-center'>
                <span className='text-sm font-medium text-gray-700'>Araç Türü: Otomobil</span>
                <span className='text-sm font-medium text-gray-700'>Trafik Sigortası Fiyatları</span>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Tarife Basamak Kodu</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>İstanbul</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Ankara</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>İzmir</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Kocaeli</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Antalya</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {trafikData.pricing.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.tarifeBasamak}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.istanbul}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.ankara}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.izmir}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.kocaeli}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.antalya}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'discounts' && (
            <div>
              <div className='px-6 py-4 bg-gray-50 border-b flex justify-between items-center'>
                <span className='text-sm font-medium text-gray-700'>Araç Türü: Otomobil/Kamyonet/Motosiklet</span>
                <span className='text-sm font-medium text-gray-700'>Hasarsızlık İndirim Oranları</span>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Tarife Basamak No</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Hasarsızlık İndirim Oranı</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Prim Artış Oranı</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {trafikData.discounts.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.tarifeBasamak}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.hasarsizlikIndirimi}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.primArtisi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'coverage' && (
            <div>
              <div className='px-6 py-4 bg-gray-50 border-b flex justify-end'>
                <span className='text-sm font-medium text-gray-700'>Trafik Sigortası Teminatları</span>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Araç Grubu</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900' colSpan={2}>Sağlık Gideri</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900' colSpan={2}>Sakatlanma ve Ölüm</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900' colSpan={2}>Maddi Zararlar</th>
                    </tr>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'></th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Kişi Başına</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Kaza Başına</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Kişi Başına</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Kaza Başına</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Araç Başına</th>
                      <th className='px-6 py-4 text-center text-sm font-semibold text-gray-900'>Kaza Başına</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {trafikData.coverage.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className='px-6 py-4 text-sm text-gray-900'>{item.aracGrubu}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.saglikGideriKisi}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.saglikGideriKaza}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.sakatlanmaOluKisi}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.sakatlanmaOluKaza}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.maddiZararArac}</td>
                        <td className='px-6 py-4 text-center text-sm text-gray-900'>{item.maddiZararKaza}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Footer */}
          {activeTab === 'pricing' && (
            <div className='px-6 py-4 bg-gray-50 border-t'>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {trafikData.pricingFooter}
              </p>
            </div>
          )}
          {activeTab === 'discounts' && (
            <div className='px-6 py-4 bg-gray-50 border-t'>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {trafikData.discountFooter}
              </p>
            </div>
          )}
          {activeTab === 'coverage' && (
            <div className='px-6 py-4 bg-gray-50 border-t'>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {trafikData.coverageFooter}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
