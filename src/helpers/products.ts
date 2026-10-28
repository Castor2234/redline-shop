import type { BigCategory, Product } from '../types'

const SUPERCELL_ID_NOTE =
  'Заход на аккаунт не нужен. Нужно добавить продавца в друзья и подождать 7 дней — только после этого заказ будет выдан.'

export const PRODUCTS: Product[] = [
  // ——— Games / Brawl Stars ———
  {
    id: 'brawl-gems-30',
    category: 'Games',
    subcategory: 'Brawl Stars',
    kind: 'currency',
    title: '30 гемов',
    options: [{ price: 449, priceByn: 18 }],
    requires: 'Заход на аккаунт (код с почты)',
    popular: true,
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-80',
    category: 'Games',
    subcategory: 'Brawl Stars',
    kind: 'currency',
    title: '80 гемов',
    options: [{ price: 999, priceByn: 38 }],
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-170',
    category: 'Games',
    subcategory: 'Brawl Stars',
    kind: 'currency',
    title: '170 гемов',
    options: [{ price: 1999, priceByn: 75 }],
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-360',
    category: 'Games',
    subcategory: 'Brawl Stars',
    kind: 'currency',
    title: '360 гемов',
    options: [{ price: 3937, priceByn: 147 }],
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-950',
    category: 'Games',
    subcategory: 'Brawl Stars',
    kind: 'currency',
    title: '950 гемов',
    options: [{ price: 9907, priceByn: 365 }],
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-2000',
    category: 'Games',
    subcategory: 'Brawl Stars',
    kind: 'currency',
    title: '2000 гемов',
    options: [{ price: 19927, priceByn: 735 }],
    requires: 'Заход на аккаунт (код с почты)',
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
  id: 'brawl-pass',
  category: 'Games',
  subcategory: 'Brawl Stars',
  kind: 'pass',
  title: 'Brawl Pass',
  note: 'Текущий сезон',
  options: [
    { label: 'Заход на аккаунт', price: 1799, priceByn: 70 },
    { label: 'Через Supercell Store', price: 1999, priceByn: 80 },
  ],
  requires: 'Заход на аккаунт (код с почты)',
  keywords: ['бравл', 'пропуск', 'пасс', 'pass'],
},
{
  id: 'brawl-pass-plus',
  category: 'Games',
  subcategory: 'Brawl Stars',
  kind: 'pass',
  title: 'Brawl Pass Plus',
  note: 'Текущий сезон',
  options: [
    { label: 'Заход на аккаунт', price: 2599, priceByn: 100 },
    { label: 'Через Supercell Store', price: 2899, priceByn: 112 },
    { label: 'Подарком Supercell ID', price: 3999, priceByn: 151, note: SUPERCELL_ID_NOTE },
  ],
  requires: 'Заход на аккаунт (код с почты)',
  keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
},

{
  id: 'brawl-pro-pass',
  category: 'Games',
  subcategory: 'Brawl Stars',
  kind: 'pass',
  title: 'Brawl Pro Pass',
  note: 'Текущий сезон',
  options: [
    { label: 'Через Supercell Store', price: 5499, priceByn: 210 },
    { label: 'Подарком Supercell ID', price: 6999, priceByn: 265, note: SUPERCELL_ID_NOTE },
  ],
  requires: 'Заход на аккаунт (код с почты)',
  keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'pro'],
},
{
  id: 'brawl-pass-plus-upgrade',
  category: 'Games',
  subcategory: 'Brawl Stars',
  kind: 'pass',
  title: 'Улучшение до Brawl Pass Plus',
  note: 'Текущий сезон',
  options: [{ price: 999, priceByn: 40 }],
  requires: 'Заход на аккаунт (код с почты)',
  keywords: ['бравл', 'пропуск', 'пасс', 'pass', 'plus'],
},
  

  // ——— Games / Clash Royale ———
  {
  id: 'cr-pass',
  category: 'Games',
  subcategory: 'Clash Royale',
  kind: 'pass',
  title: 'Pass Royale',
  note: 'Текущий сезон',
  options: [
    { label: 'Заход на аккаунт', price: 2399, priceByn: 90 },
    { label: 'Через Supercell Store', price: 2599, priceByn: 97 },
    { label: 'Подарком Supercell ID', price: 3299, priceByn: 125, note: SUPERCELL_ID_NOTE },
  ],
  requires: 'Заход на аккаунт (код с почты)',
  keywords: ['клэш', 'клеш', 'роял', 'ройал', 'пропуск', 'пасс', 'pass'],
},
{
  id: 'cr-mini-pass',
  category: 'Games',
  subcategory: 'Clash Royale',
  kind: 'pass',
  title: 'Mini Pass Royale',
  note: 'Текущий сезон',
  options: [{ price: 799, priceByn: 30 }],
  requires: 'Заход на аккаунт (код с почты)',
  keywords: ['клеш', 'роял', 'пропуск', 'пасс', 'pass'],
},

  // ——— Games / Clash of Clans ———
  {
    id: 'cl-event-pass',
    category: 'Games',
    subcategory: 'Clash of Clans',
    kind: 'pass',
    title: 'Event Pass',
    options: [{ price: 999, priceByn: 38}],
    requires: 'Заход на аккаунт (код с почты)',
    popular: false,
    keywords: ['клеш', 'клэш', 'клэнс', 'пасс'],
  },
  

  // ——— Other / ChatGPT ———
  {
    id: 'chat-plus',
    category: 'Other',
    subcategory: 'ChatGPT',
    kind: 'subscription',
    title: 'ChatGPT Plus',
    options: [{price: 4499, priceByn: 170 }],
    requires: 'Заход на аккаунт (код с почты)',
    popular: true,
    keywords: ['чатгпт', 'чат', 'гпт'],
  },

  // ——— Other / TikTok ———
  {
    id: 'tiktok-70',
    category: 'Other',
    subcategory: 'TikTok',
    kind: 'currency',
    title: 'TikTok 70 монет',
    options: [{ price: 799, priceByn: 31 }],
    requires: 'Заход на аккаунт',
    popular: false,
    keywords: ['тикток', 'монеты'],
  },
  {
    id: 'tiktok-330',
    category: 'Other',
    subcategory: 'TikTok',
    kind: 'currency',
    title: 'TikTok 330 монет',
    options: [{ price: 1599, priceByn: 61 }],
    requires: 'Заход на аккаунт',
    popular: false,
    keywords: ['тикток', 'монеты'],
  },
  {
    id: 'tiktok-660',
    category: 'Other',
    subcategory: 'TikTok',
    kind: 'currency',
    title: 'TikTok 660 монет',
    options: [{ price: 2799, priceByn: 106 }],
    requires: 'Заход на аккаунт',
    popular: false,
    keywords: ['тикток', 'монеты'],
  },
  {
    id: 'tiktok-1321',
    category: 'Other',
    subcategory: 'TikTok',
    kind: 'currency',
    title: 'TikTok 1321 монет',
    options: [{ price: 4999, priceByn: 188 }],
    requires: 'Заход на аккаунт',
    popular: false,
    keywords: ['тикток', 'монеты'],
  },
  {
    id: 'tiktok-3500',
    category: 'Other',
    subcategory: 'TikTok',
    kind: 'currency',
    title: 'TikTok 3500 монет',
    options: [{ price: 12499, priceByn: 465 }],
    requires: 'Заход на аккаунт',
    popular: false,
    keywords: ['тикток', 'монеты'],
  },
  {
    id: 'tiktok-7000',
    category: 'Other',
    subcategory: 'TikTok',
    kind: 'currency',
    title: 'TikTok 7000 монет',
    options: [{ price: 24999, priceByn: 920 }],
    requires: 'Заход на аккаунт',
    popular: true,
    keywords: ['тикток', 'монеты'],
  },

  // ——— Other / Telegram ———
  {
    id: 'tg-50',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 50 звезд',
    options: [{ price: 699, priceByn: 25 }],
    requires: 'id - @ аккаунта или подарком',
    popular: true,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-100',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 100 звезд',
    options: [{ price: 800, priceByn: 32 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-150',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 150 звезд',
    options: [{ price: 1199, priceByn: 46 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-250',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 250 звезд',
    options: [{ price: 1749, priceByn: 68 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-500',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 500 звезд',
    options: [{ price: 2999, priceByn: 117 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-1000',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 1000 звезд',
    options: [{ price: 5999, priceByn: 225 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-2500',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 2500 звезд',
    options: [{ price: 12499, priceByn: 470 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
  {
    id: 'tg-5000',
    category: 'Other',
    subcategory: 'Telegram',
    kind: 'currency',
    title: 'Telegram 5000 звезд',
    options: [{ price: 24999, priceByn: 935 }],
    requires: 'id - @ аккаунта или подарком',
    popular: false,
    keywords: ['телеграм', 'телеграмм', 'звезд', 'звезды'],
  },
{
  id: 'tg-premium-1',
  category: 'Other',
  subcategory: 'Telegram',
  kind: 'subscription',
  title: 'Telegram premium 1 месяц заходом',
  options: [{ price: 1499, priceByn: 55 }],
  requires: 'Заход на аккаунт',
  popular: false,
  keywords: ['телеграм', 'телеграмм', 'премиум'],
},
{
  id: 'tg-premium-3',
  category: 'Other',
  subcategory: 'Telegram',
  kind: 'subscription',
  title: 'Telegram premium 3 месяца подарком',
  options: [{ price: 3999, priceByn: 150 }],
  requires: 'Имя пользователя',
  popular: false,
  keywords: ['телеграм', 'телеграмм', 'премиум'],
},
{
  id: 'tg-premium-6',
  category: 'Other',
  subcategory: 'Telegram',
  kind: 'subscription',
  title: 'Telegram premium 6 месяцов подарком',
  options: [{ price: 4999, priceByn: 188 }],
  requires: 'Имя пользователя',
  popular: false,
  keywords: ['телеграм', 'телеграмм', 'премиум'],
},
{
  id: 'tg-premium-12',
  category: 'Other',
  subcategory: 'Telegram',
  kind: 'subscription',
  title: 'Telegram premium 1 год подарком',
  options: [{ price: 9999, priceByn: 375 }],
  requires: 'Имя пользователя',
  popular: false,
  keywords: ['телеграм', 'телеграмм', 'премиум'],
},

// ——— Other / Youtube ———
  {
  id: 'yt-1',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium 1 месяц',
  options: [{ price: 1499, priceByn: 58 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум'],
},
{
  id: 'yt-3',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium 3 месяца',
  options: [{ price: 4499, priceByn: 170 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум'],
},
{
  id: 'yt-6',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium 6 месяцев',
  options: [{ price: 8999, priceByn: 340 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум'],
},
{
  id: 'yt-12',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium 12 месяцев',
  options: [{ price: 17499, priceByn: 660 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум'],
},
{
  id: 'yt-lite-1',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium Lite 1 месяц',
  options: [{ price: 1099, priceByn: 45 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум', 'лайт', 'lite'],
},
{
  id: 'yt-lite-3',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium Lite 3 месяца',
  options: [{ price: 3299, priceByn: 125 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум', 'лайт', 'lite'],
},
{
  id: 'yt-lite-6',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium Lite 6 месяцев',
  options: [{ price: 6599, priceByn: 250 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум', 'лайт', 'lite'],
},
{
  id: 'yt-lite-12',
  category: 'Other',
  subcategory: 'YouTube',
  kind: 'subscription',
  title: 'YouTube Premium Lite 12 месяцев',
  options: [{ price: 12999, priceByn: 490 }],
  requires: 'Заход на аккаунт',
  keywords: ['ютуб', 'ют', 'yt', 'ютьюб', 'премиум', 'лайт', 'lite'],
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
  'Brawl Stars',
  'ChatGPT',
  'Telegram',
  'TikTok',
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
