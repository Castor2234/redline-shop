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
    keywords: ['бравл', 'гемы', 'gems'],
  },
  {
    id: 'brawl-gems-360',
    category: 'Games',
    subcategory: 'Brawl Stars',
    title: '360 гемов',
    price: 1290,
    requires: 'Тег игрока',
    popular: true,
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
    popular: true,
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
    popular: true,
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
    popular: true,
    keywords: ['клеш', 'роял', 'пропуск', 'пасс', 'pass'],
  },

  // ——— Games / PUBG Mobile ———
  {
    id: 'pubg-325',
    category: 'Games',
    subcategory: 'PUBG Mobile',
    title: '325 UC',
    price: 390,
    requires: 'ID аккаунта',
    keywords: ['пубг', 'пабг', 'uc'],
  },
  {
    id: 'pubg-660',
    category: 'Games',
    subcategory: 'PUBG Mobile',
    title: '660 UC',
    price: 760,
    requires: 'ID аккаунта',
    note: 'Хватает на Royal Pass Plus',
    popular: true,
    keywords: ['пубг', 'пабг', 'uc'],
  },
  {
    id: 'pubg-rp',
    category: 'Games',
    subcategory: 'PUBG Mobile',
    title: 'Royal Pass A1',
    price: 890,
    requires: 'ID аккаунта',
    note: 'Обычный или Plus — уточним в переписке',
    keywords: ['пубг', 'пабг', 'роял пасс', 'боевой пропуск', 'rp'],
  },

  // ——— Games / Standoff 2 ———
  {
    id: 'standoff-gold-500',
    category: 'Games',
    subcategory: 'Standoff 2',
    title: '500 золота',
    price: 420,
    requires: 'Ник и ID',
    keywords: ['стандофф', 'стандов', 'gold'],
  },
  {
    id: 'standoff-gold-1200',
    category: 'Games',
    subcategory: 'Standoff 2',
    title: '1200 золота',
    price: 950,
    requires: 'Ник и ID',
    popular: true,
    keywords: ['стандофф', 'стандов', 'gold'],
  },
  {
    id: 'standoff-pass',
    category: 'Games',
    subcategory: 'Standoff 2',
    title: 'Боевой пропуск',
    price: 790,
    requires: 'Ник и ID',
    note: 'Текущий сезон',
    keywords: ['стандофф', 'battle pass', 'бп'],
  },

  // ——— Games / Free Fire ———
  {
    id: 'ff-520',
    category: 'Games',
    subcategory: 'Free Fire',
    title: '520 алмазов',
    price: 540,
    requires: 'ID аккаунта',
    popular: true,
    keywords: ['фри фаер', 'free fire', 'алмазы', 'diamonds'],
  },
  {
    id: 'ff-1040',
    category: 'Games',
    subcategory: 'Free Fire',
    title: '1040 алмазов',
    price: 1050,
    requires: 'ID аккаунта',
    keywords: ['фри фаер', 'free fire', 'алмазы', 'diamonds'],
  },

  // ——— Games / Roblox ———
  {
    id: 'roblox-800',
    category: 'Games',
    subcategory: 'Roblox',
    title: '800 Robux',
    price: 780,
    requires: 'Ник в игре',
    note: 'Зачисляем через геймпасс',
    popular: true,
    keywords: ['роблокс', 'робуксы', 'robux'],
  },
  {
    id: 'roblox-1700',
    category: 'Games',
    subcategory: 'Roblox',
    title: '1700 Robux',
    price: 1550,
    requires: 'Ник в игре',
    keywords: ['роблокс', 'робуксы', 'robux'],
  },

  // ——— Games / Genshin Impact ———
  {
    id: 'genshin-980',
    category: 'Games',
    subcategory: 'Genshin Impact',
    title: '980 кристаллов',
    price: 1190,
    requires: 'UID и сервер',
    popular: true,
    keywords: ['геншин', 'генша', 'кристаллы', 'примогемы'],
  },
  {
    id: 'genshin-bp',
    category: 'Games',
    subcategory: 'Genshin Impact',
    title: 'Благословение полой луны',
    price: 420,
    requires: 'UID и сервер',
    keywords: ['геншин', 'луна', 'подписка'],
  },

  // ——— Games / Steam ———
  {
    id: 'steam-500',
    category: 'Games',
    subcategory: 'Steam',
    title: 'Пополнение на 500 ₽',
    price: 590,
    requires: 'Логин Steam',
    note: 'Комиссия уже в цене',
    popular: true,
    keywords: ['стим', 'кошелёк', 'баланс'],
  },
  {
    id: 'steam-1000',
    category: 'Games',
    subcategory: 'Steam',
    title: 'Пополнение на 1000 ₽',
    price: 1150,
    requires: 'Логин Steam',
    keywords: ['стим', 'кошелёк', 'баланс'],
  },

  // ——— Other / ChatGPT ———
  {
    id: 'chatgpt-plus-1m',
    category: 'Other',
    subcategory: 'ChatGPT',
    title: 'Plus на 1 месяц',
    price: 1450,
    requires: 'Email от аккаунта',
    note: 'Официальная подписка OpenAI',
    popular: true,
    keywords: ['гпт', 'chat gpt', 'openai', 'плюс', 'подписка'],
  },
  {
    id: 'chatgpt-plus-3m',
    category: 'Other',
    subcategory: 'ChatGPT',
    title: 'Plus на 3 месяца',
    price: 3990,
    requires: 'Email от аккаунта',
    note: 'Выгоднее, чем платить каждый месяц',
    popular: true,
    keywords: ['гпт', 'chat gpt', 'openai', 'плюс', 'подписка'],
  },
  {
    id: 'chatgpt-team',
    category: 'Other',
    subcategory: 'ChatGPT',
    title: 'Team на 1 месяц',
    price: 2890,
    requires: 'Email от аккаунта',
    note: 'Для команды от 2 человек',
    keywords: ['гпт', 'chat gpt', 'openai', 'team', 'команда'],
  },

  // ——— Other / TikTok ———
  {
    id: 'tiktok-coins-66',
    category: 'Other',
    subcategory: 'TikTok',
    title: '66 монет',
    price: 190,
    requires: 'Ссылка на профиль',
    keywords: ['тикток', 'тик ток', 'монеты', 'coins', 'live'],
  },
  {
    id: 'tiktok-coins-330',
    category: 'Other',
    subcategory: 'TikTok',
    title: '330 монет',
    price: 890,
    requires: 'Ссылка на профиль',
    popular: true,
    keywords: ['тикток', 'тик ток', 'монеты', 'coins', 'live'],
  },
  {
    id: 'tiktok-promo',
    category: 'Other',
    subcategory: 'TikTok',
    title: 'Промо для видео',
    price: 750,
    requires: 'Ссылка на видео',
    note: 'Продвижение в рекомендации',
    keywords: ['тикток', 'тик ток', 'промо', 'продвижение', 'рекомендации'],
  },

  // ——— Other / Telegram ———
  {
    id: 'tg-premium-3',
    category: 'Other',
    subcategory: 'Telegram',
    title: 'Premium на 3 месяца',
    price: 990,
    requires: 'Ник получателя',
    popular: true,
    keywords: ['телеграм', 'премиум', 'premium'],
  },
  {
    id: 'tg-stars-500',
    category: 'Other',
    subcategory: 'Telegram',
    title: '500 звёзд',
    price: 850,
    requires: 'Ник получателя',
    keywords: ['телеграм', 'звезды', 'stars'],
  },

  // ——— Other / Discord ———
  {
    id: 'discord-nitro-1m',
    category: 'Other',
    subcategory: 'Discord',
    title: 'Nitro на 1 месяц',
    price: 590,
    requires: 'Ссылка на профиль',
    popular: true,
    keywords: ['дискорд', 'нитро', 'nitro', 'подписка'],
  },
  {
    id: 'discord-nitro-1y',
    category: 'Other',
    subcategory: 'Discord',
    title: 'Nitro на 1 год',
    price: 5490,
    requires: 'Ссылка на профиль',
    keywords: ['дискорд', 'нитро', 'nitro', 'подписка'],
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
  'Clash Royale',
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
