import React from 'react';
import Image from 'next/image';
import { howItWorksSteps } from '@/data';

const HowItWorks = () => {
    return (
        <section
            className="py-20 bg-[#FAFAFA] relative "
            style={{ clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0 100%)', zIndex: 1 }}
        >
            <div className="container max-w-[1070px]! mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 lg:gap-20 items-center">
                    {/* Sol Kolon - Başlık ve Açıklama */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-3 leading-tight">
                                Nasıl Çalışır
                            </h2>

                            <p className="text-base text-[#12141D] leading-[26px] opacity-70">
                                Araç bilgilerini gir, sigorta tekliflerini saniyeler içinde karşılaştır. En uygun veya en kapsamlı poliçeyi seç, online öde, anında sigortalan.
                            </p>
                        </div>

                    </div>

                    {/* Sağ Kolon - Görsel */}
                    <div className="relative">
                        <div className="aspect-square relative">
                            <Image
                                src="/images/how-it-works-illustration.png"
                                alt="Nasıl Çalışır Görseli"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HowItWorks };  