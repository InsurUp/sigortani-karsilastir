'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

// Swiper CSS'lerini import et
import 'swiper/css';
import 'swiper/css/pagination';

interface CampaignCard {
    id: number;
    title: string;
    image: string;
    badge: string; 
}

interface CampaignSliderProps {
    campaigns: CampaignCard[];
}

const CampaignSlider: React.FC<CampaignSliderProps> = ({ campaigns }) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                className="campaign-swiper"
            >
                {campaigns.map((campaign) => (
                    <SwiperSlide key={campaign.id} className='px-10'>
                        <div
                            className="bg-white rounded-lg cursor-pointer"
                            style={{ boxShadow: '1px 2px 15px rgba(0,0,0,0.15)' }} 
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Sol kısım - Kampanya görseli */}
                                <div className="lg:w-1/2">
                                    <div className=" w-full bg-gray-100 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none flex items-center justify-center">
                                        <Image
                                            width={100}
                                            height={100}
                                            src={campaign.image}
                                            alt={campaign.title}
                                            className=" w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Sağ kısım - İçerik */}
                                <div className="lg:w-1/2 p-6 pt-[50px] flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                                            {campaign.title}
                                        </h3>

                                        {/* Badge */}
                                        <div
                                            className="inline-block mb-4"
                                            style={{
                                                backgroundColor: 'rgba(237, 29, 36, 0.07)',
                                                color: '#ED1D24',
                                                padding: '16px 22px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            <span className="text-2xl lg:text-3xl font-extrabold">
                                                {campaign.badge}
                                            </span>
                                        </div>

                                        {/* Alt metin */}
                                        <p className="text-lg lg:text-xl font-semibold text-gray-700 mb-6">
                                            Fırsatları Kaçırmayın
                                        </p>
                                    </div>


                                    {/* Hemen Keşfet butonu */}
                                    <span className="flex items-center text-red-600 font-medium text-base hover:text-red-700 transition-colors">
                                        Hemen Keşfet
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="ml-2 text-sm"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Pagination dots */}
                <div className="swiper-pagination"></div>
            </Swiper>

            <style jsx global>{`
        .campaign-swiper .swiper-pagination {
          position: relative;
          margin-top: 20px;
          text-align: center;
        }
        
        .campaign-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #D9D9D9;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .campaign-swiper .swiper-pagination-bullet-active {
          background-color: #0E64EC;
          opacity: 0.6;
          transform: scale(1.2);
        }
      `}</style>
        </div>
    );
};

export default CampaignSlider; 