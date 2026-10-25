import type { Product } from '../types'

function normalize(value: string): string {
  return value.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim()
}

// Текст для поиска считается один раз на товар
const haystackCache = new WeakMap<Product, string>()

function getHaystack(product: Product): string {
  let cached = haystackCache.get(product)
  if (cached === undefined) {
    cached = normalize(
      [
        product.subcategory,
        product.title,
        product.category,
        product.note ?? '',
        ...(product.keywords ?? []),
      ].join(' '),
    )
    haystackCache.set(product, cached)
  }
  return cached
}

export function searchProducts(products: Product[], query: string): Product[] {
  const words = normalize(query).split(' ').filter(Boolean)
  if (words.length === 0) return products

  return products.filter((product) => {
    const haystack = getHaystack(product)
    return words.every((word) => haystack.includes(word))
  })
}