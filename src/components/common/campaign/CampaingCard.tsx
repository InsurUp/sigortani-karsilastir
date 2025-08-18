import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Campaign } from '@/data/campaing'
import Link from 'next/link'

const CampaingCard = ({ campaign }: { campaign: Campaign }) => {
    return (    
        <Link href={`${campaign.href}`} className="group bg-white rounded-xl cursor-pointer shadow-[1px_2px_15px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                    <div className="relative w-full h-48 sm:h-70 md:h-60 lg:h-full bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image
                            src={campaign.thumbnail}
                            alt={campaign.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight line-clamp-2">
                            {campaign.title}
                        </h3>

                        {/* Sales Badge */}
                        <div className="inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 bg-[#ED1D24]/7 rounded-lg">
                            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#ED1D24]">
                                {campaign.sales}
                            </span>
                        </div>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
                            Fırsatları Kaçırmayın
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="sm:mt-6 sm:pt-4 mt-5">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                            <span className="text-xs sm:text-sm text-gray-500 font-medium">
                                Kampanya Bitiş Tarihi: {campaign.campaing_end}
                            </span>
                            <button className="inline-flex items-center justify-center text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base transition-colors duration-200 group/button">
                                <span>Hemen Keşfet</span>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-1"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { CampaingCard }