import type { MetadataRoute } from 'next'
import { SECTION_SLUGS, SUBCATEGORIES, catalogUrl } from '@/helpers/categories'
import type { BigCategory } from '@/types'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/', '/gifts', '/catalog', '/faq', '/charity',
    ...(Object.keys(SECTION_SLUGS) as BigCategory[]).map((s) => catalogUrl(s)),
    ...SUBCATEGORIES.map((s) => catalogUrl(s.section, s.name)),
  ]
  return paths.map((p) => ({ url: `https://redlineshop.shop${p}` }))
}