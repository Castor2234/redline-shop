import type { Metadata } from 'next'
import Catalog from '@/views/Catalog'

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог игр и сервисов: Brawl Stars, Clash Royale, ChatGPT, TikTok и другие. Внутри все товары по игре или сервису и поиск по ним.',
  alternates: { canonical: '/catalog' },
}

export default function Page() {
  return <Catalog heading="Каталог" intro="Выберите игру или сервис. Внутри — все товары и поиск по ним." />
}