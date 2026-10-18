import type { BigCategory, Product } from '../types'

/**
 * Каталог. Добавить товар = добавить объект в массив.
 * category: 'Games' | 'Other' — два больших раздела.
 * subcategory: подраздел внутри раздела («Brawl Stars», «ChatGPT»…).
 * price / priceByn: цены проставляются вручную для каждой валюты (RUB / BYN).
 * popular: true — подраздел попадает в блок «Популярное» на главной.
 */
export const PRODUCTS: Product[] = [
  // ——— Games / Brawl Stars ———
  {
    id: 'brawl-gems-30',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '30 гемов',
    price: 449,
    priceByn: 18,
    requires: 'Заход на аккаунт (код с почты)',
    popular: true,
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-80',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '80 гемов',
    price: 999,
    priceByn: 38,
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-170',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '170 гемов',
    price: 1999,
    priceByn: 75,
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-360',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '360 гемов',
    price: 3937,
    priceByn: 147,
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-950',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '950 гемов',
    price: 9907,
    priceByn: 365,
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-2000',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '2000 гемов',
    price: 19927,
    priceByn: 735,
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-pass',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass',
    price: 1799,
    priceByn: 70,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass'],
  },
  {
    id: 'brawl-pass-plus',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass Plus',
    price: 2599,
    priceByn: 100,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
  },
  {
    id: 'brawl-pass-plus-upgrade',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Улучшение до Brawl Pass Plus',
    price: 999,
    priceByn: 40,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
  },
  {
    id: 'brawl-pass-store',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass через Supercell Store',
    price: 1999,
    priceByn: 80,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass'],
  },
  {
    id: 'brawl-pass-plus-store',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass Plus через Supercell Store',
    price: 2899,
    priceByn: 112,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
  },
  {
    id: 'brawl-pro-pass-store',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pro Pass через Supercell Store',
    price: 5499,
    priceByn: 210,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'pro'],
  },
  {
    id: 'brawl-pass-plus-gift',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pass Plus подарком Supercell ID',
    price: 3999,
    priceByn: 151,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
  },
  {
    id: 'brawl-pro-pass-gift',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: 'Brawl Pro Pass подарком Supercell ID',
    price: 6999,
    priceByn: 265,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'pro'],
  },
  

  // ——— Games / Clash Royale ———
  {
    id: 'cl-pass',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: 'Pass Royale',
    price: 2399,
    priceByn: 90,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    popular: true,
    keywords: ['клэш',"клеш", 'пропуск', 'ройал'],
  },
  {
    id: 'cl-pass',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: 'Pass Royale через Supercell Store',
    price: 2599,
    priceByn: 97,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['клэш',"клеш", 'пропуск', 'ройал'],
  },
  {
    id: 'cl-pass',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: 'Pass Royale через Supercell ID',
    price: 3299,
    priceByn: 125,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['клэш',"клеш", 'пропуск', 'ройал'],
  },
  {
    id: 'cr-mini-pass',
    category: 'Games',
    subcategory: 'Clash Royale',
    title: 'Mini Pass Royale',
    price: 799,
    priceByn: 30,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    keywords: ['клеш', 'роял', 'пропуск', 'пасс', 'pass'],
  },

  // ——— Games / Clash of Clans ———
  {
    id: 'cl-event-pass',
    category: 'Games',
    subcategory: 'Clash of Clans',
    title: 'Event Pass',
    price: 999,
    priceByn: 38,
    requires: 'Заход на аккаунт (код с почты)',
    popular: true,
    keywords: ['клеш', 'клэш', 'клэнс', 'пасс'],
  },
  

  // ——— Other / ChatGPT ———
  {
    id: 'chat-plus',
    category: 'Other',
    subcategory: 'ChatGPT',
    title: 'ChatGPT Plus',
    price: 3599,
    priceByn: 136,
    requires: 'Заход на аккаунт (код с почты)',
    note: 'Текущий сезон',
    popular: true,
    keywords: ['чатгпт', 'чат', 'гпт'],
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
