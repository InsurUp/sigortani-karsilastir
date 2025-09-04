import { Metadata } from 'next';
import DaskQuotePage from '@/components/QuoteFlow/DaskQuote/DaskQuotePage';
import '../../../styles/form-style.css';
 
export const metadata: Metadata = {
  title: "DASK Sigortası Al - Hızlı ve Güvenli Poliçe | Sigortagen",
  description: "Eviniz için zorunlu deprem sigortasını birkaç adımda online oluşturun, hemen koruma altına alın. Sigortagen ile en doğru deprem sigortasınu bulmak çok kolay!",
  metadataBase: new URL('https://sigortagen.com'),
  alternates: {
    canonical: "https://sigortagen.com/dask-teklif"
  },
  openGraph: {
    title: "DASK Sigortası Al - Hızlı ve Güvenli Poliçe | Sigortagen",
    description: "Eviniz için zorunlu deprem sigortasını birkaç adımda online oluşturun, hemen koruma altına alın. Sigortagen ile en doğru deprem sigortasınu bulmak çok kolay!",
    url: "https://sigortagen.com/dask-teklif",
    type: "website"
  },
  twitter: {
    title: "DASK Sigortası Al - Hızlı ve Güvenli Poliçe | Sigortagen",
    description: "Eviniz için zorunlu deprem sigortasını birkaç adımda online oluşturun, hemen koruma altına alın. Sigortagen ile en doğru deprem sigortasınu bulmak çok kolay!",
    card: "summary_large_image"
  }
};
export default function DaskTeklifPage() {
  return <DaskQuotePage />;
} 
