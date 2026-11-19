import type { Metadata } from 'next'
import Gifts from '@/views/Gifts'

export const metadata: Metadata = {
  title: 'Бесплатные эмодзи Brawl Stars',
  description: 'Ссылки-ваучеры на бесплатные эмодзи для Brawl Stars.',
  alternates: { canonical: '/gifts' },
}
export default function Page() { return <Gifts /> }