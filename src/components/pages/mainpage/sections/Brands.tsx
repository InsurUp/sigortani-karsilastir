'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { brands } from '@/data';

// Swiper CSS'lerini import et
import 'swiper/css'; 

function Brands() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
 
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          simulateTouch={false}
          freeMode={false}
          speed={2500}
          mousewheel={{
            invert:false,
            enabled:false
          }} 
          autoplay={{
            delay: 0,
            disableOnInteraction: false, 
          }} 
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="brands-swiper items-center justify-center"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id} className='flex items-center justify-center'>
              <div className="flex items-center justify-center ">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="object-contain max-w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
 
      </div>

 
    </section>
  );
}

export { Brands };
