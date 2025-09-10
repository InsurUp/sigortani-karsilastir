import HealthText from "@/components/pages/(legal)/health-text/HealthText"
import "@/styles/legal.css"
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: 'Sağlık Verileri Açık Rıza Metni - Sağlığınız İçin Gizlilik',
  description: `Sağlık verilerinizin işlenmesine yönelik onayınızı yönetmek için Sağlık Verileri Açık Rıza Metni'ni inceleyin. ${getSiteName()}'de gizliliğinizi koruma altına alıyoruz.`,
  openGraph: {
    title: 'Sağlık Verileri Açık Rıza Metni - Sağlığınız İçin Gizlilik',
    description: `Sağlık verilerinizin işlenmesine yönelik onayınızı yönetmek için Sağlık Verileri Açık Rıza Metni'ni inceleyin. ${getSiteName()}'de gizliliğinizi koruma altına alıyoruz.`,
    type: 'website',
    url: `${getSiteUrl()}/saglik-acik-riza-metni`,
    siteName: getSiteName(),
    locale: 'tr-TR',
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: `${getSiteName()} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sağlık Verileri Açık Rıza Metni - Sağlığınız İçin Gizlilik',
    description: `Sağlık verilerinizin işlenmesine yönelik onayınızı yönetmek için Sağlık Verileri Açık Rıza Metni'ni inceleyin. ${getSiteName()}'de gizliliğinizi koruma altına alıyoruz.`,
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/saglik-acik-riza-metni`,
  },
}

function page() {
  return (
        <HealthText />
  )
}

export default page 
