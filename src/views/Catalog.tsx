import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import ProductCard from '../components/ProductCard'
import type { BigCategory, Product } from '../types'
import { BIG_CATEGORIES, PRODUCTS, subcategoriesOf } from '../helpers/products'
import { searchProducts } from '../helpers/search'
import './Catalog.css'

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
export default function Catalog() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const categoryParam = params.get('category')
  const sectionParam = params.get('section')

  // Большой раздел берётся из ?section=, подраздел — из ?category=
  const section: 'all' | BigCategory =
    sectionParam === 'Games' || sectionParam === 'Other' ? sectionParam : 'all'
  const activeSub = categoryParam

  /** Обновляет URL-параметры фильтра (replace, чтобы не засорять историю). */
  function setFilter(next: { section?: string; category?: string | null }) {
    const merged = new URLSearchParams(params)
    if ('section' in next) {
      if (next.section) merged.set('section', next.section)
      else merged.delete('section')
    }
    if ('category' in next) {
      if (next.category) merged.set('category', next.category)
      else merged.delete('category')
    }
    setParams(merged, { replace: true })
  }

  function resetAll() {
    setQuery('')
    setParams({}, { replace: true })
  }

  // Поиск идёт по ВСЕМ товарам, независимо от фильтров.
  const searched = useMemo(() => searchProducts(PRODUCTS, query), [query])

  // Дальше к выдаче применяются фильтры раздела и подраздела.
  const filtered = useMemo(() => {
    let list = searched
    if (section !== 'all') list = list.filter((p) => p.category === section)
    if (activeSub) list = list.filter((p) => p.subcategory === activeSub)
    return list
  }, [searched, section, activeSub])

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
    const categories =
      section === 'all'
        ? BIG_CATEGORIES.map((c) => c.key)
        : ([section] as BigCategory[])
    return categories.flatMap((key) => subcategoriesOf(PRODUCTS, key))
  }, [section])

  const total = filtered.length
  const filtering = section !== 'all' || activeSub !== null || query.trim() !== ''

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Каталог</h1>
          <p>
            Два раздела — Games и Other. Поиск идёт по всем товарам сразу: по
            названию, игре и ключевым словам.
          </p>
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
              <button
                type="button"
                className={section === 'all' ? 'chip chip--active' : 'chip'}
                onClick={() => setFilter({ section: '', category: null })}
              >
                Все
              </button>
              {BIG_CATEGORIES.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  className={section === category.key ? 'chip chip--active' : 'chip'}
                  onClick={() => setFilter({ section: category.key, category: null })}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="catalog__chips" role="group" aria-label="Подразделы">
              {subChips.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={activeSub === name ? 'chip chip--active' : 'chip'}
                  onClick={() =>
                    activeSub === name
                      ? setFilter({ category: null })
                      : setFilter({ category: name })
                  }
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="catalog__meta">
            <span>
              {total} товаров
              {query ? ` по запросу «${query}»` : ''}
            </span>
            {filtering ? (
              <button type="button" className="catalog__reset" onClick={resetAll}>
                Сбросить фильтры ×
              </button>
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
              <button type="button" className="btn btn--ghost" onClick={resetAll}>
                Показать всё
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}