import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://patagoniawebfactory.com.ar'
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/proyectos`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/servicios/turismo`, lastModified: new Date(), priority: 0.9 },
  ]
}
