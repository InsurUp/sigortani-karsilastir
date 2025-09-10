import DisatanceLayout from "@/components/pages/(legal)/distance/DisatanceLayout"
import "@/styles/legal.css"
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: 'Mesafeli Satış Sözleşmesi',
  description: `${getSiteName()} olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.`,
  openGraph: {
    title: 'Mesafeli Satış Sözleşmesi',
    description: `${getSiteName()} olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.`,
    type: 'website',
    url: `${getSiteUrl()}/mesafeli-satis-sozlesmesi`,
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
    title: 'Mesafeli Satış Sözleşmesi',
    description: `${getSiteName()} olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.`,
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/mesafeli-satis-sozlesmesi`,
  },
}

function page() {
  return (
        <DisatanceLayout />
  )
}

export default page
