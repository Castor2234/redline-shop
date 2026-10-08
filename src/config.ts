export const SHOP = {
  name: 'ReDLine Shop',
  tagline: 'Донат в игры без лишних шагов',

  /** Ник, в который ведут все кнопки с ценой. */
  sellerUsername: 'Mobile_Game_YT1',

  /** Ссылка на канал/чат с отзывами. */
  reviewsUrl: 'https://t.me/redlineshopchat',
  
  /** Сколько времени обычно занимает выдача — показывается на главной. */
  deliveryTime: '5–15 минут',
  workingHours: '10:00 — 02:00 (МСК)',
}

export type Contact = {
  role: string
  username: string
  description: string
}

/** Три контакта для страницы «Контакты». */
export const CONTACTS: Contact[] = [
  {
    role: 'Заказы и оплата',
    username: 'Mobile_Game_YT1',
    description: 'Основной аккаунт. Пишите по любому товару из каталога.',
  },
  {
    role: 'Поддержка',
    username: '???redline_help',
    description: '???Если заказ задерживается, донат не пришёл или нужно изменить данные аккаунта.',
  },
  {
    role: 'Опт и сотрудничество',
    username: '???redline_partner',
    description: '???Крупные объёмы, реселл, реклама и совместные розыгрыши.',
  },
]
