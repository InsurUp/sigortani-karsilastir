'use client'

import React from 'react'
import Image from 'next/image'
import { allBrands } from '@/data/allBrands'

function InsuranceCompanies() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Sigorta Şirketlerine Göre Anlaşmalı Oto Servisleri
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sigortanı Karşılaştır ile sigorta şirketlerine göre anlaşmalı oto servisleri listesine ulaşın. 
            Trafik ve kasko sigortası kapsamında hizmet alabileceğiniz servisleri keşfedin!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allBrands.map((brand) => (
            <div
              key={brand.id}
              className={`group border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-gray-300 ${
                brand.serviceLink ? 'cursor-pointer' : 'cursor-default opacity-60'
              }`}
              onClick={() => {
                if (brand.serviceLink) {
                  window.open(brand.serviceLink, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex items-center justify-center h-16">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className={`object-contain filter transition-all duration-300 ${
                    brand.serviceLink ? 'grayscale group-hover:grayscale-0' : 'grayscale'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { InsuranceCompanies }