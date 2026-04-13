export const ARTWORKS_QUERY = `
  *[_type == "artwork"] | order(_createdAt desc) {
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
      asset->{_id, url},
      alt
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
      asset->{_id, url},
      alt
    },
    dimensions,
    material,
    price,
    featured
  }
`

export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(orderWeight asc) {
    title: titleEn,
    title_ar: titleAr,
    description: descriptionEn,
    description_ar: descriptionAr,
    "image": categoryImage.asset->url,
    orderWeight,
    "slug": slug.current
  }
`

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    "aboutImage": aboutImage.asset->url,
    heroTagline,
    heroTagline_ar,
    contactEmail
  }
`
