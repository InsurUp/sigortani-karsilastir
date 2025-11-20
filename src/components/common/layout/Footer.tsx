import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "Bilgi Merkezi",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/iletisim", label: "İletişim" },
      { href: "/blog", label: "Blog" },
      { href: "/sss", label: "SSS" },
      // { href: "/kampanyalar", label: "Kampanyalar" },
      { href: "/police-hasar", label: "Poliçe ve Hasar" },
    ]
  },
  {
    title: "Ürünler",
    isProducts: true,
    column1: [
      { href: "/urunler/kasko", label: "Kasko" },
      { href: "/urunler/trafik", label: "Trafik" },
      { href: "/urunler/imm", label: "İMM" },
      { href: "/urunler/dask", label: "DASK" },
      { href: "/urunler/konut", label: "Konut" },
    ],
    column2: [
      { href: "/urunler/tamamlayici-saglik-sigortasi", label: "TSS" },
      { href: "/urunler/ozel-saglik", label: "Özel Sağlık" },
      { href: "/seyahat-teklif", label: "Seyahat Sağlık" },
      { href: "/urunler/cep-telefonu", label: "Cep Telefonu" },
    ]
  },
  {
    title: "Kurumsal",
    links: [
      { href: "/gizlilik-sozlesmesi", label: "Gizlilik Politikası" },
      { href: "/mesafeli-satis-sozlesmesi", label: "Kullanım Şartları" },
      { href: "/cerez-politikasi", label: "Çerez Politikası" },
      { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
    ]
  },
];

const Footer: React.FC = () => {
  return (
    <footer className=" pt-[70px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          {/* Sol Kolon */}
          <div className="flex flex-col items-start gap-8 md:w-1/3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={170}
              height={70}
              className="mb-2"
            />
            <Link
              href="/iletisim"
              className="bg-[#262163] border border-white text-white rounded-full px-[45px] py-[16px] text-[22px] font-semibold shadow-lg active:scale-95 transition-all duration-200"
              style={{ width: "max-content" }}
            >
              Bize Ulaşın
            </Link>
            <div className="flex flex-row gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#ED1D24] text-2xl hover:text-[#ED1D24] transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#ED1D24] text-2xl hover:text-[#ED1D24] transition-all">
                <i className="fa-brands fa-twitter"></i>
                  </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#ED1D24] text-2xl hover:text-[#ED1D24] transition-all">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            {/* Güven Rozetleri */}
            <div className="flex flex-row gap-4 items-center mt-4">
              <Image
                src="/images/footer/trgo.png"
                alt="TRGO"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/footer/shield.png"
                alt="Shield"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/footer/etbis.png"
                alt="ETBİS"
                width={80}
                height={42}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Sağ Kolon */}
          <div className="flex flex-1 justify-end md:gap-12 gap-6">
            {footerSections.map((section, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="text-black text-[18px] font-bold mb-4">
                  {section.title}
                </h3>
                {section.isProducts ? (
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      {section.column1.map((link, j) => (
                        <Link
                          key={j}
                          href={link.href}
                          className="text-black text-[16px] mb-3 last:mb-0 hover:underline transition-all"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      {section.column2.map((link, j) => (
                        <Link
                          key={j}
                          href={link.href}
                          className="text-black text-[16px] mb-3 last:mb-0 hover:underline transition-all"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  section.links.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className="text-black text-[16px] mb-3 last:mb-0 hover:underline transition-all"
                    >
                      {link.label}
                    </Link>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Alt Kısım */}
      <div className="mt-12 bg-black text-center">
        <p className="text-white text-[15px] py-8">
          © 2025 Sigortanı Karşılaştır. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export { Footer }; 