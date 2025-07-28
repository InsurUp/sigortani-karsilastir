export interface DamageDocumentItem {
  title: string;
  description: string;
}

export interface DamageDocument {
  title: string;
  image: string;
  documents: DamageDocumentItem[];
}

export const damageDocuments: DamageDocument[] = [
  {
    title: "Kaza",
    image: "/images/kaza-icon.png",
    documents: [
      {
        title: "Kaza tespit tutanağı",
        description: "Kazadan sonra doldurulması gereken resmi form."
      },
      {
        title: "Sürücü belgesi fotokopisi",
        description: "Kazaya karışan sürücülerin ehliyet fotokopisi."
      },
      {
        title: "Ruhsat fotokopisi",
        description: "Aracın ruhsatının ön ve arka yüzü."
      },
      {
        title: "Sigorta poliçesi",
        description: "Geçerli sigorta poliçesinin fotokopisi."
      },
      {
        title: "Alkol raporu (varsa)",
        description: "Polis tarafından düzenlenmiş alkol raporu."
      },
      {
        title: "Hasar fotoğrafları",
        description: "Kazaya ait aracın ve olay yerinin fotoğrafları."
      }
    ]
  },
  {
    title: "Yangın",
    image: "/images/yangin-icon.png",
    documents: [
      {
        title: "Hasar bildirimi dilekçesi",
        description: "Hasarın detaylarını anlatan dilekçe."
      },
      {
        title: "Tapu fotokopisi",
        description: "Hasar gören konuta ait tapu belgesi."
      },
      {
        title: "Kimlik fotokopisi",
        description: "Sigortalının kimlik fotokopisi."
      },
      {
        title: "Hasar fotoğrafları",
        description: "Hasar gören alanların fotoğrafları."
      },
      {
        title: "Ekspertiz raporu (varsa)",
        description: "Eksper tarafından hazırlanan rapor."
      }
    ]
  },
  {
    title: "Elektronik",
    image: "/images/elektronik-icon.png",
    documents: [
      {
        title: "Tedavi faturası",
        description: "Tedaviye ilişkin alınan fatura."
      },
      {
        title: "Doktor raporu",
        description: "Tedaviye ilişkin doktor raporu."
      },
      {
        title: "Reçete ve ilaç küpürleri",
        description: "Kullanılan ilaçlara ait reçete ve küpürler."
      },
      {
        title: "Kimlik fotokopisi",
        description: "Sigortalının kimlik fotokopisi."
      },
      {
        title: "Poliçe fotokopisi",
        description: "Geçerli sağlık sigortası poliçesi."
      }
    ]
  }
];
