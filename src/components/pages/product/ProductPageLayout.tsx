import React from 'react'
import { heroCards } from '@/data/mainpage';
import ProductCard from '@/components/common/ProductCard';

function ProductPageLayout() {
    return (
        <section className='product-page bg-[#D9EDFA]/40 md:py-[120px] py-[50px]'>
            <div className="container max-w-[1055px]!">
                <div className="grid grid-cols-5 gap-[25px] relative">
                    {heroCards.map((card) => (
                        <ProductCard key={card.id} card={card} isButton={true} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductPageLayout