import './Gifts.css'

type GiftEmoji = {
  /** Название эмодзи — подпись на карточке и alt у картинки. */
  title: string
  /** Картинка эмодзи из public/assets/emojis. */
  image: string
  /** Ссылка-вашер на бесплатный эмодзи в Brawl Stars. */
  link: string
  /** Короткое пояснение под названием. */
  note?: string
}

/**
 * Бесплатные эмодзи Brawl Stars. Обновлять список можно прямо здесь:
 * положите картинку в public/assets/emojis и добавьте объект в массив.
 */
const GIFT_EMOJIS: GiftEmoji[] = [
  {
    title: 'Spike OK',
    image: '/assets/emojis/spike_ok.png',
    link: 'https://link.brawlstars.com/ru/voucher/da19cd17-68af-4ed9-8671-b974a3a73356/',
  },
  {
    title: 'Sleep Egg',
    image: '/assets/emojis/sleep_egg.png',
    link: 'https://link.brawlstars.com/ru/?action=voucher&code=cc017c48-b904-448d-9fe1-dd494e28bfd2',
  },
]

/** Подарки: бесплатные эмодзи для Brawl Stars — картинка и ссылка рядом. */
export default function Gifts() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Подарки</h1>
          <p>
            Бесплатные эмодзи для Brawl Stars — нажмите на ссылку, чтобы
            забрать подарок прямо в игре.
          </p>
        </div>
      </section>

      <section className="section gifts">
        <div className="container">
          <div className="gifts__grid">
            {GIFT_EMOJIS.map((emoji) => (
              <article className="gift card" key={emoji.title}>
                <img
                  className="gift__image"
                  src={emoji.image}
                  alt={emoji.title}
                />
                <div className="gift__body">
                  <div>
                    <h3 className="gift__title">{emoji.title}</h3>
                    {emoji.note ? (
                      <p className="gift__note">{emoji.note}</p>
                    ) : null}
                  </div>
                  <a
                    className="btn btn--primary btn--sm"
                    href={emoji.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Забрать эмодзи
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}