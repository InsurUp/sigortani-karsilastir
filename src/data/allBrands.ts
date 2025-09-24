export interface AllBrand {
  id: number;
  name: string;
  logo: string;
  colorLogo?: string; // renkli logo (hover için)
  alt: string;
  serviceLink?: string; // anlaşmalı servis linki
}

export const allBrands: AllBrand[] = [
  {
    id: 1,
    name: "Anadolu Sigorta",
    logo: "/images/brands/anadolu-sigorta.png",
    alt: "Anadolu Sigorta Logo",
    serviceLink: "https://www.anadolusigorta.com.tr/anlasmali-oto-servis-hizmetleri"
  },
  {
    id: 2,
    name: "Axa Sigorta",
    logo: "/images/brands/axa-sigorta.png",
    alt: "Axa Sigorta Logo",
    serviceLink: "https://www.axasigorta.com.tr/anlasmali-otomobil-servisleri"
  },
  {
    id: 3,
    name: "HDI Sigorta",
    logo: "/images/brands/hdi-sigorta.png",
    alt: "HDI Sigorta Logo",
    serviceLink: "https://www.hdisigorta.com.tr/anlasmali-servisler/anlasmali-tamir-servisleri-goruntuleyin"
  },
  {
    id: 4,
    name: "Türkiye Sigorta",
    logo: "/images/brands/turkiye-sigorta.png",
    alt: "Türkiye Sigorta Logo",
    serviceLink: "https://www.turkiyesigorta.com.tr/anlasmali-servislerimiz/anlasmali-oto-servisleri"
  },
  {
    id: 5,
    name: "Bereket Sigorta",
    logo: "/images/brands/bereket-sigorta.png",
    alt: "Bereket Sigorta Logo",
    serviceLink: "https://www.bereket.com.tr/anlasmali-servisler"
  },
  {
    id: 6,
    name: "Doğa Sigorta",
    logo: "/images/brands/doga-sigorta.png",
    alt: "Doğa Sigorta Logo",
    serviceLink: "https://www.dogasigorta.com/anlasmali-kurumlar"
  },
  {
    id: 7,
    name: "Sompo Sigorta",
    logo: "/images/brands/sompo-sigorta.png",
    alt: "Sompo Sigorta Logo",
    serviceLink: "https://www.somposigorta.com.tr/anlasmali-onarim-servisleri"
  },
  {
    id: 8,
    name: "Türk Nippon Sigorta",
    logo: "/images/brands/turk-nippon-sigorta.png",
    alt: "Türk Nippon Sigorta Logo",
    serviceLink: "https://www.turknippon.com/tr/anlasmali-servisler"
  },
  {
    id: 9,
    name: "Unico Sigorta",
    logo: "/images/brands/unico-sigorta.png",
    alt: "Unico Sigorta Logo",
    serviceLink: "https://www.unicosigorta.com.tr/en-yakin-anlasmali-servisler"
  }
];