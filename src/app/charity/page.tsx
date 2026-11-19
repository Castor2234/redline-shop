import type { Metadata } from 'next'
import Charity from '@/views/Charity'

export const metadata: Metadata = {
  title: 'Благотворительность',
  description: 'Итоги благотворительной акции ReDLine Shop: суммы, переводы и ссылки.',
  alternates: { canonical: '/charity' },
}
export default function Page() { return <Charity /> }