import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './src/sanity/schemas'

import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'Alqala Museum Admin',
  projectId: '56rsac5v',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool(), cloudinarySchemaPlugin()],
  schema: {
    types: schemas,
  },
})
