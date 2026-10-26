'use client'

import Link from 'next/link'
import { SHOP } from '../config'
import {
  BIG_CATEGORIES,
  PRODUCTS,
  productsOfSubcategory,
  productsWord,
  popularSubcategories,
} from '../helpers/products'
import { chatUrl } from '../helpers/telegram'
import { playCroak } from '../helpers/sound'
import { formatAmount, productPrice } from '../helpers/currency'
import { catalogUrl } from '../helpers/categories'
import { useCurrency } from '../components/CurrencyProvider'
import './Main.css'

/** Сколько популярных категорий показываем на главной. */
const POPULAR_LIMIT = 6

/** Короткие факты о магазине — берутся из config.ts и каталога. */
const FEATURES = [
  {
    title: SHOP.deliveryTime,
    text: 'Обычное время выдачи заказа после оплаты.',
  },
  {
    title: `с ${SHOP.since} года`,
    text: 'Работаем без перерывов: постоянные клиенты и повторные заказы.',
  },
  {
    title: SHOP.workingHours,
    text: 'На связи в Telegram — отвечаем в порядке очереди.',
  },
  {
    title: `${PRODUCTS.length} ${productsWord(PRODUCTS.length)}`,
    text: 'Два раздела — Games и Other: от гемов и пропусков до подписок.',
  },
]

/** Главная: короткая инфо о магазине и популярные категории. */
export default function Main() {
  const { currency } = useCurrency()
  const telegramUrl = chatUrl(SHOP.sellerUsername)
  const popular = popularSubcategories(PRODUCTS, POPULAR_LIMIT)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="tag tag--brand">Донат · гемы · пропуска · подписки</span>
          <h1>
            <span className="hero__accent">ReD</span>Line Shop
          </h1>
          <p className="hero__tagline">{SHOP.tagline}</p>
          <p className="hero__meta">
            Выдача {SHOP.deliveryTime} · на связи {SHOP.workingHours} · отзывы в
            Telegram
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/catalog">
              Смотреть каталог
            </Link>
            <a
              className="btn btn--ghost"
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Написать продавцу
            </a>
          </div>

          {/* Лягушка-водяной знак: по центру контейнера, текст поверх неё. */}
          <button
            type="button"
            className="hero__frog"
            aria-label="Квакнуть"
            title="Квак!"
            onClick={playCroak}
          >
            <img src="/assets/frog.webp" alt="" draggable={false} />
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Популярные категории</h2>
            <Link className="section-link" href="/catalog">
              Весь каталог →
            </Link>
          </div>

          <div className="pop-grid">
            {popular.map((subcategory) => {
              const products = productsOfSubcategory(PRODUCTS, subcategory)
              const minPrice = Math.min(
                ...products.map((product) => productPrice(product, currency)),
              )
              const section = products[0]?.category

              return (
                <Link
                  className="pop-card card"
                  key={subcategory}
                  href={catalogUrl(section, subcategory)}
                >
                  <span className="tag">
                    {BIG_CATEGORIES.find((c) => c.key === section)?.label ?? ''}
                  </span>
                  <span className="pop-card__name">{subcategory}</span>
                  <span className="pop-card__meta">
                    {products.length} {productsWord(products.length)} · от{' '}
                    {formatAmount(minPrice, currency)}
                  </span>
                  <span className="pop-card__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>О магазине</h2>
            <p>Без корзины и регистрации — заказ оформляется в переписке.</p>
          </div>
          <div className="features">
            {FEATURES.map((feature) => (
              <div className="feature card" key={feature.title}>
                <span className="feature__title">{feature.title}</span>
                <p className="feature__text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>Не нашли нужный товар?</h2>
            <p className="cta__text">
              Напишите в Telegram — подберём позицию под вашу игру и бюджет.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </>
  )
}