/**
 * Все данные, которые нужно поменять под себя, собраны здесь.
 * Ники пишутся без «@».
 */

export const SHOP = {
  name: 'ReDLine Shop',
  tagline: 'Донат в игры без лишних шагов',

  /** Ник, в который ведут все кнопки с ценой. */
  sellerUsername: 'Mobile_Game_YT1',
  sellerUrl: 'https://t.me/Mobile_Game_YT1',

  /** Ссылка на канал/чат с отзывами. */
  reviewsUrl: 'https://t.me/redlineshopchat',
  reviewsLabel: '@redlineshopchat',

  /** Сколько времени обычно занимает выдача — показывается на главной. */
  deliveryTime: '5–15 минут',
  workingHours: '9:00 — 00:00 (МСК)',
  since: 2022,
}

export type Contact = {
  role: string
  username: string
  description: string
}

/** Контакты — показываются на странице «Вопросы». https://www.youtube.com/@Mobile_Games*/
export const CONTACTS: Contact[] = [
  {
    role: 'Заказы и оплата',
    username: 'Mobile_Game_YT1',
    description: 'Основной аккаунт. Пишите по любому товару из каталога.',
  },
  {
    role: 'Телеграм канал',
    username: 'mobilegemss',
    description: 'Телеграм канал с информацией и акциями.',
  },
]
