import { SHOP } from '../config'
import type { Product } from '../types'
import { formatPrice, type Currency } from './currency'

/** Ссылка на диалог в Telegram. */
export function chatUrl(username: string, text?: string): string {
  const user = username.replace(/^@/, '')
  return text
    ? `https://t.me/${user}?text=${encodeURIComponent(text)}`
    : `https://t.me/${user}`
}

/**
 * Ссылка на покупку: открывает переписку с продавцом
 * и подставляет в поле ввода готовое сообщение о товаре.
 * Цена в сообщении показывается в текущей валюте пользователя.
 */
export function buyUrl(product: Product, currency: Currency): string {
  const text =
    `Здравствуйте! Хочу купить: ${product.category === 'Games' ? '' : 'другое — '}` +
    `${product.subcategory} — ${product.title} за ${formatPrice(product, currency)}.\n` +
    `Что нужно: ${product.requires}.`
  return chatUrl(SHOP.sellerUsername, text)
}