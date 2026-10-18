import { Link, NavLink, Outlet } from 'react-router'
import { SHOP } from '../config'
import { chatUrl } from '../helpers/telegram'
import { CURRENCIES, CURRENCY_LABELS, CURRENCY_SYMBOLS } from '../helpers/currency'
import { useCurrency } from './CurrencyProvider'
import './Layout.css'

const NAV_ITEMS = [
  { to: '/', label: 'Главная', end: true },
  { to: '/catalog', label: 'Каталог', end: false },
  { to: '/faq', label: 'Вопросы', end: false },
]

/** Общая оболочка сайта: шапка с навигацией, контент и подвал. */
export default function Layout() {
  const { currency, setCurrency } = useCurrency()

  return (
    <>
      {/* Фон раскладки: pattern из assets за контентом всех страниц. */}
      <div className="layout__bg" aria-hidden="true" />

      <header className="header">
        <div className="container header__inner">
          <Link className="logo" to="/" aria-label={`${SHOP.name} — на главную`}>
            <img className="logo__icon" src="/assets/rl_icon.jpg" alt="" />
            <span className="logo__accent">ReD</span>
            <span>Line Shop</span>
          </Link>

          <nav className="nav" aria-label="Основная навигация">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? 'nav__link nav__link--active' : 'nav__link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="currency" role="group" aria-label="Валюта цен">
            {CURRENCIES.map((code) => (
              <button
                key={code}
                type="button"
                className={
                  code === currency
                    ? 'currency__btn currency__btn--active'
                    : 'currency__btn'
                }
                aria-pressed={code === currency}
                title={CURRENCY_LABELS[code]}
                onClick={() => setCurrency(code)}
              >
                {CURRENCY_SYMBOLS[code]}
              </button>
            ))}
          </div>

          <a
            className="btn btn--primary btn--sm header__cta"
            href={chatUrl(SHOP.sellerUsername)}
            target="_blank"
            rel="noreferrer"
          >
            Написать в Telegram
          </a>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__col footer__col--wide">
            <span className="logo">
              <span className="logo__accent">ReD</span>
              <span>Line Shop</span>
            </span>
            <p className="footer__text">{SHOP.tagline}</p>
            <p className="footer__text">
              Выдача {SHOP.deliveryTime} · на связи {SHOP.workingHours}
            </p>
          </div>
          
          <div className="footer__col">
            <h3 className="footer__title">Покупка</h3>
            <p className="footer__text">
              По поводу покупки любого товара писать Артуру.
            </p>
            <a
              className="footer__link footer__link--accent"
              href={SHOP.sellerUrl}
              target="_blank"
              rel="noreferrer"
            >
              {SHOP.sellerUsername}
            </a>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Отзывы</h3>
            <p className="footer__text">
              Реальные отзывы покупателей — в открытом Telegram-канале.
            </p>
            <a
              className="footer__link footer__link--accent"
              href={SHOP.reviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {SHOP.reviewsLabel}
            </a>
          </div>
        </div>

        <div className="container footer__bottom">
          © {new Date().getFullYear()} {SHOP.name}.
        </div>
      </footer>
    </>
  )
}