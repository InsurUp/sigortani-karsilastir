import Image from 'next/image'
import React from 'react'

function Guaranties() {
  return (
    <section className='py-20 bg-[#FAFAFA] relative ' style={{ clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0 100%)', zIndex: 1 }}>
        <div className='container max-w-[800px]! ' >
            <h2 className='text-center text-4xl font-bold text-[#0D0D0D] md:mb-15 mb-10'>Kasko Sigortası Nedir?</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'  >
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
                <li className='flex items-center gap-4'>
                    <Image src="/images/teminat_icon.png" width={25} height={25} className='object-contain' alt='guaranties' />
                    <p className='text-[#12141D] text-base opacity-70'>All the Lorem Ipsum generators on the </p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export { Guaranties }