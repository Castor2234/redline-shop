'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import GameCard from '../components/GameCard'
import { SHOP } from '../config'
import type { BigCategory } from '../types'
import { BIG_CATEGORIES, PRODUCTS } from '../helpers/products'
import { searchProducts } from '../helpers/search'
import { chatUrl } from '../helpers/telegram'
import { SUBCATEGORIES, catalogUrl, legacyCatalogRedirect } from '../helpers/categories'
import './Catalog.css'

type Props = {
  /** Раздел из URL (/catalog/games → 'Games'). Без него показываются оба. */
  section?: BigCategory
  heading: string
  intro: string
}

/** Каталог: только игры и сервисы. Сами товары — на странице игры. */
export default function Catalog({ section, heading, intro }: Props) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [suggestionModalOpen, setSuggestionModalOpen] = useState(false)
  const [suggestionText, setSuggestionText] = useState('')

  // Старые ссылки /catalog?section=…&category=… → новые пути.
  useEffect(() => {
    if (section) return
    const target = legacyCatalogRedirect(new URLSearchParams(window.location.search))
    if (target) router.replace(target)
  }, [section, router])

  // Игра подходит, если по запросу нашёлся хотя бы один её товар
  // (по названию игры, названию товара или ключевым словам: «гемы», «пропуск»).
  const matched = useMemo(
    () => new Set(searchProducts(PRODUCTS, query).map((p) => p.subcategory)),
    [query],
  )

  const games = useMemo(
    () =>
      SUBCATEGORIES.filter(
        (game) => (!section || game.section === section) && matched.has(game.name),
      ),
    [section, matched],
  )

  const filtering = Boolean(section || query.trim())

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{heading}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className="section catalog">
        <div className="container">
          <div className="catalog__toolbar">
            <label className="catalog__search">
              <span className="visually-hidden">Поиск игры или сервиса</span>
              <input
                className="catalog__input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Найти игру или сервис: Brawl Stars, Clash Royale, ChatGPT…"
                autoComplete="off"
              />
              {query ? (
                <button
                  type="button"
                  className="catalog__clear"
                  onClick={() => setQuery('')}
                  aria-label="Очистить поиск"
                >
                  ×
                </button>
              ) : null}
            </label>

            <div className="catalog__chips" role="group" aria-label="Разделы">
              <Link
                href="/catalog"
                scroll={false}
                className={!section ? 'chip chip--active' : 'chip'}
              >
                Все
              </Link>
              {BIG_CATEGORIES.map((category) => (
                <Link
                  key={category.key}
                  href={catalogUrl(category.key)}
                  scroll={false}
                  className={section === category.key ? 'chip chip--active' : 'chip'}
                >
                  {category.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="catalog__suggest-btn"
              onClick={() => setSuggestionModalOpen(true)}
            >
              Не нашли то, что искали?
            </button>
          </div>

          <div className="catalog__meta">
            <span>
              Найдено: {games.length}
              {query ? ` по запросу «${query}»` : ''}
            </span>
            {filtering ? (
              <Link
                href="/catalog"
                className="catalog__reset"
                onClick={() => setQuery('')}
              >
                Сбросить фильтры ×
              </Link>
            ) : null}
          </div>

          {games.length > 0 ? (
            <div className="pop-grid">
              {games.map((game) => (
                <GameCard key={game.slug} game={game} />
              ))}
            </div>
          ) : (
            <div className="catalog__empty card">
              <h3>Ничего не нашлось</h3>
              <p className="muted">
                Попробуйте другой запрос. Если нужной игры нет в каталоге — напишите
                нам, подберём.
              </p>
              <Link
                href="/catalog"
                className="btn btn--ghost"
                onClick={() => setQuery('')}
              >
                Показать всё
              </Link>
              <a
                className="btn btn--primary"
                href={chatUrl(SHOP.sellerUsername)}
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram
              </a>
            </div>
          )}
        </div>
      </section>

      {suggestionModalOpen && (
        <div className="modal__overlay" onClick={() => setSuggestionModalOpen(false)}>
          <div
            className="modal__card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal__close"
              onClick={() => setSuggestionModalOpen(false)}
              aria-label="Закрыть"
            >
              ×
            </button>
            <h3 className="modal__title">Предложение по каталогу</h3>
            <p className="modal__hint">
              Напишите, какой товар или игру вы хотите видеть в каталоге. Мы подготовим ваше предложение продавцу.
            </p>
            <textarea
              className="modal__textarea"
              value={suggestionText}
              onChange={(e) => setSuggestionText(e.target.value)}
              placeholder="Ваше предложение…"
              rows={4}
            />
            <div className="modal__actions">
              <button
                type="button"
                className="btn btn--ghost modal__cancel"
                onClick={() => setSuggestionModalOpen(false)}
              >
                Отмена
              </button>
              <a
                href={chatUrl(SHOP.sellerUsername, `Предложение по каталогу:\n${suggestionText}`)}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary modal__send"
              >
                Отправить в Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}