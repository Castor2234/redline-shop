import type { Metadata } from 'next'
import FAQ from '@/views/Faq'

export const metadata: Metadata = {
  title: 'Вопросы и ответы',
  description: 'Как заказать, оплатить и получить донат: сроки выдачи, гарантии, возврат.',
  alternates: { canonical: '/faq' },
}
export default function Page() { return <FAQ /> }