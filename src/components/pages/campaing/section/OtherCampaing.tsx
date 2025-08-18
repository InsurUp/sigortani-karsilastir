import { campaigns } from "@/data"
import { CampaingCard } from "./CampaingCard"

function OtherCampaing({ campaingId }: { campaingId: number }) {
    return (
        <div className="py-15">
            <h2 className='lg:text-4xl text-3xl font-bold text-[#0D0D0D] mb-10  '>Diğer Kampanyalar</h2>
            <div className="other-campaing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {campaigns.filter((campaign) => campaign.is_active && campaign.id !== campaingId).map((campaign) => (
                    <CampaingCard key={campaign.id} campaign={campaign} />
                ))}
            </div>
        </div>
    )
}

export { OtherCampaing }