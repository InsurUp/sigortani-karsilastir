'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProductData, defaultProductData } from '@/data'
import { useParams } from 'next/navigation'

interface ProductCTAProps {
  productSlug?: string;
}

function ProductCTA({ productSlug }: ProductCTAProps) {
  // URL'den slug al veya prop'tan kullan
  const params = useParams();
  const slug = productSlug || (params?.slug as string) || 'default';
  
  // Ürün datasını getir
  const productData = getProductData(slug) || defaultProductData;
  const { name } = productData;

  // Dinamik CTA içerikleri
  const getCTAContent = (productName: string) => {
    switch (productName.toLowerCase()) {
      case 'dask sigortası':
        return {
          title: 'Şimdi DASK Teklifini Al!',
          description: 'Evini deprem risklerine karşı korumak için vakit kaybetme! Sigortanı Karşılaştır ile en iyi DASK poliçesini saniyeler içinde bul, chatbot ve WhatsApp desteğimizle güvenle sigortalan. Hemen teklif al, evin güvende olsun!'
        };
      case 'kasko sigortası':
        return {
          title: 'Şimdi Kasko Teklifini Al!',
          description: 'Aracını her türlü riske karşı korumak için vakit kaybetme! Sigortanı Karşılaştır ile en iyi Kasko poliçesini saniyeler içinde bul, chatbot ve WhatsApp desteğimizle güvenle sigortalan. Hemen teklif al, aracın güvende olsun!'
        };
      case 'trafik sigortası':
        return {
          title: 'Şimdi Trafik Teklifini Al!',
          description: 'Yasal zorunluluğunu yerine getirmek için vakit kaybetme! Sigortanı Karşılaştır ile en iyi Trafik sigortası poliçesini saniyeler içinde bul, chatbot ve WhatsApp desteğimizle güvenle sigortalan. Hemen teklif al, yola güvenle çık!'
        };
      case 'konut sigortası':
        return {
          title: 'Şimdi Konut Teklifini Al!',
          description: 'Evini yangın, hırsızlık ve doğal afetlere karşı korumak için vakit kaybetme! Sigortanı Karşılaştır ile en iyi Konut sigortası poliçesini saniyeler içinde bul, chatbot ve WhatsApp desteğimizle güvenle sigortalan. Hemen teklif al, evin güvende olsun!'
        };
      default:
        return {
          title: 'Şimdi Sigorta Teklifini Al!',
          description: 'En uygun sigorta tekliflerini saniyeler içinde karşılaştır, chatbot ve WhatsApp desteğimizle güvenle sigortalan. Hemen teklif al, güvende ol!'
        };
    }
  };

  const ctaContent = getCTAContent(name);

  return (
    <section
      className="w-full py-12 flex flex-col items-center justify-center text-center px-12"
      style={{
        background: "linear-gradient(to right, #262163 0%, #000000 100%)",
      }}
    > 
      <Image
        src="/images/cta.png"
        alt="CTA Görsel"
        width={50}
        height={55}
        className="mx-auto"
      />
      <h2 className="text-[26px] font-bold text-white mt-5">
        {ctaContent.title}
      </h2>
      <p className="text-[20px] text-white mt-4 max-w-4xl">
        {ctaContent.description}
      </p>
      <div className="flex justify-center mt-8" style={{ marginTop: 30 }}>
        <Link
          href={`/urunler/${slug}/teklif`}
          className="bg-[#ED1D24] text-white text-[14px] font-semibold px-5 py-2 rounded-full transition-all hover:bg-[#c4161b] cursor-pointer active:scale-95"
          style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
        >
          Teklif Al
        </Link>
      </div>
    </section>
  );
}

export { ProductCTA }
