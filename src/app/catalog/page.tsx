import type { Metadata } from 'next'
import Catalog from '@/views/Catalog'

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог игровых товаров и подписок: гемы, пропуска, ChatGPT и другое. Цены в RUB и BYN, заказ в Telegram.',
  alternates: { canonical: '/catalog' },
}

export default function Page() {
  return <Catalog heading="Каталог" intro="Два раздела — Games и Other. Поиск идёт по всем товарам сразу: по названию, игре и ключевым словам." />
}