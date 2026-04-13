import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './src/sanity/schemas'

import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'Alqala Museum Admin',
  projectId: import.meta.env?.VITE_SANITY_PROJECT_ID || 'pg9ct8q7cm8yrp2jzujnqrik',
  dataset: import.meta.env?.VITE_SANITY_DATASET || 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool(), cloudinarySchemaPlugin()],
  schema: {
    types: schemas,
  },
})
