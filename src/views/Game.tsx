'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import GameCard from '../components/GameCard'
import ProductCard from '../components/ProductCard'
import { SHOP } from '../config'
import { PRODUCTS, productsOfSubcategory } from '../helpers/products'
import { KINDS } from '../helpers/kinds'
import { searchProducts } from '../helpers/search'
import { chatUrl } from '../helpers/telegram'
import { SUBCATEGORIES, catalogUrl, type SubcategoryInfo } from '../helpers/categories'
import './Catalog.css'
import './Game.css'

/** Страница одной игры: поиск только по её товарам, товары сгруппированы по типам. */
export default function Game({ game }: { game: SubcategoryInfo }) {
  const [query, setQuery] = useState('')

  const products = useMemo(() => productsOfSubcategory(PRODUCTS, game.name), [game])
  const results = useMemo(() => searchProducts(products, query), [products, query])

  // Группы: валюта / пропуски / подписки… в порядке из kinds.ts, пустые скрываем.
  const groups = useMemo(
    () =>
      KINDS.map((kind) => ({
        ...kind,
        items: results.filter((product) => product.kind === kind.key),
      })).filter((group) => group.items.length > 0),
    [results],
  )

  // Перелинковка: другие игры того же раздела.
  const related = useMemo(
    () =>
      SUBCATEGORIES.filter(
        (g) => g.section === game.section && g.slug !== game.slug,
      ).slice(0, 4),
    [game],
  )

  return (
    <>
      <section className="page-head">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <ol>
              <li>
                <Link href="/catalog">Каталог</Link>
              </li>
              <li>
                <Link href={catalogUrl(game.section)}>{game.section}</Link>
              </li>
              <li aria-current="page">{game.name}</li>
            </ol>
          </nav>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
        </div>
      </section>

      <section className="section catalog">
        <div className="container">
          <div className="catalog__toolbar">
            <label className="catalog__search">
              <span className="visually-hidden">Поиск по товарам {game.name}</span>
              <input
                className="catalog__input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Поиск в ${game.name}: гемы, пропуск, подписка…`}
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

            {groups.length > 1 ? (
              <div className="catalog__chips" role="group" aria-label="Группы товаров">
                {groups.map((group) => (
                  <a key={group.key} href={`#kind-${group.key}`} className="chip">
                    {group.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="catalog__meta">
            <span>
              {query
                ? `Найдено ${results.length} из ${products.length}`
                : `Всего товаров: ${products.length}`}
            </span>
            {query ? (
              <button type="button" className="catalog__reset" onClick={() => setQuery('')}>
                Сбросить поиск ×
              </button>
            ) : null}
          </div>

          {groups.length > 0 ? (
            groups.map((group) => (
              <div className="catalog__group" id={`kind-${group.key}`} key={group.key}>
                <div className="catalog__group-head">
                  <h2>{group.label}</h2>
                  <span className="muted">{group.items.length} поз.</span>
                </div>
                <div className="products">
                  {group.items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      badge={product.popular ? 'Хит' : undefined}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="catalog__empty card">
              <h3>Ничего не нашлось</h3>
              <p className="muted">Попробуйте другой запрос или сбросьте поиск.</p>
              <button type="button" className="btn btn--ghost" onClick={() => setQuery('')}>
                Показать все товары
              </button>
            </div>
          )}

          <div className="game__cta card">
            <div>
              <h3>Нет нужного товара для {game.name}?</h3>
              <p className="muted">Напишите в Telegram — подберём под ваш запрос.</p>
            </div>
            <a
              className="btn btn--primary"
              href={chatUrl(
                SHOP.sellerUsername,
                `Здравствуйте! Интересует ${game.name}, но не нашёл нужный товар.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>
          </div>

          {related.length > 0 ? (
            <div className="game__related">
              <div className="section-title">
                <h2>Другие игры</h2>
                <Link className="section-link" href="/catalog">
                  Весь каталог →
                </Link>
              </div>
              <div className="pop-grid">
                {related.map((g) => (
                  <GameCard key={g.slug} game={g} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}