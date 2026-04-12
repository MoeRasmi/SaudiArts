import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { artwork } from './src/sanity/schemas/artwork'
import { category } from './src/sanity/schemas/category'
import { siteSettings } from './src/sanity/schemas/siteSettings'

export default defineConfig({
  name: 'default',
  title: 'Alqala Museum Admin',
  projectId: import.meta.env?.VITE_SANITY_PROJECT_ID || 'abcdef12',
  dataset: import.meta.env?.VITE_SANITY_DATASET || 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [artwork, category, siteSettings],
  },
})
