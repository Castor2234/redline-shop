import type { BigCategory, Product } from '../types'

/**
 * Каталог. Добавить товар = добавить объект в массив.
 * category: 'Games' | 'Other' — два больших раздела.
 * subcategory: подраздел внутри раздела («Brawl Stars», «ChatGPT»…).
 * popular: true — подраздел попадает в блок «Популярное» на главной.
 */
export const PRODUCTS: Product[] = [
  // ——— Games / Brawl Stars ———
  {
    id: 'brawl-gems-170',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '170 гемов',
    price: 690,
    requires: 'Тег игрока',
    popular: true,
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-360',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '360 гемов',
    price: 1290,
    requires: 'Тег игрока',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-pass',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass',
    price: 650,
    requires: 'Тег игрока',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass'],
  },
  {
    id: 'brawl-pass-plus',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass Plus',
    price: 1250,
    requires: 'Тег игрока',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
  },

  // ——— Games / Clash Royale ———
  {
    id: 'cr-gems-500',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: '500 гемов',
    price: 620,
    requires: 'Тег игрока',
    keywords: ['клеш', 'клэш', 'роял', 'гемы', 'gems'],
  },
  {
    id: 'cr-gems-2500',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: '2500 гемов',
    price: 2790,
    requires: 'Тег игрока',
    keywords: ['клеш', 'клэш', 'роял', 'гемы', 'gems'],
  },
  {
    id: 'cr-pass',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: 'Pass Royale',
    price: 640,
    requires: 'Тег игрока',
    note: 'Текущий сезон',
    keywords: ['клеш', 'роял', 'пропуск', 'пасс', 'pass'],
  },

]

/** Оба больших раздела каталога в порядке отображения. */
export const BIG_CATEGORIES: { key: BigCategory; label: string }[] = [
  { key: 'Games', label: 'Games' },
  { key: 'Other', label: 'Other' },
]

/**
 * Товары для блока «Берут чаще всего» на главной.
 * Берём всё, что помечено popular: true, и обрезаем до нужного количества.
 */
export function topPopular(products: Product[], limit = 4): Product[] {
  return products.filter((product) => product.popular).slice(0, limit)
}

/**
 * Порядок подразделов в блоке «Популярное» на главной.
 * Поменять местами = поменять порядок плиток.
 */
const POPULAR_ORDER = [
  'ChatGPT',
  'Brawl Stars',
  'TikTok',
  'Telegram',
  'PUBG Mobile',
]

/**
 * Подразделы для блока «Популярные категории» на главной:
 * сначала POPULAR_ORDER, потом остальные popular-подразделы
 * в порядке появления в каталоге.
 */
export function popularSubcategories(products: Product[], limit = 6): string[] {
  const hasPopular = new Set(
    products.filter((product) => product.popular).map((product) => product.subcategory),
  )

  const ordered = POPULAR_ORDER.filter((name) => hasPopular.has(name))
  for (const name of hasPopular) {
    if (!ordered.includes(name)) ordered.push(name)
  }

  return ordered.slice(0, limit)
}

/** Склонение слова «товар»: 1 товар, 2 товара, 5 товаров. */
export function productsWord(count: number): string {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod10 === 1 && mod100 !== 11) return 'товар'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'товара'
  return 'товаров'
}

/** Подразделы внутри большого раздела в порядке появления в каталоге. */
export function subcategoriesOf(
  products: Product[],
  category: BigCategory,
): string[] {
  const seen = new Set<string>()
  const result: string[] = []

  for (const product of products) {
    if (product.category !== category || seen.has(product.subcategory)) continue
    seen.add(product.subcategory)
    result.push(product.subcategory)
  }

  return result
}

/** Товары подраздела — для плитки «Популярные категории» на главной. */
export function productsOfSubcategory(
  products: Product[],
  subcategory: string,
): Product[] {
  return products.filter((product) => product.subcategory === subcategory)
}
