import { Metadata } from 'next';
import DaskQuotePage from '@/components/QuoteFlow/DaskQuote/DaskQuotePage';
import '../../../styles/form-style.css';
 
export const metadata: Metadata = {
  title: "DASK Sigortası Al - Hızlı ve Güvenli Poliçe | Sigortanı Karşılaştır",
  description: "Eviniz için zorunlu deprem sigortasını birkaç adımda online oluşturun, hemen koruma altına alın. Sigortanı Karşılaştır ile en doğru deprem sigortasınu bulmak çok kolay!",
  metadataBase: new URL('https://sigortanikarsilastir.com'),
  alternates: {
    canonical: "https://sigortanikarsilastir.com/dask-teklif"
  },
  openGraph: {
    title: "DASK Sigortası Al - Hızlı ve Güvenli Poliçe | Sigortanı Karşılaştır",
    description: "Eviniz için zorunlu deprem sigortasını birkaç adımda online oluşturun, hemen koruma altına alın. Sigortanı Karşılaştır ile en doğru deprem sigortasınu bulmak çok kolay!",
    url: "https://sigortanikarsilastir.com/dask-teklif",
    type: "website"
  },
  twitter: {
    title: "DASK Sigortası Al - Hızlı ve Güvenli Poliçe | Sigortanı Karşılaştır",
    description: "Eviniz için zorunlu deprem sigortasını birkaç adımda online oluşturun, hemen koruma altına alın. Sigortanı Karşılaştır ile en doğru deprem sigortasınu bulmak çok kolay!",
    card: "summary_large_image"
  }
};
export default function DaskTeklifPage() {
  return <DaskQuotePage />;
} 
