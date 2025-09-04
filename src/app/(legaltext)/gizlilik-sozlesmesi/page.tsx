import SecurityPolicy from "@/components/pages/(legal)/security/SecurityText"
import "@/styles/legal.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Sözleşmesi - Sigortagen Bilgi Güvencesi',
  description: 'Sigortagen olarak müşteri gizliliği ve bilgi güvenliği en öncelikli konularımızdır. Gizlilik sözleşmemizi inceleyerek daha fazla bilgi sahibi olabilirsiniz.',
  openGraph: {
    title: 'Gizlilik Sözleşmesi - Sigortagen Bilgi Güvencesi',
    description: 'Sigortagen olarak müşteri gizliliği ve bilgi güvenliği en öncelikli konularımızdır. Gizlilik sözleşmemizi inceleyerek daha fazla bilgi sahibi olabilirsiniz.',
    type: 'website',
    url: 'https://www.sigortagen.com/gizlilik-sozlesmesi',
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
    title: 'Gizlilik Sözleşmesi - Sigortagen Bilgi Güvencesi',
    description: 'Sigortagen olarak müşteri gizliliği ve bilgi güvenliği en öncelikli konularımızdır. Gizlilik sözleşmemizi inceleyerek daha fazla bilgi sahibi olabilirsiniz.',
    images: ['/images/logo.svg'],
    site: '@sigortagen',
    creator: '@sigortagen',
  },
  alternates: {
    canonical: 'https://www.sigortagen.com/gizlilik-sozlesmesi',
  },
}

function page() {
  return (
    <SecurityPolicy />
  )
}

export default page
