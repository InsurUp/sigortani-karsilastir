export interface OfferStep {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

export interface ProductIntro {
  title: string;
  description: string;
}

export interface ProductAbout {
  title: string;
  description: string;
}

export interface ProductGuarantee {
  title: string;
  description: string;
}

export interface ProductGuarantees {
  title: string;
  items: ProductGuarantee[];
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface WhyChooseUs {
  title: string;
  items: WhyChooseUsItem[];
}

export interface PricingInfo {
  title: string;
  description: string;
  cities: Array<{
    city: string;
    price: string;
  }>;
}

export interface AttentionPoint {
  title: string;
  description: string;
}

export interface AttentionPoints {
  title: string;
  items: AttentionPoint[];
}

export interface ProductData {
  slug: string;
  name: string;
  intro: ProductIntro;
  about: ProductAbout;
  guarantees: ProductGuarantees;
  whyChooseUs: WhyChooseUs;
  pricing?: PricingInfo;
  attentionPoints?: AttentionPoints;
  offerSteps: OfferStep[];
}

export const productData: Record<string, ProductData> = {
  dask: {
    slug: 'zorunlu-deprem-sigortasi',
    name: 'DASK Sigortası',
    intro: {
      title: 'DASK Sigortanı Anında Bul, Evini Güvenceye Al!',
      description: 'Evini deprem risklerine karşı korumak mı istiyorsun? Sigortanı Karşılaştır ile 30\'a varan sigorta şirketinin DASK tekliflerini saniyeler içinde karşılaştır, yapay zeka asistanımızla sana özel poliçeyi bul ve 3D Secure ile güvenle sigortalan!'
    },
    about: {
      title: 'DASK Nedir?',
      description: 'Zorunlu Deprem Sigortası (DASK), evini deprem ve deprem kaynaklı hasarlara (yangın, yer kayması, tsunami) karşı korur. Kanunen zorunlu olan bu sigorta, ev sahiplerinin maddi kayıplarını karşılar. Sigortanı Karşılaştır ile en uygun DASK poliçesini saniyeler içinde bul, evini güvence altına al!'
    },
    guarantees: {
      title: 'DASK Teminatları',
      items: [
        {
          title: 'Deprem Hasarları',
          description: 'Deprem sonucu evinde oluşan yapısal hasarlar karşılanır.'
        },
        {
          title: 'Deprem Kaynaklı Hasarlar',
          description: 'Yangın, yer kayması, tsunami gibi ek riskler teminat altında.'
        },
        {
          title: 'Tazminat Ödemesi',
          description: 'Hasar sonrası hızlı tazminat ile evini yeniden inşa edebilirsin.'
        },
        {
          title: 'Zorunlu Kapsam',
          description: 'DASK, tapu işlemleri ve konut kredisi için zorunludur.'
        }
      ]
    },
    whyChooseUs: {
      title: 'Neden Sigortanı Karşılaştır?',
      items: [
        {
          title: 'Yapay Zeka Desteği',
          description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
        },
        {
          title: 'Chatbot ve WhatsApp',
          description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
        },
        {
          title: '30\'a Varan Şirket',
          description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
        },
        {
          title: 'En Hızlı Deneyim',
          description: 'Teklif al, seç ve anında sigortalan!'
        }
      ]
    },
    pricing: {
      title: 'DASK Fiyatları',
      description: 'DASK fiyatları; evin metrekaresi, yapı tarzı, bina yaşı ve bulunduğu deprem risk bölgesine göre değişir. İşte örnek fiyatlar (1-23 Nisan 2025 medyan değerleri):',
      cities: [
        { city: 'İSTANBUL', price: '1.545 TL' },
        { city: 'ANKARA', price: '1.118 TL' },
        { city: 'İZMİR', price: '1.664 TL' },
        { city: 'ANTALYA', price: '1.061 TL' },
        { city: 'KOCAELİ', price: '1.975 TL' },
        { city: 'BURSA', price: '1.759 TL' },
        { city: 'TOKAT', price: '1.472 TL' },
        { city: 'KONYA', price: '650 TL' },
        { city: 'TEKİRDAĞ', price: '1.472 TL' },
        { city: 'SİVAS', price: '1.472 TL' },
        { city: 'ADANA', price: '1.055 TL' },
        { city: 'GAZİANTEP', price: '1.116 TL' },
        { city: 'BALIKESİR', price: '1.364 TL' },
        { city: 'MERSİN', price: '780 TL' },
        { city: 'YOZGAT', price: '596 TL' }
      ]
    },
    attentionPoints: {
      title: 'DASK Yaptırırken Nelere Dikkat Etmeli?',
      items: [
        {
          title: 'Teminat Kapsamı',
          description: 'Deprem ve ek risklerin (yangın, yer kayması) dahil olduğunu kontrol et.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı platformları tercih et.'
        },
        {
          title: 'Hızlı Destek',
          description: 'Chatbot ve WhatsApp ile 7/24 destek sunan bir platform seç.'
        },
        {
          title: 'Zorunluluk',
          description: 'DASK olmadan tapu işlemleri veya konut kredisi alamazsın.'
        },
        {
          title: 'Poliçe Yenileme',
          description: 'Poliçeni her yıl yenileyerek kesintisiz koruma sağla.'
        }
      ]
    },
    offerSteps: [
      {
        icon: 'ClipboardDocumentListIcon',
        title: 'Bilgilerini Gir',
        description: 'Evinin tapu bilgilerini veya T.C. kimlik numaranı yaz, yapay zeka asistanımız anında devreye girsin!'
      },
      {
        icon: 'MagnifyingGlassIcon',
        title: 'Teklifleri Karşılaştır',
        description: '30\'a varan sigorta şirketinden en iyi DASK tekliflerini tek ekranda gör, sana en uygun olanı seç.'
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Güvenle Sigortalan',
        description: 'Chatbot veya WhatsApp ile 7/24 destek al, SSL sertifikalı ödeme ile DASK poliçeni hemen al!'
      }
    ]
  },
  kasko: {
    slug: 'kasko-sigortasi',
    name: 'Kasko Sigortası',
    intro: {
      title: 'Kasko Sigortanı Hızla Bul, Güvenle Yola Çık!',
      description: 'Aracını korumak için en uygun kasko sigortasını mı arıyorsun? Sigortanı Karşılaştır ile 30\'a varan sigorta şirketinin kasko tekliflerini saniyeler içinde karşılaştır, yapay zeka asistanımızla sana özel poliçeyi bul ve 3D Secure ile güvenle sigortalan!'
    },
    about: {
      title: 'Kasko Sigortası Nedir?',
      description: 'Kasko sigortası, aracını çarpma, çalınma, yanma veya doğal afetler gibi risklere karşı korur. Olası hasar masraflarını karşılayarak bütçeni güvence altına alır. Sigortanı Karşılaştır ile en kapsamlı kasko poliçesini en uygun fiyata bul, anında sigortalan!'
    },
    guarantees: {
      title: 'Kasko Teminatları',
      items: [
        {
          title: 'Çarpma/Çarpılma',
          description: 'Hareket halinde veya park halindeyken aracının zarar görmesi durumunda teminat sağlar.'
        },
        {
          title: 'Çalınma',
          description: 'Aracın veya parçalarının çalınması ya da çalınmaya teşebbüs edilmesi durumunda koruma sunar.'
        },
        {
          title: 'Yanma',
          description: 'Yangın kaynaklı hasarlar kasko ile karşılanır.'
        },
        {
          title: 'Ek Teminatlar',
          description: 'Yol yardımı, mini onarım, orijinal cam değişimi, ihtiyari mali mesuliyet (İMM).'
        }
      ]
    },
    whyChooseUs: {
      title: 'Neden Sigortanı Karşılaştır?',
      items: [
        {
          title: 'Yapay Zeka Desteği',
          description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
        },
        {
          title: 'Chatbot ve WhatsApp',
          description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
        },
        {
          title: '30\'a Varan Şirket',
          description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
        },
        {
          title: 'En Hızlı Deneyim',
          description: 'Teklif al, seç ve anında sigortalan!'
        }
      ]
    },
    attentionPoints: {
      title: 'Kasko Yaptırırken Nelere Dikkat Etmeli?',
      items: [
        {
          title: 'Teminat Kapsamı',
          description: 'İMM, yol yardımı, mini onarım gibi ek teminatları kontrol et.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı platformları tercih et.'
        },
        {
          title: 'Hızlı Destek',
          description: 'Chatbot ve WhatsApp ile 7/24 destek sunan bir platform seç.'
        },
        {
          title: 'Hasarsızlık İndirimi',
          description: 'Kazasız bir yıl geçirirsen %30-65 indirim alabilirsin.'
        }
      ]
    },
    offerSteps: [
      {
        icon: 'ClipboardDocumentListIcon',
        title: 'Bilgilerini Gir',
        description: 'Araç plakanı veya ruhsat bilgilerini yaz, yapay zeka asistanımız anında devreye girsin!'
      },
      {
        icon: 'MagnifyingGlassIcon',
        title: 'Teklifleri Karşılaştır',
        description: '30\'a varan sigorta şirketinden en iyi kasko tekliflerini tek ekranda gör, sana en uygun olanı seç.'
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Güvenle Sigortalan',
        description: 'Chatbot veya WhatsApp ile 7/24 destek al, SSL sertifikalı ödeme ile kaskonu hemen al!'
      }
    ]
  },
  trafik: {
    slug: 'trafik-sigortasi',
    name: 'Trafik Sigortası',
    intro: {
      title: 'Trafik Sigortanı Anında Bul, Güvenle Yola Çık!',
      description: 'Zorunlu trafik sigortanı hızlı ve kolay yaptırmak ister misin? Sigortanı Karşılaştır ile 30\'a varan sigorta şirketinin tekliflerini saniyeler içinde karşılaştır, yapay zeka asistanımızla sana özel poliçeyi bul ve 3D Secure ile güvenle sigortalan!'
    },
    about: {
      title: 'Trafik Sigortası Nedir?',
      description: 'Zorunlu trafik sigortası, trafikte üçüncü şahıslara verebileceğin maddi ve bedeni zararları karşılar. Kanunen zorunlu olan bu sigorta, hem seni hem diğer sürücüleri güvence altına alır. Sigortanı Karşılaştır ile en uygun trafik sigortasını saniyeler içinde bul, cezadan kurtul!'
    },
    guarantees: {
      title: 'Trafik Sigortası Teminatları',
      items: [
        {
          title: 'Maddi Hasar',
          description: 'Kazada karşı tarafın aracında veya eşyalarında oluşan zararlar karşılanır.'
        },
        {
          title: 'Bedeni Hasar',
          description: 'Kazada yaralanan veya hayatını kaybeden kişilerin tedavi masrafları veya tazminatları ödenir.'
        },
        {
          title: 'Ek Teminatlar',
          description: 'İhtiyari mali mesuliyet (İMM), yol yardımı gibi avantajlar.'
        },
        {
          title: 'Hasarsızlık İndirimi',
          description: 'Kazasız bir yıl geçirirsen %10-20 indirim alabilirsin.'
        }
      ]
    },
    whyChooseUs: {
      title: 'Neden Sigortanı Karşılaştır?',
      items: [
        {
          title: 'Yapay Zeka Desteği',
          description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
        },
        {
          title: 'Chatbot ve WhatsApp',
          description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
        },
        {
          title: '30\'a Varan Şirket',
          description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
        },
        {
          title: 'En Hızlı Deneyim',
          description: 'Teklif al, seç ve anında sigortalan!'
        }
      ]
    },
    attentionPoints: {
      title: 'Trafik Sigortası Yaptırırken Nelere Dikkat Etmeli?',
      items: [
        {
          title: 'Teminat Kapsamı',
          description: 'İMM, yol yardımı gibi ek teminatları kontrol et.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı platformları tercih et.'
        },
        {
          title: 'Hızlı Destek',
          description: 'Chatbot ve WhatsApp ile 7/24 destek sunan bir platform seç.'
        },
        {
          title: 'Hasarsızlık İndirimi',
          description: 'Kazasız bir yıl geçirirsen indirim oranların artar.'
        },
        {
          title: 'Ceza Riski',
          description: 'Trafik sigortası yaptırmazsan 2025\'te 993 TL cezayla karşılaşabilirsin!'
        }
      ]
    },
    offerSteps: [
      {
        icon: 'ClipboardDocumentListIcon',
        title: 'Bilgilerini Gir',
        description: 'Plaka veya T.C. kimlik numaranı yaz, yapay zeka asistanımız anında devreye girsin!'
      },
      {
        icon: 'MagnifyingGlassIcon',
        title: 'Teklifleri Karşılaştır',
        description: '30\'a varan sigorta şirketinden en iyi trafik sigortası tekliflerini tek ekranda gör, sana en uygun olanı seç.'
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Güvenle Sigortalan',
        description: 'Chatbot veya WhatsApp ile 7/24 destek al, SSL sertifikalı ödeme ile sigortanı hemen al!'
      }
    ]
  },
  konut: {
    slug: 'konut-sigortasi',
    name: 'Konut Sigortası',
    intro: {
      title: 'Konut Sigortanı Anında Bul, Evini Güvenceye Al!',
      description: 'Evinizi yangın, hırsızlık veya doğal afetlere karşı korumak mı istiyorsunuz? Sigortanı Karşılaştır ile 30\'a varan sigorta şirketinin konut sigortası tekliflerini saniyeler içinde karşılaştır, yapay zeka asistanımızla sana özel poliçeyi bul ve 3D Secure ile güvenle sigortalan!'
    },
    about: {
      title: 'Konut Sigortası Nedir?',
      description: 'Konut sigortası, evinizi ve eşyalarınızı yangın, hırsızlık, deprem (DASK hariç ek teminatlar), su baskını gibi risklere karşı korur. Maddi kayıplarınızı karşılayarak evinizin güvenliğini sağlar. Sigortanı Karşılaştır ile en kapsamlı konut sigortasını en uygun fiyata bul, evini güvence altına al!'
    },
    guarantees: {
      title: 'Konut Sigortası Teminatları',
      items: [
        {
          title: 'Yangın',
          description: 'Evinde yangın kaynaklı hasarlar teminat altında.'
        },
        {
          title: 'Hırsızlık',
          description: 'Eşyalarının çalınması veya hırsızlık girişimi sonucu oluşan zararlar karşılanır.'
        },
        {
          title: 'Su Baskını',
          description: 'Sel veya su taşkını gibi doğal afetlerden kaynaklanan hasarlar teminat kapsamında.'
        },
        {
          title: 'Ek Teminatlar',
          description: 'Cam kırılması, ferdi kaza, hukuki koruma, eşya sigortası, komşu mali sorumluluk.'
        }
      ]
    },
    whyChooseUs: {
      title: 'Neden Sigortanı Karşılaştır?',
      items: [
        {
          title: 'Yapay Zeka Desteği',
          description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
        },
        {
          title: 'Chatbot ve WhatsApp',
          description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
        },
        {
          title: '30\'a Varan Şirket',
          description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
        },
        {
          title: 'En Hızlı Deneyim',
          description: 'Teklif al, seç ve anında sigortalan!'
        }
      ]
    },
    attentionPoints: {
      title: 'Konut Sigortası Yaptırırken Nelere Dikkat Etmeli?',
      items: [
        {
          title: 'Teminat Kapsamı',
          description: 'Yangın, hırsızlık, su baskını gibi risklerin ve ek teminatların poliçede olduğundan emin ol.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı platformları tercih et.'
        },
        {
          title: 'Hızlı Destek',
          description: 'Chatbot ve WhatsApp ile 7/24 destek sunan bir platform seç.'
        },
        {
          title: 'Eşya Sigortası',
          description: 'Değerli eşyalarını kapsayan ek teminatları değerlendir.'
        },
        {
          title: 'DASK ile Uyum',
          description: 'Konut sigortasının DASK\'ı desteklediğini kontrol et.'
        }
      ]
    },
    offerSteps: [
      {
        icon: 'HomeIcon',
        title: 'Bilgilerini Gir',
        description: 'Evinin tapu bilgilerini veya T.C. kimlik numaranı yaz, yapay zeka asistanımız anında devreye girsin!'
      },
      {
        icon: 'MagnifyingGlassIcon',
        title: 'Teklifleri Karşılaştır',
        description: '30\'a varan sigorta şirketinden en iyi konut sigortası tekliflerini tek ekranda gör, sana en uygun olanı seç.'
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Güvenle Sigortalan',
        description: 'Chatbot veya WhatsApp ile 7/24 destek al, SSL sertifikalı ödeme ile konut sigortanı hemen al!'
      }
    ]
  },
  imm: {
    slug: 'imm-sigortasi',
    name: 'İMM Sigortası',
    intro: {
      title: 'İMM Sigortanı Hızla Bul, Güvenle Yola Çık!',
      description: 'Trafikte daha fazla koruma mı istiyorsun? Sigortanı Karşılaştır ile 30\'a varan sigorta şirketinin İhtiyari Mali Mesuliyet (İMM) tekliflerini saniyeler içinde karşılaştır, yapay zeka asistanımızla sana özel poliçeyi bul ve 3D Secure ile güvenle sigortalan!'
    },
    about: {
      title: 'İhtiyari Mali Mesuliyet (İMM) Sigortası Nedir?',
      description: 'İhtiyari Mali Mesuliyet (İMM) sigortası, zorunlu trafik sigortasının teminat limitlerini aşan maddi ve bedeni zararları karşılar. Trafik sigortasının yetersiz kaldığı durumlarda ek koruma sağlar, seni ve karşı tarafı maddi risklere karşı güvence altına alır. Sigortanı Karşılaştır ile en uygun İMM poliçesini saniyeler içinde bul, trafikte tam koruma sağla!'
    },
    guarantees: {
      title: 'İMM Teminatları',
      items: [
        {
          title: 'Maddi Hasar',
          description: 'Zorunlu trafik sigortası limitlerini aşan araç veya eşya hasarları karşılanır.'
        },
        {
          title: 'Bedeni Hasar',
          description: 'Kazada yaralanan veya hayatını kaybeden kişilerin tedavi masrafları veya tazminatları ödenir.'
        },
        {
          title: 'Ek Teminatlar',
          description: 'Yüksek teminat limitleri, hukuki savunma masrafları gibi avantajlar.'
        },
        {
          title: 'Esnek Limitler',
          description: 'İhtiyacına göre teminat seçenekleri.'
        }
      ]
    },
    whyChooseUs: {
      title: 'Neden Sigortanı Karşılaştır?',
      items: [
        {
          title: 'Yapay Zeka Desteği',
          description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
        },
        {
          title: 'Chatbot ve WhatsApp',
          description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
        },
        {
          title: '30\'a Varan Şirket',
          description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
        },
        {
          title: 'En Hızlı Deneyim',
          description: 'Teklif al, seç ve anında sigortalan!'
        }
      ]
    },
    attentionPoints: {
      title: 'İMM Sigortası Yaptırırken Nelere Dikkat Etmeli?',
      items: [
        {
          title: 'Teminat Limitleri',
          description: 'İhtiyacına uygun teminat limitlerini seç.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı platformları tercih et.'
        },
        {
          title: 'Hızlı Destek',
          description: 'Chatbot ve WhatsApp ile 7/24 destek sunan bir platform seç.'
        },
        {
          title: 'Trafik Sigortasıyla Uyum',
          description: 'İMM\'nin zorunlu trafik sigortasını desteklediğini kontrol et.'
        },
        {
          title: 'Hasar Süreci',
          description: 'Hasar anında hızlı destek ve tazminat süreci sunan poliçeleri değerlendir.'
        }
      ]
    },
    offerSteps: [
      {
        icon: 'ClipboardDocumentListIcon',
        title: 'Bilgilerini Gir',
        description: 'Araç plakanı veya T.C. kimlik numaranı yaz, yapay zeka asistanımız anında devreye girsin!'
      },
      {
        icon: 'MagnifyingGlassIcon',
        title: 'Teklifleri Karşılaştır',
        description: '30\'a varan sigorta şirketinden en iyi İMM tekliflerini tek ekranda gör, sana en uygun olanı seç.'
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Güvenle Sigortalan',
        description: 'Chatbot veya WhatsApp ile 7/24 destek al, SSL sertifikalı ödeme ile İMM poliçeni hemen al!'
      }
    ]
  },
  saglik: {
    slug: 'tamamlayici-saglik-sigortasi',
    name: 'Tamamlayıcı Sağlık Sigortası',
    intro: {
      title: 'Tamamlayıcı Sağlık Sigortanı Anında Bul, Güvenle Tedavi Ol!',
      description: 'Sağlığını korumak için uygun fiyatlı bir tamamlayıcı sağlık sigortası mı arıyorsun? Sigortanı Karşılaştır ile 30\'a varan sigorta şirketinin tekliflerini saniyeler içinde karşılaştır, yapay zeka asistanımızla sana özel poliçeyi bul ve 3D Secure ile güvenle sigortalan!'
    },
    about: {
      title: 'Tamamlayıcı Sağlık Sigortası Nedir?',
      description: 'Tamamlayıcı sağlık sigortası, SGK ile anlaşmalı özel hastanelerde fark ücreti ödemeden tedavi olmanı sağlar. Yatarak ve ayakta tedavi masraflarını karşılayarak sağlığını güvence altına alır. Sigortanı Karşılaştır ile en uygun tamamlayıcı sağlık sigortasını saniyeler içinde bul, sağlık harcamalarını kontrol altına al!'
    },
    guarantees: {
      title: 'Tamamlayıcı Sağlık Sigortası Teminatları',
      items: [
        {
          title: 'Yatarak Tedavi',
          description: 'Ameliyat, hastane yatışı, yoğun bakım gibi giderler teminat altında.'
        },
        {
          title: 'Ayakta Tedavi',
          description: 'Doktor muayenesi, tahlil, röntgen gibi hizmetler (poliçeye göre değişir).'
        },
        {
          title: 'Ek Teminatlar',
          description: 'Fizik tedavi, check-up, diyetisyen hizmetleri gibi avantajlı seçenekler.'
        },
        {
          title: 'Ağ Genişliği',
          description: 'SGK anlaşmalı geniş hastane ağında geçerli.'
        }
      ]
    },
    whyChooseUs: {
      title: 'Neden Sigortanı Karşılaştır?',
      items: [
        {
          title: 'Yapay Zeka Desteği',
          description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
        },
        {
          title: 'Chatbot ve WhatsApp',
          description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
        },
        {
          title: '30\'a Varan Şirket',
          description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
        },
        {
          title: 'En Hızlı Deneyim',
          description: 'Teklif al, seç ve anında sigortalan!'
        }
      ]
    },
    attentionPoints: {
      title: 'Tamamlayıcı Sağlık Sigortası Yaptırırken Nelere Dikkat Etmeli?',
      items: [
        {
          title: 'Teminat Kapsamı',
          description: 'Yatarak/ayakta tedavi, check-up gibi ek teminatları kontrol et.'
        },
        {
          title: 'Güvenli Ödeme',
          description: '3D Secure ve SSL sertifikalı platformları tercih et.'
        },
        {
          title: 'Hızlı Destek',
          description: 'Chatbot ve WhatsApp ile 7/24 destek sunan bir platform seç.'
        },
        {
          title: 'Hastane Ağı',
          description: 'SGK anlaşmalı geniş hastane ağını kontrol et.'
        },
        {
          title: 'Prim İadeli Seçenekler',
          description: 'Poliçe süresi sonunda prim iadesi sunan seçenekleri değerlendir.'
        }
      ]
    },
    offerSteps: [
      {
        icon: 'ClipboardDocumentListIcon',
        title: 'Bilgilerini Gir',
        description: 'T.C. kimlik numaranı veya sağlık bilgilerini yaz, yapay zeka asistanımız anında devreye girsin!'
      },
      {
        icon: 'MagnifyingGlassIcon',
        title: 'Teklifleri Karşılaştır',
        description: '30\'a varan sigorta şirketinden en iyi tamamlayıcı sağlık sigortası tekliflerini tek ekranda gör, sana en uygun olanı seç.'
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Güvenle Sigortalan',
        description: 'Chatbot veya WhatsApp ile 7/24 destek al, SSL sertifikalı ödeme ile sigortanı hemen al!'
      }
    ],
    pricing: {
      title: 'Tamamlayıcı Sağlık Sigortası Fiyatları',
      description: '',
      cities: [
        { city: 'İstanbul', price: '25-34: Kadın 21.441 TL / Erkek 18.567 TL' },
        { city: '', price: '35-44: Kadın 22.413 TL / Erkek 18.556 TL' },
        { city: '', price: '45-54: Kadın 23.449 TL / Erkek 19.580 TL' },
        { city: '', price: '55-64: Kadın 27.696 TL / Erkek 23.177 TL' },
        { city: 'Ankara', price: '25-34: Kadın 18.973 TL / Erkek 14.317 TL' },
        { city: '', price: '35-44: Kadın 18.161 TL / Erkek 15.341 TL' },
        { city: '', price: '45-54: Kadın 17.617 TL / Erkek 16.012 TL' },
        { city: '', price: '55-64: Kadın 27.217 TL / Erkek 18.414 TL' },
        { city: 'İzmir', price: '25-34: Kadın 28.235 TL / Erkek 16.255 TL' },
        { city: '', price: '35-44: Kadın 19.428 TL / Erkek 15.469 TL' },
        { city: '', price: '45-54: Kadın 19.831 TL / Erkek 14.750 TL' },
        { city: '', price: '55-64: Kadın 19.995 TL / Erkek 17.506 TL' },
        { city: 'Kocaeli', price: '25-34: Kadın 20.789 TL / Erkek 17.245 TL' },
        { city: '', price: '35-44: Kadın 20.609 TL / Erkek 15.927 TL' },
        { city: '', price: '45-54: Kadın 22.013 TL / Erkek 14.964 TL' },
        { city: '', price: '55-64: Kadın 27.799 TL / Erkek 23.117 TL' }
      ]
    }
  }
};

// Ürün slug'ına göre data getiren helper fonksiyon
export const getProductData = (slug: string): ProductData | null => {
  // Önce slug ile direkt arama yap
  const directMatch = productData[slug];
  if (directMatch) return directMatch;
  
  // Eğer bulunamazsa, slug değerlerine göre arama yap
  for (const key in productData) {
    if (productData[key].slug === slug) {
      return productData[key];
    }
  }
  
  return null;
};

// Varsayılan data (eğer ürün bulunamazsa)
export const defaultProductData: ProductData = {
  slug: 'default',
  name: 'Sigorta',
  intro: {
    title: 'Sigortanı Anında Bul, Güvenceye Al!',
    description: 'En uygun sigorta tekliflerini karşılaştır ve güvenle sigortalan!'
  },
  about: {
    title: 'Sigorta Nedir?',
    description: 'Sigorta, beklenmedik risklere karşı kendinizi ve değerlerinizi korumak için yapılan bir güvence sözleşmesidir. Sigortanı Karşılaştır ile en uygun sigorta poliçelerini karşılaştır!'
  },
  guarantees: {
    title: 'Sigorta Teminatları',
    items: [
      {
        title: 'Kapsamlı Koruma',
        description: 'Geniş teminat seçenekleri ile tam koruma.'
      },
      {
        title: 'Hızlı Hizmet',
        description: 'Hasar durumunda hızlı ve güvenilir hizmet.'
      },
      {
        title: 'Uygun Fiyat',
        description: 'En uygun fiyatlarla kaliteli sigorta hizmeti.'
      },
      {
        title: '7/24 Destek',
        description: 'Her zaman yanınızda olan destek hizmeti.'
      }
    ]
  },
  whyChooseUs: {
    title: 'Neden Sigortanı Karşılaştır?',
    items: [
      {
        title: 'Yapay Zeka Desteği',
        description: 'AI asistanımız, sana özel sigorta poliçesini saniyeler içinde bulur.'
      },
      {
        title: 'Chatbot ve WhatsApp',
        description: '7/24 sorularını yanıtlar, teklif ve hasar süreçlerini hızlandırır.'
      },
      {
        title: 'Güvenli Ödeme',
        description: '3D Secure ve SSL sertifikalı sistemle, KVKK uyumlu veri koruması.'
      },
      {
        title: '30\'a Varan Şirket',
        description: 'Doğa Sigorta, Axa Sigorta gibi önde gelen şirketlerin tekliflerini karşılaştır.'
      },
      {
        title: 'En Hızlı Deneyim',
        description: 'Teklif al, seç ve anında sigortalan!'
      }
    ]
  },
  offerSteps: [
    {
      icon: 'ClipboardDocumentListIcon',
      title: 'Bilgilerini Gir',
      description: 'Gerekli bilgilerini gir, yapay zeka asistanımız anında devreye girsin!'
    },
    {
      icon: 'MagnifyingGlassIcon',
      title: 'Teklifleri Karşılaştır',
      description: 'En iyi teklifleri tek ekranda gör, sana en uygun olanı seç.'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Güvenle Sigortalan',
      description: '7/24 destek al, SSL sertifikalı ödeme ile poliçeni hemen al!'
    }
  ]
};
