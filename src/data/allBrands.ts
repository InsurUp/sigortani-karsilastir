export interface AllBrand {
  id: number;
  name: string;
  logo: string;
  colorLogo?: string; // renkli logo (hover için)
  alt: string;
  serviceLink?: string; // anlaşmalı servis linki
}

export const allBrands: AllBrand[] = [
  // Öncelikli büyük şirketler (ilk sırada)
  {
    id: 1,
    name: "Anadolu Sigorta",
    logo: "/images/brands/anadolu.svg",
    alt: "Anadolu Sigorta Logo",
    serviceLink: "https://www.anadolusigorta.com.tr/anlasmali-oto-servis-hizmetleri"
  },
  {
    id: 2,
    name: "Axa Sigorta",
    logo: "/images/brands/axa.png",
    alt: "Axa Sigorta Logo",
    serviceLink: "https://www.axasigorta.com.tr/anlasmali-otomobil-servisleri"
  },
  {
    id: 3,
    name: "Allianz Sigorta",
    logo: "/images/brands/allianz.png",
    alt: "Allianz Sigorta Logo",
    serviceLink: "https://www.allianz.com.tr/tr_tr/sigorta/otomobil/anlasmali-servisler.html"
  },
  {
    id: 4,
    name: "Türkiye Sigorta",
    logo: "/images/brands/turkiye.png",
    alt: "Türkiye Sigorta Logo",
    serviceLink: "https://www.turkiyesigorta.com.tr/anlasmali-servislerimiz/anlasmali-oto-servisleri"
  },
  // Diğer şirketler
  {
    id: 5,
    name: "HDI Sigorta",
    logo: "/images/brands/hdi.png",
    alt: "HDI Sigorta Logo",
    serviceLink: "https://www.hdisigorta.com.tr/anlasmali-servisler/anlasmali-tamir-servisleri-goruntuleyin"
  },
  {
    id: 6,
    name: "Bereket Sigorta",
    logo: "/images/brands/bereket.svg",
    alt: "Bereket Sigorta Logo",
    serviceLink: "https://www.bereket.com.tr/anlasmali-servisler"
  },
  {
    id: 7,
    name: "Doğa Sigorta",
    logo: "/images/brands/doga.png",
    alt: "Doğa Sigorta Logo",
    serviceLink: "https://www.dogasigorta.com/anlasmali-kurumlar"
  },
  {
    id: 8,
    name: "Sompo Sigorta",
    logo: "/images/brands/sompo.png",
    alt: "Sompo Sigorta Logo",
    serviceLink: "https://www.somposigorta.com.tr/anlasmali-onarim-servisleri"
  },
  {
    id: 9,
    name: "Türk Nippon Sigorta",
    logo: "/images/brands/turk-nippon.png",
    alt: "Türk Nippon Sigorta Logo",
    serviceLink: "https://www.turknippon.com/tr/anlasmali-servisler"
  },
  {
    id: 10,
    name: "Unico Sigorta",
    logo: "/images/brands/unico.png",
    alt: "Unico Sigorta Logo",
    serviceLink: "https://www.unicosigorta.com.tr/en-yakin-anlasmali-servisler"
  },
  {
    id: 11,
    name: "Bupa Sigorta",
    logo: "/images/brands/bupa.png",
    alt: "Bupa Sigorta Logo"
  },
  {
    id: 12,
    name: "Koru Sigorta",
    logo: "/images/brands/koru.jpg",
    alt: "Koru Sigorta Logo"
  },
  {
    id: 13,
    name: "Corpus Sigorta",
    logo: "/images/brands/corpus.png",
    alt: "Corpus Sigorta Logo"
  },
  {
    id: 14,
    name: "Zurich Sigorta",
    logo: "/images/brands/zurich.png",
    alt: "Zurich Sigorta Logo"
  },
  {
    id: 15,
    name: "Quick Sigorta",
    logo: "/images/brands/quick.png",
    alt: "Quick Sigorta Logo"
  },
  {
    id: 16,
    name: "Ankara Sigorta",
    logo: "/images/brands/ankara.png",
    alt: "Ankara Sigorta Logo"
  },
  {
    id: 17,
    name: "Ethica Sigorta",
    logo: "/images/brands/ethica.svg",
    alt: "Ethica Sigorta Logo"
  },
  {
    id: 18,
    name: "Magdeburger Sigorta",
    logo: "/images/brands/magdeburger.png",
    alt: "Magdeburger Sigorta Logo"
  },
  {
    id: 19,
    name: "Ray Sigorta",
    logo: "/images/brands/raysigorta.png",
    alt: "Ray Sigorta Logo"
  },
  {
    id: 20,
    name: "AK Sigorta",
    logo: "/images/brands/ak.png",
    alt: "AK Sigorta Logo"
  },
  {
    id: 21,
    name: "Mapfre Sigorta",
    logo: "/images/brands/mapfre.png",
    alt: "Mapfre Sigorta Logo"
  },
  {
    id: 22,
    name: "Referans Sigorta",
    logo: "/images/brands/referans.png",
    alt: "Referans Sigorta Logo"
  },
  {
    id: 23,
    name: "Hepiyi Sigorta",
    logo: "/images/brands/hepiyi.png",
    alt: "Hepiyi Sigorta Logo"
  }
];