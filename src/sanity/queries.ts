export const ARTWORKS_QUERY = `
  *[_type == "artwork" && status == "published"] | order(createdAt desc) {
    id,
    _id,
    title,
    title_ar,
    "slug": slug.current,
    "category": category->slug.current,
    "categoryId": category->slug.current,
    period,
    origin,
    description,
    description_ar,
    images[] {
      "url": imageAsset.secure_url,
      alt,
      isPrimary
    },
    dimensions,
    material,
    price,
    featured
  }
`

export const ARTWORK_BY_SLUG_QUERY = `
  *[_type == "artwork" && slug.current == $slug][0] {
    id,
    _id,
    title,
    title_ar,
    "slug": slug.current,
    "category": category->slug.current,
    "categoryId": category->slug.current,
    period,
    origin,
    description,
    description_ar,
    images[] {
      "url": imageAsset.secure_url,
      alt,
      isPrimary
    },
    dimensions,
    material,
    price,
    featured
  }
`

export const CATEGORIES_QUERY = `
  *[_type == "category"] {
    title,
    title_ar,
    "slug": slug.current
  }
`
