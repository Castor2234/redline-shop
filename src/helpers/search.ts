import type { Product } from '../types'

function normalize(value: string): string {
  return value.toLowerCase().replace(/ё/g, 'е').trim()
}

/**
 * Поиск по названию, игре и списку ключевых слов.
 * Запрос делится на слова — нужно совпадение каждого, порядок не важен.
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const words = normalize(query).split(/\s+/).filter(Boolean)
  if (words.length === 0) return products

  return products.filter((p) => {
    const haystack = normalize(
      [p.game, p.title, p.note ?? '', ...(p.keywords ?? [])].join(' '),
    )
    return words.every((w) => haystack.includes(w))
  })
}

/** Список игр для фильтра-чипов, в порядке появления в каталоге. */
export function gamesOf(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.game))]
}
