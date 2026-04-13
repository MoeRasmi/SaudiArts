import { createClient } from '@sanity/client'

export const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID || '56rsac5v'

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})
