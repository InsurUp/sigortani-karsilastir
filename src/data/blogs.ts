export interface Blog {
  id: number;
  title: string;
  desc: string;
  image: string;
  detail_image: string;
  content: string;
  date: string;
  category: string;
  meta_title: string;
  meta_description: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Kasko Sigortası Nedir?",
    desc: "Kasko sigortası hakkında bilmeniz gerekenler ve avantajları...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog-gorsel.png",
    content: "Kasko sigortası, aracınızı olası risklere karşı koruyan bir sigorta türüdür...",
    date: "2024-06-01",
    category: "Kasko",
    meta_title: "Kasko Sigortası Hakkında Her Şey",
    meta_description: "Kasko sigortası nedir, avantajları nelerdir? Detaylı bilgi için tıklayın.",
  },
  {
    id: 2,
    title: "Trafik Sigortası Zorunlu mu?",
    desc: "Trafik sigortasının zorunluluğu ve kapsamı hakkında bilgiler...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog-gorsel.png",
    content: "Trafik sigortası, Türkiye'de tüm araç sahipleri için zorunludur...",
    date: "2024-05-28",
    category: "Trafik",
    meta_title: "Trafik Sigortası Zorunluluğu",
    meta_description: "Trafik sigortası neden zorunlu? Kapsamı ve detayları burada.",
  },
  {
    id: 3,
    title: "DASK Sigortası Neden Önemli?",
    desc: "DASK sigortasının önemi ve faydaları hakkında detaylar...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog-gorsel.png",
    content: "DASK, deprem sonrası oluşabilecek maddi zararları karşılamak için gereklidir...",
    date: "2024-05-20",
    category: "DASK",
    meta_title: "DASK Sigortası Önemi",
    meta_description: "DASK sigortası neden önemli? Faydaları ve kapsamı hakkında bilgi alın.",
  },
]; 