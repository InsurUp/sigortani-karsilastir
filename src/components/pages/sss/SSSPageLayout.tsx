import React from 'react'
import { Banner } from '@/components/common'
import { SSSAccordion } from './SSSAccordion'
import { sssData } from '@/data/sss'

const SSSPageLayout = () => {
  return (
    <main>
      <Banner text="Sıkça Sorulan Sorular" />
      
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <SSSAccordion items={sssData} />
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Aradığınızı bulamadınız mı?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/iletisim" 
                className="bg-[#ED1D24] text-white px-8 py-3 rounded-full hover:bg-[#d01a20] transition-colors duration-200 font-semibold"
              >
                İletişime Geçin
              </a>
              <button className="bg-[#262163] text-white px-8 py-3 rounded-full hover:bg-[#1e1a4f] transition-colors duration-200 font-semibold">
                Yapay Zekaya Sor
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SSSPageLayout
