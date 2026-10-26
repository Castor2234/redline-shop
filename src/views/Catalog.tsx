'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ProductCard from '../components/ProductCard'
import type { BigCategory, Product } from '../types'
import { BIG_CATEGORIES, PRODUCTS, subcategoriesOf } from '../helpers/products'
import { searchProducts } from '../helpers/search'
import {
  catalogUrl,
  legacyCatalogRedirect,
  subcategoryByName,
} from '../helpers/categories'
import './Catalog.css'

type Props = {
  /** Большой раздел из URL (/catalog/games → 'Games'). Без него показываются оба. */
  section?: BigCategory
  /** Имя подраздела из URL (/catalog/games/brawl-stars → 'Brawl Stars'). */
  subcategory?: string
  /** Заголовок <h1> страницы. */
  heading: string
  /** Текст под заголовком. */
  intro: string
}

type ProductGroup = {
  subcategory: string
  category: BigCategory
  items: Product[]
}

/** Собирает отфильтрованные товары в группы по подразделам. */
function groupBySubcategory(products: Product[]): ProductGroup[] {
  const groups: ProductGroup[] = []
  const index = new Map<string, ProductGroup>()

  for (const product of products) {
    let group = index.get(product.subcategory)
    if (!group) {
      group = { subcategory: product.subcategory, category: product.category, items: [] }
      index.set(product.subcategory, group)
      groups.push(group)
    }
    group.items.push(product)
  }

  return groups
}

/** Каталог: поиск по всем товарам, разделы Games/Other и подразделы. */
export default function Catalog({ section, subcategory, heading, intro }: Props) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  // Старые ссылки /catalog?section=…&category=… → новые пути.
  // Работает только на самой /catalog, где нет ни раздела, ни подраздела.
  useEffect(() => {
    if (section || subcategory) return
    const target = legacyCatalogRedirect(new URLSearchParams(window.location.search))
    if (target) router.replace(target)
  }, [section, subcategory, router])

  // Поиск идёт по ВСЕМ товарам, независимо от фильтров.
  const searched = useMemo(() => searchProducts(PRODUCTS, query), [query])

  // Дальше к выдаче применяются фильтры раздела и подраздела из URL.
  const filtered = useMemo(() => {
    let list = searched
    if (section) list = list.filter((p) => p.category === section)
    if (subcategory) list = list.filter((p) => p.subcategory === subcategory)
    return list
  }, [searched, section, subcategory])

  // Порядок групп: как в каталоге (Games, затем Other).
  const groups = useMemo(() => {
    const order = [
      ...subcategoriesOf(PRODUCTS, 'Games'),
      ...subcategoriesOf(PRODUCTS, 'Other'),
    ]
    return groupBySubcategory(filtered).sort(
      (a, b) => order.indexOf(a.subcategory) - order.indexOf(b.subcategory),
    )
  }, [filtered])

  // Чипы подразделов — для текущего большого раздела.
  const subChips = useMemo(() => {
    const keys = section ? [section] : BIG_CATEGORIES.map((c) => c.key)
    return keys.flatMap((key) => subcategoriesOf(PRODUCTS, key))
  }, [section])

  const total = filtered.length
  const filtering = Boolean(section || subcategory || query.trim())

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
              <span className="visually-hidden">Поиск по каталогу</span>
              <input
                className="catalog__input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Например: гемы, ChatGPT, пропуск…"
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
                  className={
                    section === category.key && !subcategory
                      ? 'chip chip--active'
                      : 'chip'
                  }
                >
                  {category.label}
                </Link>
              ))}
            </div>

            <div className="catalog__chips" role="group" aria-label="Подразделы">
              {subChips.map((name) => {
                const active = subcategory === name
                const info = subcategoryByName(name)
                // Повторный клик по активному чипу снимает подраздел.
                const href = active
                  ? catalogUrl(section)
                  : catalogUrl(info?.section, name)

                return (
                  <Link
                    key={name}
                    href={href}
                    scroll={false}
                    className={active ? 'chip chip--active' : 'chip'}
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="catalog__meta">
            <span>
              {total} товаров
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

          {groups.length > 0 ? (
            groups.map((group) => (
              <div className="catalog__group" key={group.subcategory}>
                <div className="catalog__group-head">
                  <h2>{group.subcategory}</h2>
                  <span className="tag">{group.category}</span>
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
              <p className="muted">Попробуйте другой запрос или сбросьте фильтры.</p>
              <Link
                href="/catalog"
                className="btn btn--ghost"
                onClick={() => setQuery('')}
              >
                Показать всё
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}