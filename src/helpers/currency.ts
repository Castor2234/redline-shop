import type { Product, PurchaseOption } from '../types'

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

/** Цена одного способа покупки в выбранной валюте. */
export function optionPrice(option: PurchaseOption, currency: Currency): number {
  return currency === 'BYN' ? option.priceByn : option.price
}

/** Способы покупки от дешёвого к дорогому (в выбранной валюте). Исходный массив не меняется. */
export function sortedOptions(product: Product, currency: Currency): PurchaseOption[] {
  return [...product.options].sort(
    (a, b) => optionPrice(a, currency) - optionPrice(b, currency),
  )
}

/** Цена товара «от»: самый дешёвый способ покупки. */
export function productPrice(product: Product, currency: Currency): number {
  return Math.min(...product.options.map((option) => optionPrice(option, currency)))
}

/** Число со знаком валюты: «690 ₽» или «25 Br». */
export function formatAmount(amount: number, currency: Currency): string {
  return `${amount.toLocaleString('ru-RU')} ${CURRENCY_SYMBOLS[currency]}`
}

/** Цена способа покупки для показа. */
export function formatOptionPrice(option: PurchaseOption, currency: Currency): string {
  return formatAmount(optionPrice(option, currency), currency)
}