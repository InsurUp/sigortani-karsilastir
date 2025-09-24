import React from 'react'
import Image from 'next/image'
import { heroCards } from '@/data/mainpage';
import ProductCard from '@/components/common/ProductCard';

function ProductPageLayout() {
    return (
        <section className='product-page bg-[#D9EDFA]/40 md:py-[120px] py-[50px]'>
            <div className="container mx-auto px-4">
                {/* Başlık */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6">
                        Sigorta Türünü Seçin, Kolayca Teklif Alın!
                    </h1>
                </div>
                
                {/* Ürün Kartları */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Arka plan şekilleri */}
                    <Image 
                        src="/images/prod-shape.png" 
                        alt="prod-shape" 
                        width={600} 
                        height={450} 
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-20 pointer-events-none"
                    />
                    <Image 
                        src="/images/prod-shape.png" 
                        alt="prod-shape" 
                        width={600} 
                        height={450} 
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-20 pointer-events-none"
                    />
                    
                    {/* Üst satır - 4 kart */}
                    <div className="flex justify-center gap-6 mb-6 relative z-10">
                        {heroCards.slice(0, 4).map((card) => (
                            <div key={card.id} className="w-[200px]">
                                <ProductCard card={card} isButton={true} />
                            </div>
                        ))}
                    </div>
                    
                    {/* Alt satır - 3 kart ortalanmış */}
                    <div className="flex justify-center gap-6 relative z-10">
                        {heroCards.slice(4, 7).map((card) => (
                            <div key={card.id} className="w-[200px]">
                                <ProductCard card={card} isButton={true} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPageLayout