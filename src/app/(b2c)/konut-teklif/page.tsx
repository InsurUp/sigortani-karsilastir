import { Metadata } from 'next';
import KonutQuotePage from '@/components/QuoteFlow/KonutQuote/KonutQuotePage';

import '../../../styles/form-style.css';

 
export const metadata: Metadata = {
  title: "Konut Sigortası Edin - Evinizi Güvende Tutun | Sigortagen",
  description: "Evinizi yangın, sel ve diğer afet risklerine karşı koruma altına alın. Konut sigortası için hızlıca teklif alıp size en uygun şartlarda poliçenizi oluşturun.",
  metadataBase: new URL('https://sigortagen.com'),
  alternates: {
    canonical: "https://sigortagen.com/konut-teklif"
  },
  openGraph: {
    title: "Konut Sigortası Edin - Evinizi Güvende Tutun | Sigortagen",
    description: "Evinizi yangın, sel ve diğer afet risklerine karşı koruma altına alın. Konut sigortası için hızlıca teklif alıp size en uygun şartlarda poliçenizi oluşturun.",
    url: "https://sigortagen.com/konut-teklif",
    type: "website"
  },
  twitter: {
    title: "Konut Sigortası Edin - Evinizi Güvende Tutun | Sigortagen",
    description: "Evinizi yangın, sel ve diğer afet risklerine karşı koruma altına alın. Konut sigortası için hızlıca teklif alıp size en uygun şartlarda poliçenizi oluşturun.",
    card: "summary_large_image"
  }
};
export default function KonutTeklifPage() {
  return <KonutQuotePage />;
} 
