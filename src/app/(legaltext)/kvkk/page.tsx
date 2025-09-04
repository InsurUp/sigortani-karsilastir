import KvkkLayout from "@/components/pages/(legal)/kvkk/KvkkLayout"
import "@/styles/legal.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KVKK - Kişisel Verilerin Güvende Olduğu Yer: Sigortagen',
  description: 'Sigortagen olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.',
  openGraph: {
    title: 'KVKK - Kişisel Verilerin Güvende Olduğu Yer: Sigortagen',
    description: 'Sigortagen olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.',
    type: 'website',
    url: 'https://www.sigortagen.com/kvkk',
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
    title: 'KVKK - Kişisel Verilerin Güvende Olduğu Yer: Sigortagen',
    description: 'Sigortagen olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.',
    images: ['/images/logo.svg'],
    site: '@sigortagen',
    creator: '@sigortagen',
  },
  alternates: {
    canonical: 'https://www.sigortagen.com/kvkk',
  },
}

function page() {
  return (
    <KvkkLayout />
  )
}

export default page
