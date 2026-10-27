import type { ProductKind } from '../types'

/** Порядок и названия групп на странице игры. Нужна новая группа — добавьте сюда и в ProductKind. */
export const KINDS: { key: ProductKind; label: string }[] = [
  { key: 'currency', label: 'Валюта' },
  { key: 'pass', label: 'Пропуски' },
  { key: 'subscription', label: 'Подписки' },
  { key: 'other', label: 'Другое' },
]