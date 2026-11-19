import { SHOP } from '../config'
import type { Product, PurchaseOption } from '../types'
import { formatOptionPrice, type Currency } from './currency'

/** Ссылка на диалог в Telegram. */
export function chatUrl(username: string, text?: string): string {
  const user = username.replace(/^@/, '')
  return text
    ? `https://t.me/${user}?text=${encodeURIComponent(text)}`
    : `https://t.me/${user}`
}

/**
 * Ссылка на покупку: открывает переписку с продавцом и подставляет готовое
 * сообщение — с выбранным способом покупки и ценой в валюте пользователя.
 */
export function buyUrl(
  product: Product,
  option: PurchaseOption,
  currency: Currency,
): string {
  const way = option.label ? ` (${option.label})` : ''
  const text =
    `Здравствуйте! Хочу купить: ${product.category === 'Games' ? '' : 'другое — '}` +
    `${product.subcategory} — ${product.title}${way} за ${formatOptionPrice(option, currency)}.\n` +
    `Что нужно: ${option.requires ?? product.requires}.`
  return chatUrl(SHOP.sellerUsername, text)
}