import Consent from "@/components/pages/(legal)/consent/Consent"; 
import "@/styles/legal.css";
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: 'Açık Rıza Metni - Kişisel Verilerinizin Güvencesi',
  description: 'Kişisel verilerinizin işlenmesiyle ilgili detaylı bilgilere Açık Rıza Metni sayfamızdan ulaşabilirsiniz. Verileriniz, güvenle ve yasal çerçevede korunmaktadır.',
  openGraph: {
    title: 'Açık Rıza Metni - Kişisel Verilerinizin Güvencesi',
    description: 'Kişisel verilerinizin işlenmesiyle ilgili detaylı bilgilere Açık Rıza Metni sayfamızdan ulaşabilirsiniz. Verileriniz, güvenle ve yasal çerçevede korunmaktadır.',
    type: 'website',
    url: `${getSiteUrl()}/acik-riza-metni`,
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
    title: 'Açık Rıza Metni - Kişisel Verilerinizin Güvencesi',
    description: 'Kişisel verilerinizin işlenmesiyle ilgili detaylı bilgilere Açık Rıza Metni sayfamızdan ulaşabilirsiniz. Verileriniz, güvenle ve yasal çerçevede korunmaktadır.',
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/acik-riza-metni`,
  },
}

export default function AcikRizaMetniPage() {
    return <Consent />;
}