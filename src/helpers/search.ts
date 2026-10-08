import type { BigCategory, Product } from '../types'

function normalize(value: string): string {
  return value.toLowerCase().replace(/ё/g, 'е').trim()
}

/**
 * Поиск по всем товарам: подраздел, название, большой раздел и ключевые слова.
 * Запрос делится на слова — нужно совпадение каждого, порядок не важен.
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const words = normalize(query).split(/\s+/).filter(Boolean)
  if (words.length === 0) return products

  return products.filter((product) => {
    const haystack = normalize(
      [
        product.subcategory,
        product.title,
        product.category,
        product.note ?? '',
        ...(product.keywords ?? []),
      ].join(' '),
    )
    return words.every((word) => haystack.includes(word))
  })
}

/** Большая категория по названию подраздела (для ссылок ?category=…). */
export function categoryOfSubcategory(
  products: Product[],
  subcategory: string,
): BigCategory | undefined {
  return products.find((product) => product.subcategory === subcategory)?.category
}