export interface HeroCard {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export const heroCards: HeroCard[] = [
  {
    id: 1,
    title: "Kasko",
    image: "/images/product/icon/kasko.png",
    alt: "Kasko Sigortası"
  },
  {
    id: 2,
    title: "Tamamlayıcı Sağlık",
    image: "/images/product/icon/tss.png",
    alt: "Tamamlayıcı Sağlık Sigortası"
  },
  {
    id: 3,
    title: "Trafik",
    image: "/images/product/icon/traffic.png",
    alt: "Trafik Sigortası"
  },
  {
    id: 4,
    title: "Konut",
    image: "/images/product/icon/konut.png",
    alt: "Konut Sigortası"
  },
  {
    id: 5,
    title: "İMM",
    image: "/images/product/icon/imm.png",
    alt: "İMM Sigortası"
  },
  {
    id: 6,
    title: "Seyahat Sağlık",
    image: "/images/product/icon/seyahat-saglik.png",
    alt: "Seyahat Sağlık Sigortası"
  },
  {
    id: 7,
    title: "DASK",
    image: "/images/product/icon/dask.png",
    alt: "DASK Sigortası"
  },
  {
    id: 8,
    title: "Özel Sağlık",
    image: "/images/product/icon/ozel-saglik.png",
    alt: "Özel Sağlık Sigortası"
  }
];

export interface Brand {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Doğa Sigorta",
    logo: "/images/brands/doga-sigorta.png",
    alt: "Doğa Sigorta Logo"
  },
  {
    id: 2,
    name: "Hepiyi Sigorta",
    logo: "/images/brands/hepiyi.png",
    alt: "Hepiyi Sigorta Logo"
  },
  {
    id: 3,
    name: "Neova",
    logo: "/images/brands/neova.png",
    alt: "Neova Logo"
  },
  {
    id: 4,
    name: "Sompo Sigorta",
    logo: "/images/brands/sompo-sigorta.png",
    alt: "HDI Logo"
  },
  {
    id: 5,
    name: "ACNTÜRK",
    logo: "/images/brands/acnturk.png",
    alt: "ACNTÜRK Logo"
  },
  {
    id: 6,
    name: "Nippon Sigorta",
    logo: "/images/brands/nippon-sigorta.png",
    alt: "Nippon Sigorta Logo"
  },
  {
    id: 7,
    name: "Axa Sigorta",
    logo: "/images/brands/axa-sigorta.png",
    alt: "Axa Sigorta Logo"
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
    title: "Bilgilerini gir",
    description: "Real-time problem solving is not just about time, it's about time. This allows you to solve problems within a specified time problem has a solution.",
    image: "/images/bilgileri-gir.png",
    alt: "Bilgilerini gir",
    imagePosition: 'left'
  },
  {
    id: 2,
    title: "Teklifleri Karşılaştır",
    description: "Real-time problem solving is not just about time, it's about time. This allows you to solve problems within a specified time problem has a solution.",
    image: "/images/teklifleri-karsilastir.png",
    alt: "Teklifleri Karşılaştır",
    imagePosition: 'right'
  },
  {
    id: 3,
    title: "Poliçeni Seç",
    description: "Real-time problem solving is not just about time, it's about time. This allows you to solve problems within a specified time problem has a solution.",
    image: "/images/policeni-sec.png",
    alt: "Poliçeni Seç",
    imagePosition: 'left'
  }
]; 