import { createClient } from '@sanity/client'

export const sanityProjectId = '56rsac5v'

export const sanityClient = createClient({
  projectId: '56rsac5v',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})
