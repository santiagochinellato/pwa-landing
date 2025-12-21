import { groq } from 'next-sanity'

// Minimal queries for now, can be expanded based on Baritrekking schemas
export const projectsQuery = groq`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    year,
    "mainImage": mainImage.asset->url,
    description
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    title,
    description,
    "ogImage": ogImage.asset->url
  }
`
