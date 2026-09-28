import { Link, NavLink, Outlet } from 'react-router'
import { CONTACTS, SHOP } from '../config'
import { chatUrl } from '../helpers/telegram'
import './Layout.css'

const NAV_ITEMS = [
  { to: '/', label: 'Главная', end: true },
  { to: '/catalog', label: 'Каталог', end: false },
  { to: '/faq', label: 'Вопросы', end: false },
]

/** Общая оболочка сайта: шапка с навигацией и подвал со связью. */
export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link className="logo" to="/" aria-label={`${SHOP.name} — на главную`}>
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
            <h3 className="footer__title">Связь</h3>
            <ul className="footer__list">
              {CONTACTS.map((contact) => (
                <li key={contact.username}>
                  <a
                    className="footer__link"
                    href={chatUrl(contact.username)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.role}
                    <span>@{contact.username}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Отзывы</h3>
            <p className="footer__text">
              Реальные отзывы покупателей публикуем в открытом Telegram-канале.
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
          © {new Date().getFullYear()} {SHOP.name}. Сайт работает как витрина: заказы
          оформляются в Telegram.
        </div>
      </footer>
    </>
  )
}