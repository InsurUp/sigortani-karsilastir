import KvkkLayout from "@/components/pages/(legal)/kvkk/KvkkLayout"
import "@/styles/legal.css"
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: `KVKK - Kişisel Verilerin Güvende Olduğu Yer: ${getSiteName()}`,
  description: `${getSiteName()} olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.`,
  openGraph: {
    title: `KVKK - Kişisel Verilerin Güvende Olduğu Yer: ${getSiteName()}`,
    description: `${getSiteName()} olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.`,
    type: 'website',
    url: `${getSiteUrl()}/kvkk`,
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
    title: `KVKK - Kişisel Verilerin Güvende Olduğu Yer: ${getSiteName()}`,
    description: `${getSiteName()} olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.`,
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/kvkk`,
  },
}

function page() {
  return (
    <KvkkLayout />
  )
}

export default page
