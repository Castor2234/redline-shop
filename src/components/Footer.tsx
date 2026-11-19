import { SHOP } from '../config'

const YEAR = new Date().getFullYear()

/** Подвал сайта. Год считается при сборке — пересобирайте сайт после Нового года. */
export default function Footer() {
  return (
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
          <h3 className="footer__title">Покупка</h3>
          <p className="footer__text">
            По поводу покупки любого товара писать Артуру.
          </p>
          <a
            className="footer__link footer__link--accent"
            href={SHOP.sellerUrl}
            target="_blank"
            rel="noreferrer"
          >
            {SHOP.sellerUsername}
          </a>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Отзывы</h3>
          <p className="footer__text">
            Реальные отзывы покупателей — в открытом Telegram-канале.
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
        © {YEAR} {SHOP.name}.
      </div>
    </footer>
  )
}