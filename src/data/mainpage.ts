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
  },
  {
    id: 8,
    title: "Özel Sağlık",
    image: "/images/product/icon/ozs.svg",
    alt: "Özel Sağlık Sigortası",
    link: "/ozel-saglik-teklif"
  },  {
    id: 10,
    title: "Cep Telefonu",
    image: "/images/product/icon/mobile-phone.png",
    alt: "Cep Telefonu Sigortası",
    link: "/cep-telefonu-teklif"
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
  // Diğer şirketler
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