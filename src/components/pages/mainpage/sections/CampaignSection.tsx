"use client"
import React from 'react';
import { CampaignSlider } from '@/components/common';

// Örnek kampanya verileri
const sampleCampaigns = [
  {
    id: 1,
    title: "Kasko ve Trafik Sigortalarında 2 Haziran’a Kadar",
    image: "/images/campaing.png",
    badge: "%25 İndirim", 
  },
  {
    id: 2,
    title: "Konut Sigortası Fırsa tı",
    image: "/images/campaing.png", 
    badge: "%30 İndirim", 
  },
  {
    id: 3,
    title: "Sağlık Sigortası Özel İndirim",
    image: "/images/campaing.png",
    badge: "%20 İndirim", 
  }
];

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
          <CampaignSlider campaigns={sampleCampaigns} />
        </div>
      </div>
    </section>
  );
};

export { CampaignSection }; 