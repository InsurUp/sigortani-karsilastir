import CookieText from "@/components/pages/(legal)/cookie/CookieText"
import "@/styles/legal.css"
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: `Çerez Politikası - ${getSiteName()} Web Sitesi Çerez Kullanımı`,
  description: `${getSiteName()} web sitesi çerez politikası hakkında bilgi alabilirsiniz. Web sitemizi kullanarak çerez politikamıza uyum sağlayın ve daha iyi bir deneyim yaşayın.`,
  openGraph: {
    title: `Çerez Politikası - ${getSiteName()} Web Sitesi Çerez Kullanımı`,
    description: `${getSiteName()} web sitesi çerez politikası hakkında bilgi alabilirsiniz. Web sitemizi kullanarak çerez politikamıza uyum sağlayın ve daha iyi bir deneyim yaşayın.`,
    type: 'website',
    url: `${getSiteUrl()}/cerez-politikasi`,
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
    title: `Çerez Politikası - ${getSiteName()} Web Sitesi Çerez Kullanımı`,
    description: `${getSiteName()} web sitesi çerez politikası hakkında bilgi alabilirsiniz. Web sitemizi kullanarak çerez politikamıza uyum sağlayın ve daha iyi bir deneyim yaşayın.`,
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/cerez-politikasi`,
  },
}

function page() {
  return (
    <CookieText />
  )
}

export default page
