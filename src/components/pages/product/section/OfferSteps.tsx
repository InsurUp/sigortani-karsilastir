import React from 'react'
import Image from 'next/image'

function OfferSteps() {
    return (
        <section className="md:py-[90px] py-[50px]">
            <div className='container max-w-[800px]! '>
                <h2 className='text-center text-4xl font-bold text-[#0D0D0D] md:mb-15 mb-10'>Kasko Sigortası Teklif Almak İçin</h2>
                <div className='grid grid-cols-3 gap-10'>
                    <div className="text-center">
                        <div className='bg-[#ED1D24] rounded-full w-[70px] sm:w-[100px] mx-auto  h-[70px] sm:h-[100px] flex items-center justify-center'>
                            <Image src="/images/teminat_icon.png" width={65} height={65} className='object-contain' alt='guaranties' />
                        </div>
                        <p className='text-[#000] text-base sm:text-xl font-bold mt-5 sm:mt-10'>Bilgilerini gir</p>
                    </div>
                    <div className="text-center">
                        <div className='bg-[#ED1D24] rounded-full w-[70px] sm:w-[100px] mx-auto  h-[70px] sm:h-[100px] flex items-center justify-center'>
                            <Image src="/images/teminat_icon.png" width={65} height={65} className='object-contain' alt='guaranties' />
                        </div>
                        <p className='text-[#000] text-base sm:text-xl font-bold mt-5 sm:mt-10'>Bilgilerini gir</p>
                    </div>
                    <div className="text-center">
                        <div className='bg-[#ED1D24] rounded-full w-[70px] sm:w-[100px] mx-auto  h-[70px] sm:h-[100px] flex items-center justify-center'>
                            <Image src="/images/teminat_icon.png" width={65} height={65} className='object-contain' alt='guaranties' />
                        </div>
                        <p className='text-[#000] text-base sm:text-xl font-bold mt-5 sm:mt-10'>Bilgilerini gir</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { OfferSteps }