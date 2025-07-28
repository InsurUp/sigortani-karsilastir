import React from 'react';
import Image from 'next/image';
import { easyQuoteSteps } from '@/data';

const EasyQuote = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Başlık */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[#0D0D0D] mb-4">
                        3 Adımda Kolay Teklif
                    </h2>
                </div>
            
                {/* Adımlar */}
                <div className="space-y-20">
                    {easyQuoteSteps.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Ortadaki uzun border */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2 hidden lg:block"></div>

                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${step.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
                                }`}>

                                {/* Görsel */}
                                <div className={`order-1 ${step.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="relative flex items-center justify-center">
                                        <Image
                                            src={step.image}
                                            alt={step.alt}
                                            width={250}
                                            height={250}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Metin */}
                                <div className={`px-5 order-2 ${step.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="space-y-6">
                                        <h3 className="text-4xl font-bold text-[#0D0D0D] leading-[40px]">
                                            {step.title}
                                        </h3>
                                        <p className="text-base text-[#12141D] leading-[26px] opacity-70">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { EasyQuote }; 