import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroCards } from '@/data/mainpage';
import ProductCard from '@/components/common/ProductCard';

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
            <div className="flex flex-row gap-6">
              <a 
                href="https://wa.me/905551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-[15px] sm:px-[45px] py-[20px] rounded-full font-semibold border-1 hover:shadow-lg transition-all duration-200 active:scale-95 text-[15px] w-1/2 sm:w-auto flex items-center justify-center gap-2 hover:bg-[#20C55A]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <button className="bg-red-500 text-white px-[15px] text-base sm:px-[55px] py-[20px] rounded-full hover:bg-red-600 active:scale-95 transition-all duration-200 font-semibold text-lg hover:shadow-lg w-1/2 sm:w-auto flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Yapay Zekaya Sor
              </button>
            </div>
          </div>

          {/* Sağ Kolon - Grid Kartlar */}
          <div className="grid grid-cols-2 gap-4 p-5 lg:gap-6 relative">
            <Image src="/images/banner-shape.png" alt="banner-shape" width={500} height={550} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />

            {/* İlk 2 kart - 2 sütun */}
            <div className="col-span-2 grid grid-cols-2 gap-4 lg:gap-6 relative  hero-cards-container">
              {heroCards.slice(0, 2).map((card) => (
                <ProductCard key={card.id} card={card} isButton={false} />
              ))}
            </div>

            {/* Sonraki 3 kart - 3 sütun */}
            <div className="col-span-2 grid grid-cols-3 gap-4 lg:gap-6 relative">
              {heroCards.slice(2, 5).map((card) => (
                <ProductCard key={card.id} card={card} isButton={false} />
              ))}
            </div>

            {/* Son 2 kart - flex ile ortalanmış */}
            <div className="col-span-2 flex justify-center gap-4 lg:gap-6 relative">
              {heroCards.slice(5, 7).map((card) => (
                <div key={card.id} className="w-full max-w-[200px]">
                  <ProductCard card={card} isButton={false} />
                </div>
              ))}
            </div>
            <div className="col-span-3 text-center">
              <Link href="/urunler" className="text-sm font-medium text-black">Tüm Ürünleri Gör</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero }; 