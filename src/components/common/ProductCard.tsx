import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  card: {
    id: string | number;
    title: string;
    image: string;
    alt: string;
    link?: string;
  };
  isButton: boolean;
}

const productInfoLinks: Record<string, string> = {
  Kasko: "/urunler/kasko-sigortasi",
  "Tamamlayıcı Sağlık": "/urunler/tamamlayici-saglik-sigortasi",
  Trafik: "/urunler/trafik-sigortasi",
  Konut: "/urunler/konut-sigortasi",
  "İMM": "/urunler/imm-sigortasi",
  "Seyahat Sağlık": "/urunler/seyahat-saglik-sigortasi",
  DASK: "/urunler/zorunlu-deprem-sigortasi",
};

const createFallbackInfoLink = (title: string) =>
  `/urunler/${title
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")}`;

function ProductCard({ card, isButton }: ProductCardProps) {
  const teklifLink = card.link || createFallbackInfoLink(card.title);
  const bilgiLink = productInfoLinks[card.title] || createFallbackInfoLink(card.title);

  const cardContent = (
    <div className="flex flex-col items-center text-center space-y-3 h-full justify-between">
      <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
        <Image
          src={card.image}
          alt={card.alt}
          width={45}
          height={45}
          className="object-contain"
        />
      </div>
      <p className="font-bold text-gray-800 text-xs lg:text-base">
        {card.title}
      </p>
    </div>
  );

  if (!isButton) {
    return (
      <div key={card.id}>
        <Link
          href={teklifLink}
          className="bg-white rounded-[10px] p-4 lg:py-6 lg:px-4 transition-all duration-300 hover:scale-105 border border-gray-100 block"
        >
          {cardContent}
        </Link>
      </div>
    );
  }

  return (
    <div key={card.id}>
      <div className="bg-white rounded-[10px] p-4 lg:py-5 lg:px-4 transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full shadow-[0_12px_30px_rgba(16,24,40,0.08)]">
        <div className="flex flex-col items-center text-center space-y-3 h-full">
          {cardContent}
          <div className="w-full space-y-2 pt-0.5">
            <Link
              href={teklifLink}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-3 text-[11px] font-bold text-white transition-colors duration-200 hover:bg-[#d51a20]"
            >
              Teklif Al
            </Link>
            <Link
              href={bilgiLink}
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-[#223140]/15 bg-[#F8FAFC] px-3 text-[11px] font-bold text-[#223140] transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              Bilgi Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
