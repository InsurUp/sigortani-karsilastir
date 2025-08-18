import React from 'react'
import { CampaingCard } from '@/components/common'
import { campaigns } from '@/data'

function SuggestCampaing() {
    return (
        <section className='pt-25 pb-20'>
            <div className='container max-w-[1040px]!'>
                <h2 className='lg:text-4xl text-3xl font-bold text-[#0D0D0D] mb-10'>Öne Çıkan Kampanyalar</h2>
                <div>
                    {campaigns.filter((campaign) => campaign.is_suggest).slice(0, 1).map((campaign) => (
                        <CampaingCard key={campaign.id} campaign={campaign} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { SuggestCampaing }