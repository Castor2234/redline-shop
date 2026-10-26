import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Catalog from '@/views/Catalog'
import { SECTION_SLUGS, sectionFromSlug } from '@/helpers/categories'

type Props = { params: Promise<{ section: string }> }

export const dynamicParams = false
export const generateStaticParams = () => Object.values(SECTION_SLUGS).map((section) => ({ section }))

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params
  const key = sectionFromSlug(section)
  if (!key) return {}
  return {
    title: `${key} — каталог`,
    description: `Товары раздела ${key}: цены в RUB и BYN, заказ и выдача в Telegram.`,
    alternates: { canonical: `/catalog/${section}` },
  }
}

export default async function Page({ params }: Props) {
  const { section } = await params
  const key = sectionFromSlug(section)
  if (!key) notFound()
  return <Catalog section={key} heading={key} intro={`Товары раздела ${key}. Поиск идёт по всем товарам сразу.`} />
}