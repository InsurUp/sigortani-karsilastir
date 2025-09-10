import Commander from "@/components/pages/(legal)/commander/Commander"
import "@/styles/legal.css"
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: 'Ticari Elektronik İleti İzni - İletişim Onayı',
  description: 'Ticari elektronik ileti izin metnimizi inceleyin. Size ulaşacak bilgilendirmeleri ve kampanyaları kontrol altına almak için izin ayarlarınızı güncelleyebilirsiniz.',
  openGraph: {
    title: 'Ticari Elektronik İleti İzni - İletişim Onayı',
    description: 'Ticari elektronik ileti izin metnimizi inceleyin. Size ulaşacak bilgilendirmeleri ve kampanyaları kontrol altına almak için izin ayarlarınızı güncelleyebilirsiniz.',
    type: 'website',
    url: `${getSiteUrl()}/ticari-elektronik-ileti-izni`,
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
    title: 'Ticari Elektronik İleti İzni - İletişim Onayı',
    description: 'Ticari elektronik ileti izin metnimizi inceleyin. Size ulaşacak bilgilendirmeleri ve kampanyaları kontrol altına almak için izin ayarlarınızı güncelleyebilirsiniz.',
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/ticari-elektronik-ileti-izni`,
  },
}

function page() {
  return (
        <Commander />
  )
}

export default page
