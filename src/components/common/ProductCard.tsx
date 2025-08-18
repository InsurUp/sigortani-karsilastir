import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  card: {
    id: string | number;
    title: string;
    image: string;
    alt: string;
  };
  isButton: boolean;
}

function ProductCard({ card, isButton }: ProductCardProps) {
  return (
    <Link
      key={card.id}
      href={`/urunler/${card.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="bg-white rounded-[10px] p-4 lg:p-6 transition-all duration-300 hover:scale-105 border border-gray-100 block"
    >
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
        {isButton && (
          <button className="bg-primary text-white px-8 py-2 rounded-md">
            Teklif Al
          </button>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
