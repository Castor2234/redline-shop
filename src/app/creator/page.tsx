import type { Metadata } from 'next'
import Creator from '@/views/Creator'

export const metadata: Metadata = {
  title: 'Создатель',
  description: 'История становления ReDLine Shop.',
  alternates: { canonical: '/creator' },
}
export default function Page() { return <Creator /> }
