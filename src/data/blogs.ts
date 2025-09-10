export interface Blog {
  id: number;
  title: string;
  href: string;
  desc: string;
  image: string;
  detail_image: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  suggest_blogs: boolean;  
}

// Blog kategorileri
export const blogCategories = {
  'evim': { name: 'Evim', color: '#10B981' },
  'aracim': { name: 'Aracım', color: '#3B82F6' },
  'sagligim': { name: 'Sağlığım', color: '#EF4444' },
  'diger': { name: 'Diğer', color: '#6366F1' }
};

// Blog tagları
export const blogTags = {
  // Evim kategorisi
  'konut': { name: 'Konut', category: 'evim' },
  'dask': { name: 'DASK', category: 'evim' },
  
  // Aracım kategorisi
  'kasko': { name: 'Kasko', category: 'aracim' },
  'trafik': { name: 'Trafik', category: 'aracim' },
  'imm': { name: 'İMM', category: 'aracim' },
  
  // Sağlığım kategorisi
  'tss': { name: 'Tamamlayıcı Sağlık', category: 'sagligim' },
  'ozel-saglik': { name: 'Özel Sağlık', category: 'sagligim' },
  'seyahat-saglik': { name: 'Seyahat Sağlık', category: 'sagligim' },
  
  // Diğer kategorisi
  'cep-telefonu': { name: 'Cep Telefonu', category: 'diger' }
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Kasko Sigortası Nedir ve Neden Gerekli?",
    href: "/blog/kasko-sigortasi-nedir",
    desc: "Kasko sigortası ile aracınızı her türlü riske karşı koruyun. Avantajları ve kapsamı hakkında detaylar...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Kasko sigortası, aracınızın çalınması, yanması, doğal afetler ve trafik kazalarında oluşan hasarları karşılar. Platformumuzda 30'a yakın sigorta şirketinin kasko tekliflerini karşılaştırarak en uygun fiyatı bulabilirsiniz.",
    date: "2024-06-01",
    category: "aracim",
    tags: ["kasko"],
    suggest_blogs: true,
    meta_title: "Kasko Sigortası Nedir? Avantajları ve Kapsamı",
    meta_description: "Kasko sigortası nedir, neden gerekli? En uygun kasko tekliflerini karşılaştırın.",
  },
  {
    id: 2,
    title: "Trafik Sigortası: Zorunluluk ve Avantajları",
    href: "/blog/trafik-sigortasi-zorunlu-mu",
    desc: "Türkiye'de zorunlu olan trafik sigortası hakkında bilmeniz gerekenler ve en uygun teklif alma yolları...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Trafik sigortası Türkiye'de tüm araç sahipleri için zorunludur. Kazalarda karşı tarafa verilen zararları karşılar. Platformumuzda tüm sigorta şirketlerinin trafik sigortası tekliflerini karşılaştırabilirsiniz.",
    date: "2024-05-28",
    category: "aracim",
    tags: ["trafik"],
    meta_title: "Trafik Sigortası Zorunluluğu ve Kapsamı",
    meta_description: "Trafik sigortası neden zorunlu? En uygun trafik sigortası tekliflerini karşılaştırın.",
    suggest_blogs: true,  
  },
  {
    id: 3,
    title: "İMM (İhtiyari Mali Mesuliyet) Sigortası Rehberi",
    href: "/blog/imm-sigortasi-nedir",
    desc: "İMM sigortası ile trafik sigortasının yetersiz kaldığı durumları karşılayın. Kapsamı ve faydaları...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "İMM sigortası, trafik sigortasının üst limitlerinin yetersiz kaldığı durumlarda ek teminat sağlar. Lüks araçlara veya çok sayıda kişiye zarar vermeniz halinde önemli bir koruma sunar.",
    date: "2024-05-20",
    category: "aracim",
    tags: ["imm"],
    meta_title: "İMM Sigortası Nedir? Kapsamı ve Faydaları",
    meta_description: "İMM sigortası ile ek teminat alın. En uygun İMM sigortası tekliflerini karşılaştırın.",
    suggest_blogs: true,
  },
  {
    id: 4,
    title: "Konut Sigortası ile Evinizi Koruyun",
    href: "/blog/konut-sigortasi-neden-onemli",
    desc: "Konut sigortası ile evinizi ve eşyalarınızı yangın, hırsızlık ve doğal afetlere karşı koruyun...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Konut sigortası, evinizi yangın, hırsızlık, su baskını ve doğal afetlere karşı korur. Ev eşyalarınız da sigorta kapsamında güvence altına alınır. Platformumuzda konut sigortası tekliflerini karşılaştırın.",
    date: "2024-06-05",
    category: "evim",
    tags: ["konut"],
    suggest_blogs: true,
    meta_title: "Konut Sigortası Kapsamı ve Avantajları",
    meta_description: "Konut sigortası ile evinizi koruyun. En uygun konut sigortası tekliflerini karşılaştırın.",
  },
  {
    id: 5,
    title: "DASK Sigortası: Deprem Güvencesi",
    href: "/blog/dask-sigortasi-neden-onemli",
    desc: "DASK sigortası ile konutunuzu deprem riskine karşı koruyun. Zorunluluk ve kapsamı hakkında bilgiler...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "DASK (Doğal Afet Sigortası) deprem, volkan patlaması, tsunami ve heyelan gibi doğal afetlere karşı koruma sağlar. Türkiye'de konut sahipleri için zorunlu olan bu sigortayı platformumuzdan yaptırabilirsiniz.",
    date: "2024-06-10",
    category: "evim",
    tags: ["dask"],
    suggest_blogs: true,
    meta_title: "DASK Sigortası Nedir? Kapsamı ve Önemi",
    meta_description: "DASK sigortası ile deprem güvencesi alın. DASK sigortası tekliflerini karşılaştırın.",
  },
  {
    id: 6,
    title: "Tamamlayıcı Sağlık Sigortası Avantajları",
    href: "/blog/tamamlayici-saglik-sigortasi-avantajlari",
    desc: "TSS ile özel hastanelerde SGK fark ücreti ödemeden tedavi olun. Kapsamı ve avantajları...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Tamamlayıcı Sağlık Sigortası (TSS), SGK'nın karşılamadığı fark ücretlerini öder. Özel hastanelerde muayene, tetkik ve tedavi masraflarınızı karşılar. Platformumuzda TSS tekliflerini karşılaştırın.",
    date: "2024-06-15",
    category: "sagligim",
    tags: ["tss"],
    suggest_blogs: true,
    meta_title: "Tamamlayıcı Sağlık Sigortası (TSS) Avantajları",
    meta_description: "TSS ile sağlık masraflarınızı azaltın. En uygun TSS tekliflerini karşılaştırın.",
  },
  {
    id: 7,
    title: "Özel Sağlık Sigortası ile Kapsamlı Koruma",
    href: "/blog/ozel-saglik-sigortasi-avantajlari",
    desc: "Özel sağlık sigortası ile sağlığınızı güvence altına alın. Kapsamı ve faydaları hakkında detaylar...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Özel sağlık sigortası, sağlık masraflarınızın tamamını veya belirli bir kısmını karşılar. Check-up, ameliyat, ilaç ve tedavi masrafları kapsamdadır. Platformumuzda özel sağlık sigortası tekliflerini karşılaştırın.",
    date: "2024-06-20",
    category: "sagligim",
    tags: ["ozel-saglik"],
    suggest_blogs: true,
    meta_title: "Özel Sağlık Sigortası Kapsamı ve Avantajları",
    meta_description: "Özel sağlık sigortası ile sağlığınızı koruyun. En uygun teklifleri karşılaştırın.",
  },
  {
    id: 8,
    title: "Seyahat Sağlık Sigortası: Güvenli Seyahat",
    href: "/blog/seyahat-saglik-sigortasi-avantajlari",
    desc: "Yurt içi ve yurt dışı seyahatlerinizde sağlık güvencesi için seyahat sağlık sigortası yaptırın...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Seyahat sağlık sigortası, seyahatiniz sırasında yaşayabileceğiniz sağlık sorunlarını kapsar. Yurt dışı seyahatlerinde vize için zorunlu olan bu sigortayı platformumuzdan temin edebilirsiniz.",
    date: "2024-06-25",
    category: "sagligim",
    tags: ["seyahat-saglik"],
    suggest_blogs: true,
    meta_title: "Seyahat Sağlık Sigortası Neden Gerekli?",
    meta_description: "Seyahat sağlık sigortası ile güvenli seyahat edin. En uygun teklifleri karşılaştırın.",
  },
  {
    id: 9,
    title: "Cep Telefonu Sigortası: Teknolojik Koruma",
    href: "/blog/cep-telefonu-sigortasi-avantajlari",
    desc: "Cep telefonunuzu çalınma, kırılma ve su hasarına karşı koruyun. Avantajları ve kapsamı...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Cep telefonu sigortası, telefonunuzun çalınması, kırılması, su hasarı veya yangın gibi durumları kapsar. Yeni nesil akıllı telefonların yüksek değeri düşünüldüğünde önemli bir koruma sağlar.",
    date: "2024-06-30",
    category: "diger",
    tags: ["cep-telefonu"],
    suggest_blogs: true,
    meta_title: "Cep Telefonu Sigortası Neden Gerekli?",
    meta_description: "Cep telefonu sigortası ile teknolojik cihazlarınızı koruyun. En uygun teklifleri karşılaştırın.",
  },
];