import { Banner, CTASection } from '@/components/common'
import Image from 'next/image'
import React from 'react'
import { Campaign } from '@/data'
import { OtherCampaing } from './section/OtherCampaing'

function CampaingDetailLayout({ campaign }: { campaign: Campaign }) {

    return (
        <main className="min-h-screen bg-gray-50">
            <Banner text='Kampanyalar' />

            <div className='container max-w-6xl mx-auto px-4 py-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-6'>{campaign.title}</h1>

                <Image
                    src={campaign.image}
                    alt={campaign.title}
                    width={1000}
                    height={350}
                    className="w-full h-[350px] rounded-[10px]  object-top"
                />

                <p className="text-xs text-[#223140] my-3">Kampanya Bitiş Tarihi: {campaign.campaing_end}</p>
                <article className="campaign-content" dangerouslySetInnerHTML={{ __html: campaign.content }}></article>
                <OtherCampaing campaingId={campaign.id} />
            </div>
            <CTASection />
        </main>
    )
}

export default CampaingDetailLayout