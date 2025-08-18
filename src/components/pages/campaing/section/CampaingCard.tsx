import Link from 'next/link'
import React from 'react'
import { Campaign } from '@/data/campaing'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CampaingCardProps {
    campaign: Campaign;
}

function CampaingCard({ campaign }: CampaingCardProps) {
    return (
        <div className={`relative overflow-hidden transition-all duration-300  ${!campaign.is_active ? 'opacity-60' : 'hover:scale-105'}`}>
            <Link href={campaign.href}>
                <div className=" ">
                    {/* Üst Bölüm - Resim */}
                    <div className={`img-box relative w-full ${campaign.is_active ? 'md:h-[400px] h-[200px]' : 'h-[200px]'} overflow-hidden ${!campaign.is_active ? 'grayscale' : ''}`}>
                        <Image
                            src={campaign.thumbnail}
                            alt={campaign.title}
                            fill
                            className="object-cover rounded-[4px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>

                    {/* Orta Bölüm - Başlık ve Açıklama */}
                    <div className={`py-4 ${!campaign.is_active ? 'grayscale' : ''}`}>
                        <h3 className={`font-bold text-gray-800 mb-2 leading-tight ${campaign.is_active ? 'text-[30px]' : 'text-[20px]'}`}>
                            {campaign.title}
                        </h3>
                        <p className={`text-gray-600 leading-relaxed ${campaign.is_active ? 'text-[16px]' : 'text-[12px]'}`}>
                            {campaign.description}
                        </p>
                    </div>

                    {/* Alt Bölüm - Kampanya Detayları ve CTA */}
                    <div className=" pb-4 flex justify-between items-center">
                        <div className={`text-gray-700 ${!campaign.is_active ? 'grayscale' : ''} ${campaign.is_active ? 'text-xs' : 'text-[9px]'}`}>
                            Kampanya bitiş tarihi: {new Date(campaign.campaing_end).toLocaleDateString('tr-TR')}
                        </div>
 
                         <div className={`flex items-center text-red-600 font-medium hover:text-red-700 transition-colors ${campaign.is_active ? 'text-sm' : 'text-[9px]'}`}>
                            <span>Hemen Keşfet</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-1"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { CampaingCard }