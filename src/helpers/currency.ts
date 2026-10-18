import type { Product } from '../types'

/**
 * Валюта отображения цен. Цены обоих номиналов хранятся в каталоге
 * вручную: price — в рублях (RUB), priceByn — в белорусских (BYN).
 */
export type Currency = 'RUB' | 'BYN'

/** Порядок кнопок в переключателе валюты. */
export const CURRENCIES: Currency[] = ['RUB', 'BYN']

/** Символ валюты рядом с ценой: «690 ₽» / «25 Br». */
export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  RUB: '₽',
  BYN: 'Br',
}

/** Полные названия — для подсказок и скринридеров. */
export const CURRENCY_LABELS: Record<Currency, string> = {
  RUB: 'Российский рубль (₽)',
  BYN: 'Белорусский рубль (Br)',
}

/** Цена товара в выбранной валюте — берётся из соответствующего поля каталога. */
export function productPrice(product: Product, currency: Currency): number {
  return currency === 'BYN' ? product.priceByn : product.price
}

/** Число со знаком валюты: «690 ₽» или «25 Br». */
export function formatAmount(amount: number, currency: Currency): string {
  return `${amount.toLocaleString('ru-RU')} ${CURRENCY_SYMBOLS[currency]}`
}

/** Цена товара для показа: «690 ₽» или «25 Br». */
export function formatPrice(product: Product, currency: Currency): string {
  return formatAmount(productPrice(product, currency), currency)
}