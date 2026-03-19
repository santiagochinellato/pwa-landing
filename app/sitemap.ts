import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://macizodigital.com'
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/trabajos`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), priority: 0.8 },
  ]
}
