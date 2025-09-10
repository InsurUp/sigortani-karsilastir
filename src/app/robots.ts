import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/utils/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      }
    ],
    // Geçici olarak sitemap'i kaldır
    // sitemap: `${getSiteUrl()}/sitemap.xml`
  }
}