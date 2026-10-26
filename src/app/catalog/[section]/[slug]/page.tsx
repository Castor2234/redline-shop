import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Catalog from '@/views/Catalog'
import {
  SECTION_SLUGS,
  SUBCATEGORIES,
  sectionFromSlug,
  subcategoryBySlug,
} from '@/helpers/categories'

type Props = { params: Promise<{ section: string; slug: string }> }

// Только страницы из generateStaticParams, всё остальное — 404.
export const dynamicParams = false

export function generateStaticParams() {
  return SUBCATEGORIES.map((s) => ({
    section: SECTION_SLUGS[s.section],
    slug: s.slug,
  }))
}

/** Находит подраздел и проверяет, что он лежит в этом разделе (не /catalog/other/brawl-stars). */
function resolve(section: string, slug: string) {
  const info = subcategoryBySlug(slug)
  if (!info || sectionFromSlug(section) !== info.section) return null
  return info
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, slug } = await params
  const info = resolve(section, slug)
  if (!info) return {}

  return {
    title: info.title,
    description: info.description,
    alternates: { canonical: `/catalog/${section}/${slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { section, slug } = await params
  const info = resolve(section, slug)
  if (!info) notFound()

  return (
    <Catalog
      section={info.section}
      subcategory={info.name}
      heading={info.name}
      intro={info.description}
    />
  )
}