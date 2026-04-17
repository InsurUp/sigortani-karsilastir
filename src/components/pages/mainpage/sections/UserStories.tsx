'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { userStories } from '@/data/userStories';

// Swiper CSS'lerini import et
import 'swiper/css';
import 'swiper/css/pagination';

const storySummaries: Record<number, string> = {
  1: 'Yoğun iş gününde kasko tekliflerini hızla karşılaştırıp poliçesini dakikalar içinde tamamladı.',
  2: 'Kaza anında chatbot ve WhatsApp desteğiyle hasar sürecini panik yaşamadan yönetti.',
  3: 'Konut sigortasını güvenle seçip SSL sertifikalı ödeme ile hızlıca tamamladı.',
  4: 'Yoğun iş temposunda en uygun trafik sigortasını kısa sürede bulup kolayca satın aldı.',
};

const UserStories = () => {
  const getStoryPreview = (id: number, story: string) => {
    return storySummaries[id] || story;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kullanıcı Hikayelerimiz
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Gerçek müşterilerimizin deneyimlerini keşfedin
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.user-stories-pagination',
            }}
            loop={true}
            className="user-stories-swiper"
          >
            {userStories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="relative w-full">
                  {/* Ana Kart */}
                  <div className="relative w-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.07)] md:p-6">
                    
                    <div className="relative z-10">
                      {/* Üst Kısım - Kullanıcı Bilgileri */}
                      <div className="mb-5 flex items-start justify-between gap-3 md:gap-4">
                        <div className="flex min-w-0 items-center space-x-4">
                          <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                              {story.name.charAt(0)}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="min-w-0">
                            <h3 className="mb-1 truncate text-lg font-bold text-gray-900 md:text-xl">
                              {story.name}
                            </h3>
                            <div className="flex items-center text-gray-600">
                              <span className="truncate font-medium">{story.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex shrink-0 flex-col items-end">
                          <div className="mb-2 flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">5.0 Puan</span>
                        </div>
                      </div>

                      {/* Hikaye Başlığı */}
                      <h4 className="mb-4 line-clamp-2 break-words text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                        {story.title}
                      </h4>

                      {/* Hikaye Metni */}
                      <div className="relative rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-4">
                        <div className="absolute left-4 top-2 text-2xl font-serif text-blue-200">&quot;</div>
                        <blockquote className="pl-5 pr-1 text-[15px] leading-7 text-gray-700 italic md:text-base">
                          {getStoryPreview(story.id, story.story)}
                        </blockquote>
                        <div className="absolute bottom-2 right-4 text-2xl font-serif text-blue-200">&quot;</div>
                      </div>

                      <div className="mt-3">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          Gerçek Müşteri Deneyimi
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Pagination dots */}
            <div className="user-stories-pagination mt-8"></div>
          </Swiper>

          {/* Özel CSS stilleri */}
          <style jsx global>{`
            .user-stories-swiper .user-stories-pagination {
              position: relative;
              text-align: center;
            }
            
            .user-stories-swiper .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background-color: #CBD5E1;
              opacity: 1;
              margin: 0 6px;
              transition: all 0.3s ease;
              border-radius: 6px;
            }
            
            .user-stories-swiper .swiper-pagination-bullet-active {
              background-color: #0E64EC;
              width: 24px;
              transform: scale(1);
            }

             .user-stories-swiper .swiper-slide {
               height: auto;
             }

             .user-stories-swiper {
               overflow: hidden;
             }

             .user-stories-swiper .swiper-wrapper {
               align-items: flex-start;
             }
           `}</style>
        </div>
      </div>
    </section>
  );
};

export { UserStories };
