export interface AllBrand {
  id: number;
  name: string;
  logo: string;
  colorLogo?: string; // renkli logo (hover için)
  alt: string;
}

export const allBrands: AllBrand[] = [
  {
    id: 1,
    name: "Anadolu Sigorta",
    logo: "/images/brands/anadolu-sigorta.png",
    alt: "Anadolu Sigorta Logo"
  },
  {
    id: 2,
    name: "Axa Sigorta",
    logo: "/images/brands/axa-sigorta.png",
    alt: "Axa Sigorta Logo"
  },
  {
    id: 3,
    name: "HDI Sigorta",
    logo: "/images/brands/hdi-sigorta.png",
    alt: "HDI Sigorta Logo"
  },
  {
    id: 4,
    name: "Türkiye Sigorta",
    logo: "/images/brands/turkiye-sigorta.png",
    alt: "Türkiye Sigorta Logo"
  },
  {
    id: 5,
    name: "Bereket Sigorta",
    logo: "/images/brands/bereket-sigorta.png",
    alt: "Bereket Sigorta Logo"
  },
  {
    id: 6,
    name: "Doğa Sigorta",
    logo: "/images/brands/doga-sigorta.png",
    alt: "Doğa Sigorta Logo"
  },
  {
    id: 7,
    name: "Sompo Sigorta",
    logo: "/images/brands/sompo-sigorta.png",
    alt: "Sompo Sigorta Logo"
  },
  {
    id: 8,
    name: "Türk Nippon Sigorta",
    logo: "/images/brands/turk-nippon-sigorta.png",
    alt: "Türk Nippon Sigorta Logo"
  },
  {
    id: 9,
    name: "Unico Sigorta",
    logo: "/images/brands/unico-sigorta.png",
    alt: "Unico Sigorta Logo"
  }
];