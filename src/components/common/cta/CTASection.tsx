import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTASection: React.FC = () => {
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
        Hemen Teklif Al, Avantajları Kaçırma!
      </h2>
      <p className="text-[20px] text-white mt-4">
        En uygun sigorta tekliflerini saniyeler içinde karşılaştır, avantajlı fiyatlarla sigortalan.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8" style={{ marginTop: 30 }}>
        <Link
          href="/sss"
          className="text-white text-[14px] flex items-center justify-center font-normal hover:underline transition-all"
        >
          Sıkça Sorulan Sorular
        </Link>
        <Link
          href="/teklif-al"
          className="bg-[#ED1D24] text-white text-[14px] font-semibold px-5 py-2 rounded-full transition-all hover:bg-[#c4161b] cursor-pointer active:scale-95"
          style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
        >
          Teklif Al
        </Link>
      </div>
    </section>
  );
};

export default CTASection; 