import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section
      className="w-full px-12 py-12 text-center"
      style={{
        background: "linear-gradient(to right, #262163 0%, #000000 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/cta.png"
          alt="CTA Görsel"
          width={50}
          height={55}
          className="mx-auto"
        />
        <h2 className="mt-5 text-[26px] font-bold text-white">
          Hemen Teklif Al, Avantajları Kaçırma!
        </h2>
        <p className="mt-4 text-[20px] text-white">
          En uygun sigorta tekliflerini saniyeler içinde karşılaştır, avantajlı fiyatlarla sigortalan.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/sss"
            className="flex items-center justify-center text-[14px] font-normal text-white transition-all hover:underline"
          >
            Sıkça Sorulan Sorular
          </Link>
          <Link
            href="/urunler"
            className="cursor-pointer rounded-full bg-[#ED1D24] px-5 py-2 text-[14px] font-semibold text-white transition-all hover:bg-[#c4161b] active:scale-95"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
