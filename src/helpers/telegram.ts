import { SHOP } from '../config'
import type { Product } from '../types'

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
 */
export function buyUrl(product: Product): string {
  const text =
    `Здравствуйте! Хочу купить: ${product.game} — ${product.title} ` +
    `за ${product.price} ₽.\nЧто нужно: ${product.requires}.`
  return chatUrl(SHOP.sellerUsername, text)
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString('ru-RU')} ₽`
}
