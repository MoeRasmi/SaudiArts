import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'abcdef12'

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => {
  return builder.image(source)
}
