import HealthText from "@/components/pages/(legal)/health-text/HealthText"
import "@/styles/legal.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sağlık Verileri Açık Rıza Metni - Sağlığınız İçin Gizlilik',
  description: 'Sağlık verilerinizin işlenmesine yönelik onayınızı yönetmek için Sağlık Verileri Açık Rıza Metni\'ni inceleyin. Sigortagen\'de gizliliğinizi koruma altına alıyoruz.',
  openGraph: {
    title: 'Sağlık Verileri Açık Rıza Metni - Sağlığınız İçin Gizlilik',
    description: 'Sağlık verilerinizin işlenmesine yönelik onayınızı yönetmek için Sağlık Verileri Açık Rıza Metni\'ni inceleyin. Sigortagen\'de gizliliğinizi koruma altına alıyoruz.',
    type: 'website',
    url: 'https://www.sigortagen.com/saglik-acik-riza-metni',
    siteName: 'Sigortagen',
    locale: 'tr-TR',
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Sigortagen Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sağlık Verileri Açık Rıza Metni - Sağlığınız İçin Gizlilik',
    description: 'Sağlık verilerinizin işlenmesine yönelik onayınızı yönetmek için Sağlık Verileri Açık Rıza Metni\'ni inceleyin. Sigortagen\'de gizliliğinizi koruma altına alıyoruz.',
    images: ['/images/logo.svg'],
    site: '@sigortagen',
    creator: '@sigortagen',
  },
  alternates: {
    canonical: 'https://www.sigortagen.com/saglik-acik-riza-metni',
  },
}

function page() {
  return (
        <HealthText />
  )
}

export default page 
