import React from 'react';
import Image from 'next/image';
import { brands } from '@/data';

function Brands() {
  return (
    <section className="py-10    bg-white">
      <div className="container mx-auto px-4">       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 lg:gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4"
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={120}
                height={60}
                className="object-contain max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
