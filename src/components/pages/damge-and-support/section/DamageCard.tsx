import React from "react";
import Image from "next/image";

interface DamageCardProps {
  title: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

const DamageCard: React.FC<DamageCardProps> = ({ title, image, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-[20px] 
        px-6 py-5 
        bg-[rgba(217,217,217,0.3)] 
        cursor-pointer 
        flex flex-col items-center 
        transition-opacity duration-200 
        border-2
        ${active 
          ? 'opacity-100 border-[#262163] shadow-[0_2px_12px_rgba(38,33,99,0.08)]' 
          : 'opacity-30 border-transparent'
        }
        hover:opacity-100
        sm:px-8 sm:py-6
        md:px-10 md:py-8
      `}
    >
      <div className="relative flex flex-col-reverse items-center justify-center gap-2.5">
        <Image
          src={image}
          alt={title}
          width={85}
          height={85}
          className="object-contain mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-[85px] md:h-[85px]"
        />
        <div className="w-8 h-8 sm:w-[33px] sm:h-[33px] rounded-full border border-[#989898] bg-white flex items-center justify-center">
          <div 
            className={`
              w-4 h-4 sm:w-[17px] sm:h-[17px] rounded-full transition-colors duration-200
              ${active ? 'bg-[#ED1D24]' : 'bg-transparent'}
            `}
          />
        </div>
      </div>
      <span className="text-lg sm:text-xl md:text-2xl font-bold text-center leading-tight">
        {title}
      </span>
    </div>
  );
};

export default DamageCard; 