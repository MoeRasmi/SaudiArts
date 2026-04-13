import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Legacy Title',
      type: 'string',
      hidden: true,
    }),
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
  // Provide explicit orderings to avoid Studio defaulting to a non-existent `title` field
  orderings: [
    { title: 'Order weight (asc)', name: 'orderWeightAsc', by: [{ field: 'orderWeight', direction: 'asc' }] },
    { title: 'Title (EN, asc)', name: 'titleEnAsc', by: [{ field: 'titleEn', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'descriptionEn',
      media: 'categoryImage'
    }
  },
})
