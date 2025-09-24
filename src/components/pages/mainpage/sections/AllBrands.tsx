import React from 'react';
import Image from 'next/image';
import { allBrands } from '@/data/allBrands';

const AllBrands = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0D0D0D] mb-4">
            Anlaşmalı Sigorta Şirketlerimiz
          </h2>
          <p className="text-lg text-gray-600">
            Türkiye'nin önde gelen sigorta şirketleriyle çalışıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {allBrands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-20">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={160}
                  height={80}
                  className="object-contain max-w-full max-h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AllBrands };