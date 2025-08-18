import { campaigns } from "@/data";
import { CampaingCard } from "./CampaingCard";

function ActiveCampaing() {
    return (
        <section className='py-15 bg-[#EFF7FC]/45'>
            <div className="container  max-w-[1040px]! px-4">
                <h2 className='lg:text-4xl text-3xl font-bold text-[#0D0D0D] mb-10 '>Tüm Kampanyalar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {campaigns.filter((campaign) => campaign.is_active).map((campaign) => (
                        <CampaingCard key={campaign.id} campaign={campaign} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { ActiveCampaing }