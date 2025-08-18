"use client"
import React from 'react';
import { CampaignSlider } from '@/components/common';
import { campaigns } from '@/data/campaing';

 
const CampaignSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Özel Kampanyalar
          </h2>
       
        </div>
        
        {/* Campaign Slider */}
        <div className="max-w-[992px] mx-auto">
          <CampaignSlider campaigns={campaigns} />
        </div>
      </div>
    </section>
  );
};

export { CampaignSection }; 