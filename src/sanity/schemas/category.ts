import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAr',
      title: 'Title (AR)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (EN)',
      type: 'text',
      options: { maxLength: 200 },
      description: 'Short description (one line preferred)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Description (AR)',
      type: 'text',
      options: { maxLength: 200 },
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'categoryImage',
      title: 'Category Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'orderWeight',
      title: 'Order Weight',
      type: 'number',
      description: 'Use 1-11 to order categories',
      validation: (Rule) => Rule.min(1).max(100),
      initialValue: 99,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEn', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
