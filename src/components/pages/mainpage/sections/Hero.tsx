import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroCards } from '@/data/mainpage';

const Hero = () => {
  return (
    <section className="py-16 bg-[#EFF7FC]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Kolon - Metin ve Butonlar */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-7xl leading-7 font-bold text-gray-900 leading-tight">
                Kolayca Karşılaştır, Hızla Sigortalan!
              </h1>
              
              <p className="text-base text-black opacity-60 font-medium">
                Tüm sigorta tekliflerini tek ekranda karşılaştır, sana en uygun olanı saniyeler içinde bul.
              </p>
            </div>
            
            {/* Butonlar */}
            <div className="flex flex-row gap-4">
            <button className="bg-[#FAFAFA] text-[#AAAAAA] px-[15px] sm:px-[45px] py-[20px] rounded-full font-semibold border-1 hover:shadow-lg transition-all duration-200 active:scale-95 border-[#AAAAAA] text-[15px] w-1/2 sm:w-auto">
                Bilgi Al
              </button>
              <button className="bg-primary text-white px-[15px] sm:px-[45px] py-[20px] rounded-full hover:bg-opacity-90 active:scale-95 transition-all duration-200 font-semibold text-lg hover:shadow-lg w-1/2 sm:w-auto">
              Teklif Karşılaştır
              </button>
            </div>
          </div>
          
          {/* Sağ Kolon - Grid Kartlar */}
          <div className="grid grid-cols-2 gap-4 p-5 lg:gap-6 relative">
          <Image src="/images/banner-shape.png" alt="banner-shape" width={500} height={550} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />

            {/* İlk 2 kart - 2 sütun */}
            <div className="col-span-2 grid grid-cols-2 gap-4 lg:gap-6 relative">
              {heroCards.slice(0, 2).map((card) => (
                <Link
                  key={card.id}
                  href={`/urunler/${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-[10px] p-6 transition-all duration-300 hover:scale-105 border border-gray-100 block"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-[85px] h-[85px] rounded-full flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={85}
                        height={85}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-semibold text-gray-800 text-sm lg:text-base">
                      {card.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Sonraki 3 kart - 3 sütun */}
            <div className="col-span-2 grid grid-cols-3 gap-4 lg:gap-6 relative">
              {heroCards.slice(2, 5).map((card) => (
                <Link
                  key={card.id}
                  href={`/urunler/${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-[10px] p-4 lg:p-6 transition-all duration-300 hover:scale-105 border border-gray-100 block"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={45}
                        height={45}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-semibold text-gray-800 text-xs lg:text-sm">
                      {card.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Son 3 kart - 3 sütun */}
            <div className="col-span-2 grid grid-cols-3 gap-4 lg:gap-6 relative">
              {heroCards.slice(5, 8).map((card) => (
                <Link
                  key={card.id}
                  href={`/urunler/${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-[10px] p-4 lg:p-6 transition-all duration-300 hover:scale-105 border border-gray-100 block"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={45}
                        height={45}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-semibold text-gray-800 text-xs lg:text-sm">
                      {card.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 