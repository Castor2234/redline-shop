import type { Product } from '../types'
import { buyUrl, formatPrice } from '../helpers/telegram'
import './ProductCard.css'

type Props = {
  product: Product
  /** Необязательная метка в углу превью: «Хит», «-15%» и т.п. */
  badge?: string
}

/** Первые буквы названия игры — заменяют картинку товара. */
function initialsOf(game: string): string {
  return game
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

/** Карточка товара: используется и на главной, и в каталоге. */
export default function ProductCard({ product, badge }: Props) {
  return (
    <article className="product card">
      <div className="product__thumb" aria-hidden="true">
        <span className="product__initials">{initialsOf(product.game)}</span>
        {badge ? <span className="product__badge">{badge}</span> : null}
      </div>

      <div className="product__body">
        <span className="tag">{product.game}</span>
        <h3 className="product__title">{product.title}</h3>
        {product.note ? <p className="product__note">{product.note}</p> : null}
        <p className="product__requires">Нужно: {product.requires}</p>
      </div>

      <div className="product__bottom">
        <span className="product__price">{formatPrice(product.price)}</span>
        <a
          className="btn btn--primary btn--sm"
          href={buyUrl(product)}
          target="_blank"
          rel="noreferrer"
        >
          Купить
        </a>
      </div>
    </article>
  )
}
