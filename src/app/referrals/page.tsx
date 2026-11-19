import type { Metadata } from 'next'
import Referrals from '@/views/Referrals'

export const metadata: Metadata = {
  title: 'Реферальная программа',
  description:
    'Приводи друзей в ReDLine Shop и получай процент от их донатов. Условия участия и остальное.',
  alternates: { canonical: '/referrals' },
}
export default function Page() { return <Referrals /> }
