import type { BigCategory } from '../types'
import { SHOP } from '../config'
import { formatAmount } from './currency'
import { PRODUCTS, subcategoriesOf } from './products'

export const SECTION_SLUGS: Record<BigCategory, string> = { Games: 'games', Other: 'other' }

export type SubcategoryInfo = {
  name: string
  slug: string
  section: BigCategory
  title: string
  description: string
}

/** Ручные правки, если автоматические slug/title/description не подходят. */
const OVERRIDES: Record<string, Partial<Pick<SubcategoryInfo, 'slug' | 'title' | 'description'>>> = {
  // 'Brawl Stars': { description: 'Гемы, Brawl Pass и Pro Pass для Brawl Stars. ...' },
}

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

function buildInfo(name: string, section: BigCategory): SubcategoryInfo {
  const items = PRODUCTS.filter((p) => p.subcategory === name)
  const minPrice = Math.min(...items.map((p) => p.price))
  const o = OVERRIDES[name] ?? {}
  return {
    name,
    section,
    slug: o.slug ?? slugify(name),
    title: o.title ?? `${name}: цены и заказ`,
    description:
      o.description ??
      `${name} — ${items.length} поз., от ${formatAmount(minPrice, 'RUB')}. Заказ и выдача в Telegram за ${SHOP.deliveryTime}.`,
  }
}

export const SUBCATEGORIES: SubcategoryInfo[] = (Object.keys(SECTION_SLUGS) as BigCategory[]).flatMap(
  (section) => subcategoriesOf(PRODUCTS, section).map((name) => buildInfo(name, section)),
)

function assertCatalog() {
  const ids = new Set<string>()
  for (const p of PRODUCTS) {
    if (ids.has(p.id)) throw new Error(`Дубликат id товара: ${p.id}`)
    ids.add(p.id)
  }
  const slugs = new Set<string>()
  for (const s of SUBCATEGORIES) {
    if (!s.slug) throw new Error(`Пустой slug у «${s.name}» — добавьте override`)
    if (slugs.has(s.slug)) throw new Error(`Дубликат slug: ${s.slug}`)
    slugs.add(s.slug)
  }
}
assertCatalog()

export const subcategoryByName = (name: string) => SUBCATEGORIES.find((s) => s.name === name)
export const subcategoryBySlug = (slug: string) => SUBCATEGORIES.find((s) => s.slug === slug)

export function sectionFromSlug(slug: string): BigCategory | undefined {
  return (Object.keys(SECTION_SLUGS) as BigCategory[]).find((k) => SECTION_SLUGS[k] === slug)
}

/** Единственное место, где собираются URL каталога. */
export function catalogUrl(section?: BigCategory, subcategory?: string): string {
  if (!section) return '/catalog'
  const info = subcategory ? subcategoryByName(subcategory) : undefined
  const base = `/catalog/${SECTION_SLUGS[section]}`
  return info ? `${base}/${info.slug}` : base
}

/** Старые ссылки ?section=…&category=… → новые пути (null, если не нужно). */
export function legacyCatalogRedirect(params: URLSearchParams): string | null {
  const sub = params.get('category')
  const sec = params.get('section')
  const info = sub ? subcategoryByName(sub) : undefined
  if (info) return catalogUrl(info.section, info.name)
  if (sec === 'Games' || sec === 'Other') return catalogUrl(sec)
  return null
}