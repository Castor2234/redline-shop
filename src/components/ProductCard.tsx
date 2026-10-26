'use client'

import type { Product } from '../types'
import { buyUrl } from '../helpers/telegram'
import { formatPrice } from '../helpers/currency'
import { useCurrency } from './CurrencyProvider'
import './ProductCard.css'

type Props = {
  product: Product
  /** Необязательная метка в углу превью: «Хит» и т.п. */
  badge?: string
}

/** Первые буквы подраздела — заменяют картинку товара. */
function initialsOf(subcategory: string): string {
  return subcategory
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

/** Карточка товара: используется и на главной, и в каталоге. */
export default function ProductCard({ product, badge }: Props) {
  const { currency } = useCurrency()

  return (
    <article className="product card">
      <div className="product__thumb" aria-hidden="true">
        <span className="product__initials">{initialsOf(product.subcategory)}</span>
        {badge ? <span className="product__badge">{badge}</span> : null}
      </div>

      <div className="product__body">
        <span className="tag">{product.subcategory}</span>
        <h3 className="product__title">{product.title}</h3>
        {product.note ? <p className="product__note">{product.note}</p> : null}
        <p className="product__requires">Нужно: {product.requires}</p>
      </div>

      <div className="product__bottom">
        <span className="product__price">{formatPrice(product, currency)}</span>
        <a
          className="btn btn--primary btn--sm"
          href={buyUrl(product, currency)}
          target="_blank"
          rel="noreferrer"
        >
          Купить
        </a>
      </div>
    </article>
  )
}