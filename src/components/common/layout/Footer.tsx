import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/sss", label: "Sıkça Sorulan Sorular" },
    { href: "/blog", label: "Blog" },
  ],
  [
    { href: "/kasko", label: "Kasko Sigortası" },
    { href: "/trafik", label: "Trafik Sigortası" },
    { href: "/dask", label: "DASK" },
  ],
  [
    { href: "/iletisim", label: "İletişim" },
    { href: "/gizlilik", label: "Gizlilik Politikası" },
    { href: "/kullanim", label: "Kullanım Şartları" },
  ],
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
          </div>
          {/* Sağ Kolon */}
          <div className="flex flex-1 justify-end md:gap-20 gap-8">
            {footerLinks.map((col, i) => (
              <div key={i} className="flex flex-col">
                {col.map((link, j) => (
                  <Link
                    key={j}
                    href={link.href}
                    className="text-black text-[16px] mb-5 last:mb-0 hover:underline transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Alt Kısım */}
      <div className="mt-12 bg-black text-center">
        <p className="text-white text-[15px] py-8">
          © 2025 Starkgen. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 