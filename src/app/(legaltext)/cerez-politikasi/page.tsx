import CookieText from "@/components/pages/(legal)/cookie/CookieText"
import "@/styles/legal.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çerez Politikası - Sigortagen Web Sitesi Çerez Kullanımı',
  description: 'Sigortagen web sitesi çerez politikası hakkında bilgi alabilirsiniz. Web sitemizi kullanarak çerez politikamıza uyum sağlayın ve daha iyi bir deneyim yaşayın.',
  openGraph: {
    title: 'Çerez Politikası - Sigortagen Web Sitesi Çerez Kullanımı',
    description: 'Sigortagen web sitesi çerez politikası hakkında bilgi alabilirsiniz. Web sitemizi kullanarak çerez politikamıza uyum sağlayın ve daha iyi bir deneyim yaşayın.',
    type: 'website',
    url: 'https://www.sigortagen.com/cerez-politikasi',
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
    title: 'Çerez Politikası - Sigortagen Web Sitesi Çerez Kullanımı',
    description: 'Sigortagen web sitesi çerez politikası hakkında bilgi alabilirsiniz. Web sitemizi kullanarak çerez politikamıza uyum sağlayın ve daha iyi bir deneyim yaşayın.',
    images: ['/images/logo.svg'],
    site: '@sigortagen',
    creator: '@sigortagen',
  },
  alternates: {
    canonical: 'https://www.sigortagen.com/cerez-politikasi',
  },
}

function page() {
  return (
    <CookieText />
  )
}

export default page
