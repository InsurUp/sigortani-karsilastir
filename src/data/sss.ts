export interface SSSItem {
  category: string;
  question: string;
  answer: string;
}

export const sssData: SSSItem[] = [
  {
    category: "Genel",
    question: "En uygun fiyatı nasıl buluyorsunuz?",
    answer: "Farklı sigorta şirketlerinden aldığımız teklifleri karşılaştırarak en uygun fiyatı sunuyoruz.",
  },
  {
    category: "Genel",
    question: "Hangi sigorta türlerinde teklif alabilirim?",
    answer: "Trafik, kasko, konut, DASK, sağlık ve seyahat sigortası gibi birçok branşta teklif alabilirsiniz.",
  },
  {
    category: "Satın Alma",
    question: "Poliçemi online olarak satın alabilir miyim?",
    answer: "Evet, teklifinizi seçtikten sonra poliçenizi online olarak güvenle satın alabilirsiniz.",
  },
  {
    category: "Gizlilik",
    question: "Bilgilerim güvende mi?",
    answer: "Evet, bilgileriniz KVKK kapsamında korunur ve üçüncü kişilerle paylaşılmaz.",
  },
]; 