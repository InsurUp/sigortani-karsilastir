import DisatanceLayout from "@/components/pages/(legal)/distance/DisatanceLayout"
import "@/styles/legal.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mesafeli Satış Sözleşmesi',
  description: 'Sigortagen olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.',
  openGraph: {
    title: 'Mesafeli Satış Sözleşmesi',
    description: 'Sigortagen olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.',
    type: 'website',
    url: 'https://www.sigortagen.com/mesafeli-satis-sozlesmesi',
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
    title: 'Mesafeli Satış Sözleşmesi',
    description: 'Sigortagen olarak kişisel verilerinizin güvenliği bizim için önemlidir. KVKK uyumlu sigorta çözümleri hakkında detaylı bilgi almak için sayfamızı ziyaret edin.',
    images: ['/images/logo.svg'],
    site: '@sigortagen',
    creator: '@sigortagen',
  },
  alternates: {
    canonical: 'https://www.sigortagen.com/mesafeli-satis-sozlesmesi',
  },
}

function page() {
  return (
        <DisatanceLayout />
  )
}

export default page
