import React from 'react';
import ProductRequestForm from '@/components/common/ProductRequestForm';

const HowItWorks = () => {
    return (
        <section
            className="py-20 bg-[#FAFAFA] relative "
            style={{ clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0 100%)', zIndex: 1 }}
        >
            <div className="container max-w-[1070px]! mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 lg:gap-20 items-center">
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

                    <div className="relative mt-10 lg:mt-0">
                        <ProductRequestForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HowItWorks };
