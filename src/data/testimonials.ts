export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayşe K.",
    location: "İstanbul",
    rating: 5,
    comment: "Sigortanıkarşılaştır'ı keşfettim, teklif almak çok daha hızlı ve kolay!"
  },
  {
    id: 2,
    name: "Mehmet T.",
    location: "Ankara",
    rating: 5,
    comment: "Yapay zeka önerileri sayesinde tam ihtiyacım olan poliçeyi buldum."
  },
  {
    id: 3,
    name: "Yusuf A.",
    location: "Şanlıurfa",
    rating: 5,
    comment: "Poliçemi 5 dakika içinde aldım, çağrı merkezini bile aramam gerekmedi. Keşke daha önce keşfetseydim."
  },
  {
    id: 4,
    name: "Betül D.",
    location: "İstanbul",
    rating: 5,
    comment: "Sigortanı Karşılaştır ile kasko teklifimi 1 dakikada buldum! Chatbot o kadar hızlı ve yardımcı ki, tüm sorularımı anında cevapladı. WhatsApp'tan destek almak da harika, kesinlikle en kolay sigorta deneyimi!"
  },
  {
    id: 6,
    name: "Elif S.",  
    location: "İzmir",
    rating: 5,
    comment: "Hasar sürecinde bile yanımda olan bir platform! WhatsApp üzerinden anında bilgi aldım, yapay zeka asistanı her adımı kolaylaştırdı. KVKK uyumluluğu da içimi rahatlattı, süper bir deneyim!"
  },
  {
    id: 7,
    name: "Ahmet T.",
    location: "Bursa",
    rating: 5, 
    comment: "30'dan fazla sigorta şirketini tek ekranda görmek inanılmaz! Chatbot ve WhatsApp desteğiyle her şey hızlı ve güvenli. SSL sertifikalı ödeme sistemi de cabası, herkese öneriyorum!"
  }
];