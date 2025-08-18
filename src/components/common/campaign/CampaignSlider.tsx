'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { CampaingCard } from './CampaingCard';
import { Campaign } from '@/data/campaing';

// Swiper CSS'lerini import et
import 'swiper/css';
import 'swiper/css/pagination';


const CampaignSlider: React.FC<{ campaigns: Campaign[] }> = ({ campaigns }) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoHeight={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                loop={true}
                breakpoints={{
                   
                    576: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                className="campaign-swiper"
            >
                {campaigns.map((campaign) => (
                    <SwiperSlide key={campaign.id} className='lg:px-10 '>
                        <CampaingCard
                            campaign={campaign}
                        />
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

export { CampaignSlider }; 