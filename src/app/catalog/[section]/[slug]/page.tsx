import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Game from '@/views/Game'
import {
  SECTION_SLUGS,
  SUBCATEGORIES,
  sectionFromSlug,
  subcategoryBySlug,
} from '@/helpers/categories'

type Props = { params: Promise<{ section: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return SUBCATEGORIES.map((s) => ({
    section: SECTION_SLUGS[s.section],
    slug: s.slug,
  }))
}

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

  return <Game game={info} />
}