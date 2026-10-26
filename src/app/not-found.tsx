import Link from 'next/link'

export const metadata = { title: 'Страница не найдена', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="container">
        <h1>404</h1>
        <p>Такой страницы нет.</p>
        <Link className="btn btn--primary" href="/catalog">В каталог</Link>
      </div>
    </section>
  )
}