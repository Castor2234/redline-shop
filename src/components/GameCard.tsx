'use client'

import Link from 'next/link'
import { catalogUrl, type SubcategoryInfo } from '../helpers/categories'
import { formatAmount, productPrice } from '../helpers/currency'
import { PRODUCTS, productsOfSubcategory, productsWord } from '../helpers/products'
import { useCurrency } from './CurrencyProvider'
import './GameCard.css'

/** Плитка игры/сервиса: название, раздел, число товаров и минимальная цена. */
export default function GameCard({ game }: { game: SubcategoryInfo }) {
  const { currency } = useCurrency()
  const products = productsOfSubcategory(PRODUCTS, game.name)
  const minPrice = Math.min(...products.map((p) => productPrice(p, currency)))

  return (
    <Link className="pop-card card" href={catalogUrl(game.section, game.name)}>
      <span className="tag">{game.section}</span>
      <span className="pop-card__name">{game.name}</span>
      <span className="pop-card__meta">
        {products.length} {productsWord(products.length)} · от{' '}
        {formatAmount(minPrice, currency)}
      </span>
      <span className="pop-card__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}