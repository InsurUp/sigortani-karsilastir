export interface HeroCard {
  id: number;
  title: string;
  image: string;
  alt: string;
  link: string;
}

export const heroCards: HeroCard[] = [
  {
    id: 1,
    title: "Kasko",
    image: "/images/product/icon/kasko.svg",
    alt: "Kasko Sigortası",
    link: "/kasko-teklif"
  },
  {
    id: 2,
    title: "Tamamlayıcı Sağlık",
    image: "/images/product/icon/tss.svg",
    alt: "Tamamlayıcı Sağlık Sigortası",
    link: "/tss-teklif"
  },
  {
    id: 3,
    title: "Trafik",
    image: "/images/product/icon/traffic.svg",
    alt: "Trafik Sigortası",
    link: "/trafik-teklif"
  },
  {
    id: 4,
    title: "Konut",
    image: "/images/product/icon/konut.svg",
    alt: "Konut Sigortası",
    link: "/konut-teklif"
  },
  {
    id: 5,
    title: "İMM",
    image: "/images/product/icon/imm.svg",
    alt: "İMM Sigortası",
    link: "/imm-teklif"
  },
  {
    id: 6,
    title: "Seyahat Sağlık",
    image: "/images/product/icon/seyahat-saglik.svg",
    alt: "Seyahat Sağlık Sigortası",
    link: "/seyahat-teklif"
  },
  {
    id: 7,
    title: "DASK",
    image: "/images/product/icon/dask.svg",
    alt: "DASK Sigortası",
    link: "/dask-teklif"
  }
];

export interface Brand {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

export const brands: Brand[] = [
  // Öncelikli büyük şirketler (ilk sırada)
  {
    id: 1,
    name: "Anadolu Sigorta",
    logo: "/images/brands/anadolu.svg",
    alt: "Anadolu Sigorta Logo"
  },
  {
    id: 2,
    name: "Axa Sigorta",
    logo: "/images/brands/axa.png",
    alt: "Axa Sigorta Logo"
  },
  {
    id: 3,
    name: "Allianz Sigorta",
    logo: "/images/brands/allianz.png",
    alt: "Allianz Sigorta Logo"
  },
  {
    id: 4,
    name: "Türkiye Sigorta",
    logo: "/images/brands/turkiye.png",
    alt: "Türkiye Sigorta Logo"
  },
  // Diğer şirketler
  {
    id: 5,
    name: "HDI Sigorta",
    logo: "/images/brands/hdi.png",
    alt: "HDI Sigorta Logo"
  },
  {
    id: 6,
    name: "Bereket Sigorta",
    logo: "/images/brands/bereket.svg",
    alt: "Bereket Sigorta Logo"
  },
  {
    id: 7,
    name: "Doğa Sigorta",
    logo: "/images/brands/doga.png",
    alt: "Doğa Sigorta Logo"
  },
  {
    id: 8,
    name: "Sompo Sigorta",
    logo: "/images/brands/sompo.png",
    alt: "Sompo Sigorta Logo"
  },
  {
    id: 9,
    name: "Türk Nippon Sigorta",
    logo: "/images/brands/turk-nippon.png",
    alt: "Türk Nippon Sigorta Logo"
  },
  {
    id: 10,
    name: "Unico Sigorta",
    logo: "/images/brands/unico.png",
    alt: "Unico Sigorta Logo"
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
  },
];

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Araç Bilgilerini Gir",
    description: "Aracınızın plaka, marka, model gibi temel bilgilerini girin",
    icon: "/images/icons/car-info.png",
    alt: "Araç Bilgileri"
  },
  {
    id: 2,
    title: "Teklifleri Karşılaştır",
    description: "Saniyeler içinde tüm sigorta şirketlerinden teklif alın",
    icon: "/images/icons/compare.png",
    alt: "Karşılaştırma"
  },
  {
    id: 3,
    title: "Poliçeyi Seç",
    description: "En uygun veya en kapsamlı poliçeyi seçin",
    icon: "/images/icons/select.png",
    alt: "Poliçe Seçimi"
  },
  {
    id: 4,
    title: "Online Öde",
    description: "Güvenli ödeme sistemi ile anında sigortalanın",
    icon: "/images/icons/payment.png",
    alt: "Online Ödeme"
  }
];

export interface EasyQuoteStep {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  imagePosition: 'left' | 'right';
}

export const easyQuoteSteps: EasyQuoteStep[] = [
  {
    id: 1,
    title: "Bilgilerini Gir, AI Asistanınla Başla",
    description: "Araç veya sigorta bilgilerini gir, sigortaya özel yapay zeka asistanımız hemen devreye girsin! Chatbotumuz veya WhatsApp entegrasyonumuzla 7/24 sorularını yanıtlar, sana en uygun teklifleri bulmana yardımcı olur.",
    image: "/images/bilgileri-gir.png",
    alt: "Bilgilerini Gir, AI Asistanınla Başla",
    imagePosition: 'left'
  },
  {
    id: 2,
    title: "Teklifleri Anında Karşılaştır",
    description: "30'a varan sigorta şirketinin tekliflerini tek ekranda gör. Yapay zekamız, ihtiyaçlarına en uygun kasko, trafik veya konut sigortasını saniyeler içinde önerir. Hızlı, kolay ve tamamen senin için!",
    image: "/images/teklifleri-karsilastir.png",
    alt: "Teklifleri Anında Karşılaştır",
    imagePosition: 'right'
  },
  {
    id: 3,
    title: "Güvenle Seç, Anında Sigortalan",
    description: "En iyi poliçeyi seç, 3D Secure ve SSL sertifikalı ödeme sistemiyle güvenle öde. KVKK uyumlu veri korumasıyla bilgilerin güvende, yapay zeka destekli sürecimizle anında sigortalan!",
    image: "/images/policeni-sec.png",
    alt: "Güvenle Seç, Anında Sigortalan",
    imagePosition: 'left'
  }
]; 