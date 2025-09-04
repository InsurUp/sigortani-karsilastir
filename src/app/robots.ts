import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      }
    ],
    // Geçici olarak sitemap'i kaldır
    // sitemap: 'https://www.sigortagen.com/sitemap.xml'
  }
}