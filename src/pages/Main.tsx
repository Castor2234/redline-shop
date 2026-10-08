import { Link } from 'react-router'
import ProductCard from '../components/ProductCard'
import { SHOP } from '../config'
import { PRODUCTS, topPopular } from '../helpers/products'
import { gamesOf } from '../helpers/search'
import { chatUrl } from '../helpers/telegram'
import './Main.css'

/** Сколько товаров показываем в блоке популярного. */
const POPULAR_LIMIT = 5

/** Цифры и факты о магазине — берутся из config.ts. */
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
    title: `${gamesOf(PRODUCTS).length} игр`,
    text: `в каталоге ${PRODUCTS.length} товаров: от мобильных игр до Steam и Telegram.`,
  },
]

const STEPS = [
  {
    title: 'Выбираете товар',
    text: 'В каталоге есть поиск и фильтр по игре — цена и условия видны сразу.',
  },
  {
    title: 'Пишете в Telegram',
    text: 'Кнопка «Купить» открывает диалог с продавцом и уже готовым текстом заказа.',
  },
  {
    title: 'Оплачиваете',
    text: 'Способ оплаты и реквизиты подтверждаем в переписке — без предоплат «наугад».',
  },
  {
    title: 'Получаете заказ',
    text: `Подтверждение приходит в чат. Обычно выдача занимает ${SHOP.deliveryTime}.`,
  },
]

/** Главная страница: о магазине, популярные товары, отзывы. */
export default function Main() {
  const popular = topPopular(PRODUCTS, POPULAR_LIMIT)
  const telegramUrl = chatUrl(SHOP.sellerUsername)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="tag">Донат · гемы · пропуска · пополнения</span>
          <h1>{SHOP.name}</h1>
          <p className="hero__tagline">{SHOP.tagline}</p>
          <p className="hero__meta">
            Выдача {SHOP.deliveryTime} · на связи {SHOP.workingHours} · отзывы в Telegram
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/catalog">
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>О магазине</h2>
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

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Берут чаще всего</h2>
            <Link className="section-link" to="/catalog">
              Весь каталог →
            </Link>
          </div>
          <div className="products">
            {popular.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Как купить</h2>
            <p>Четыре шага — от выбора товара до выдачи.</p>
          </div>
          <ol className="steps">
            {STEPS.map((step, index) => (
              <li className="step card" key={step.title}>
                <span className="step__number">{index + 1}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reviews card">
            <div className="reviews__text">
              <h2>Отзывы покупателей</h2>
              <p>
                Все отзывы — от реальных заказов: публикуем их в открытом
                Telegram-канале, где можно посмотреть историю выдачи и задать
                вопросы другим покупателям.
              </p>
            </div>
            <a
              className="btn btn--primary"
              href={SHOP.reviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Читать отзывы {SHOP.reviewsLabel}
            </a>
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
