import React from 'react'
import SSSPageLayout from '@/components/pages/sss/SSSPageLayout'

export const metadata = {
  title: "Sıkça Sorulan Sorular (SSS) - Sigortanı Karşılaştır",
  description: "Sigortanı Karşılaştır hakkında merak ettiğiniz tüm soruların cevaplarını bulun. Yapay zeka asistanımız, sigorta türleri, teklif alma süreci ve daha fazlası hakkında bilgi alın.",
  metadataBase: new URL('https://sigortanikarsilastir.com'),
  alternates: {
    canonical: "https://sigortanikarsilastir.com/sss"
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular (SSS) - Sigortanı Karşılaştır",
    description: "Sigortanı Karşılaştır hakkında merak ettiğiniz tüm soruların cevaplarını bulun. Yapay zeka asistanımız, sigorta türleri, teklif alma süreci ve daha fazlası hakkında bilgi alın.",
    url: "https://sigortanikarsilastir.com/sss",
    type: "website"
  },
  twitter: {
    title: "Sıkça Sorulan Sorular (SSS) - Sigortanı Karşılaştır",
    description: "Sigortanı Karşılaştır hakkında merak ettiğiniz tüm soruların cevaplarını bulun. Yapay zeka asistanımız, sigorta türleri, teklif alma süreci ve daha fazlası hakkında bilgi alın.",
    card: "summary_large_image"
  }
};

export default function SSSPage() {
  return <SSSPageLayout />
}
