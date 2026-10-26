'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SHOP } from '../config'
import { chatUrl } from '../helpers/telegram'
import { CURRENCIES, CURRENCY_LABELS, CURRENCY_SYMBOLS } from '../helpers/currency'
import { useCurrency } from './CurrencyProvider'

type NavItem = {
  to: string
  label: string
  end: boolean
  /** Золотое пульсирующее свечение в шапке. */
  gold?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Главная', end: true },
  { to: '/gifts', label: 'Подарки', end: false, gold: true },
  { to: '/catalog', label: 'Каталог', end: false },
  { to: '/faq', label: 'Вопросы', end: false },
  { to: '/charity', label: 'Благотворительность', end: false },
]

/** Шапка сайта: логотип, навигация, переключатель валюты и кнопка Telegram. */
export default function Header() {
  const pathname = usePathname()
  const { currency, setCurrency } = useCurrency()

  const isActive = (item: NavItem) =>
    item.end
      ? pathname === item.to
      : pathname === item.to || pathname.startsWith(item.to + '/')

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="logo" href="/" aria-label={`${SHOP.name} — на главную`}>
          <img className="logo__icon" src="/assets/rl_icon.webp" alt="" />
          <span className="logo__accent">ReD</span>
          <span>Line Shop</span>
        </Link>

        <nav className="nav" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item)
            return (
              <Link
                key={item.to}
                href={item.to}
                aria-current={active ? 'page' : undefined}
                className={[
                  'nav__link',
                  active ? 'nav__link--active' : '',
                  item.gold ? 'nav__link--gold' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
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
  )
}