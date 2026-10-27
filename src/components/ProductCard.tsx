'use client'

import { useState } from 'react'
import type { Product, PurchaseOption } from '../types'
import { buyUrl } from '../helpers/telegram'
import { formatOptionPrice, sortedOptions } from '../helpers/currency'
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

/** Карточка товара. Если способов покупки несколько — покупатель выбирает один. */
export default function ProductCard({ product, badge }: Props) {
  const { currency } = useCurrency()
  const options = sortedOptions(product, currency) // от дешёвого к дорогому
  const multi = options.length > 1

  // null = покупатель ещё не выбирал → по умолчанию самый дешёвый способ
  const [chosen, setChosen] = useState<PurchaseOption | null>(null)
  const selected = chosen ?? options[0]

  return (
    <article className={multi ? 'product card product--variants' : 'product card'}>
      <div className="product__thumb" aria-hidden="true">
        <span className="product__initials">{initialsOf(product.subcategory)}</span>
        {badge ? <span className="product__badge">{badge}</span> : null}
      </div>

      <div className="product__body">
        <span className="tag">{product.subcategory}</span>
        <h3 className="product__title">{product.title}</h3>
        {product.note ? <p className="product__note">{product.note}</p> : null}

        {multi ? (
          <fieldset className="product__options">
            <legend className="product__legend">Способ покупки</legend>
            {options.map((option) => (
              <label
                key={option.label}
                className={option === selected ? 'option option--active' : 'option'}
              >
                <input
                  className="option__radio"
                  type="radio"
                  name={`option-${product.id}`}
                  checked={option === selected}
                  onChange={() => setChosen(option)}
                />
                <span className="option__text">
                  <span className="option__label">{option.label}</span>
                  {option.note ? (
                    <span className="option__note">{option.note}</span>
                  ) : null}
                </span>
                <span className="option__price">
                  {formatOptionPrice(option, currency)}
                </span>
              </label>
            ))}
          </fieldset>
        ) : null}

        <p className="product__requires">
          Нужно: {selected.requires ?? product.requires}
        </p>
      </div>

      <div className="product__bottom">
        <span className="product__price">{formatOptionPrice(selected, currency)}</span>
        <a
          className="btn btn--primary btn--sm"
          href={buyUrl(product, selected, currency)}
          target="_blank"
          rel="noreferrer"
        >
          Купить
        </a>
      </div>
    </article>
  )
}