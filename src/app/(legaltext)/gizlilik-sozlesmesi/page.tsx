import SecurityPolicy from "@/components/pages/(legal)/security/SecurityText"
import "@/styles/legal.css"
import { Metadata } from 'next'
import { getSiteUrl, getSiteName, getSiteHandle } from '@/utils/site'

export const metadata: Metadata = {
  title: `Gizlilik Sözleşmesi - ${getSiteName()} Bilgi Güvencesi`,
  description: `${getSiteName()} olarak müşteri gizliliği ve bilgi güvenliği en öncelikli konularımızdır. Gizlilik sözleşmemizi inceleyerek daha fazla bilgi sahibi olabilirsiniz.`,
  openGraph: {
    title: `Gizlilik Sözleşmesi - ${getSiteName()} Bilgi Güvencesi`,
    description: `${getSiteName()} olarak müşteri gizliliği ve bilgi güvenliği en öncelikli konularımızdır. Gizlilik sözleşmemizi inceleyerek daha fazla bilgi sahibi olabilirsiniz.`,
    type: 'website',
    url: `${getSiteUrl()}/gizlilik-sozlesmesi`,
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
    title: `Gizlilik Sözleşmesi - ${getSiteName()} Bilgi Güvencesi`,
    description: `${getSiteName()} olarak müşteri gizliliği ve bilgi güvenliği en öncelikli konularımızdır. Gizlilik sözleşmemizi inceleyerek daha fazla bilgi sahibi olabilirsiniz.`,
    images: ['/images/logo.svg'],
    site: getSiteHandle(),
    creator: getSiteHandle(),
  },
  alternates: {
    canonical: `${getSiteUrl()}/gizlilik-sozlesmesi`,
  },
}

function page() {
  return (
    <SecurityPolicy />
  )
}

export default page
