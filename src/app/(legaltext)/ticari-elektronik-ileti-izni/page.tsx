import Commander from "@/components/pages/(legal)/commander/Commander"
import "@/styles/legal.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ticari Elektronik İleti İzni - İletişim Onayı',
  description: 'Ticari elektronik ileti izin metnimizi inceleyin. Size ulaşacak bilgilendirmeleri ve kampanyaları kontrol altına almak için izin ayarlarınızı güncelleyebilirsiniz.',
  openGraph: {
    title: 'Ticari Elektronik İleti İzni - İletişim Onayı',
    description: 'Ticari elektronik ileti izin metnimizi inceleyin. Size ulaşacak bilgilendirmeleri ve kampanyaları kontrol altına almak için izin ayarlarınızı güncelleyebilirsiniz.',
    type: 'website',
    url: 'https://www.sigortagen.com/ticari-elektronik-ileti-izni',
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
    title: 'Ticari Elektronik İleti İzni - İletişim Onayı',
    description: 'Ticari elektronik ileti izin metnimizi inceleyin. Size ulaşacak bilgilendirmeleri ve kampanyaları kontrol altına almak için izin ayarlarınızı güncelleyebilirsiniz.',
    images: ['/images/logo.svg'],
    site: '@sigortagen',
    creator: '@sigortagen',
  },
  alternates: {
    canonical: 'https://www.sigortagen.com/ticari-elektronik-ileti-izni',
  },
}

function page() {
  return (
        <Commander />
  )
}

export default page
