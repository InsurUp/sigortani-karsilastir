export interface UserStory {
  id: number;
  name: string;
  title: string;
  story: string;
  location: string;
}

export const userStories: UserStory[] = [
  {
    id: 1,
    name: "Zeynep",
    title: "Zeynep'in Hızlı Kasko Macerası",
    location: "İstanbul",
    story: "Zeynep, İstanbul'da yoğun bir iş gününün ortasında arabası için kasko arıyordu. Saatlerce telefonla konuşmak yerine Sigortanı Karşılaştır'a girdi. Yapay zeka asistanı, bilgilerini girdikten saniyeler içinde 30 sigorta şirketinden teklifleri listeledi. WhatsApp üzerinden birkaç sorusuna anında yanıt aldı ve 3D Secure ile güvenli ödeme yaparak kaskosunu 5 dakikada aldı. \"Bu kadar hızlı ve kolay olacağı aklıma gelmezdi!\" diyor Zeynep."
  },
  {
    id: 2,
    name: "Mert",
    title: "Mert'in Hasar Anında Yanındaki Destek",
    location: "Ankara",
    story: "Mert, Ankara'da bir akşam küçük bir kaza geçirdi. Panikle ne yapacağını bilemezken Sigortanı Karşılaştır'ın chatbotuna danıştı. Yapay zeka asistanı, hasar sürecini adım adım açıklayıp yol yardım için hızlıca yönlendirdi. WhatsApp'tan gelen hızlı yanıtlarla rahatlayan Mert, \"KVKK uyumlu platform sayesinde bilgilerim güvendeydi. Sanki bir arkadaşım yanımdaydı!\" diyor."
  },
  {
    id: 3,
    name: "Elif",
    title: "Elif'in Güvenli Konut Sigortası",
    location: "İzmir",
    story: "İzmir'de ev sahibi olan Elif, konut sigortası için güvenilir bir platform arıyordu. Sigortanı Karşılaştır'ın yapay zeka asistanı, ihtiyaçlarına en uygun poliçeyi önerdi. SSL sertifikalı ödeme sistemiyle güvenle satın aldı. \"Chatbot'un 7/24 desteği ve WhatsApp'tan anında iletişim harikaydı. Artık evim ve ben güvendeyiz!\" diyor Elif."
  },
  {
    id: 4,
    name: "Ahmet",
    title: "Ahmet'in Zaman Kazandıran Deneyimi",
    location: "Bursa",
    story: "Bursa'da esnaf olan Ahmet, iş yoğunluğunda sigorta için vakit bulamıyordu. Sigortanı Karşılaştır'a girip araç bilgilerini yazdı, yapay zeka asistanı saniyeler içinde en uygun trafik sigortasını önerdi. WhatsApp'tan hızlıca detayları doğruladı ve 3D Secure ile ödeme yaptı. \"Başka platformlarda saatlerce uğraşırdım, burada her şey bir mesaj uzağımda!\" diyor Ahmet."
  }
];



