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
    title: 'БОЛЬШЕ ПОДАРКОВ, КУПИТЬ ДОНАТ',
    image: '/assets/brawl_crates.jpg',
    link: 'https://t.me/+B7kDy3rltexiMzFi',
  },
  {
    title: 'Спайк ОК',
    image: '/assets/emojis/spike_ok.png',
    link: 'https://link.brawlstars.com/ru/voucher/da19cd17-68af-4ed9-8671-b974a3a73356',
  },
  {
    title: 'Спящее яйцо',
    image: '/assets/emojis/sleep_egg.png',
    link: 'https://link.brawlstars.com/ru/?action=voucher&code=cc017c48-b904-448d-9fe1-dd494e28bfd2',
  },
  {
    title: 'Взрыв головы',
    image: '/assets/emojis/head_explode.jpg',
    link: 'https://link.brawlstars.com/ru/voucher/e4a3bb44-95fd-48d1-9fe6-378619bf2eb9',
  },
  {
    title: 'Спайк спереди глобуса',
    image: '/assets/emojis/spike_world.jpg',
    link: 'https://link.brawlstars.com/?action=voucher&code=ab9cf7c2-45f8-4012-ad38-dfe8b1747c3b',
  },
  {
    title: 'Клоун',
    image: '/assets/emojis/clown.jpg',
    link: 'https://link.brawlstars.com/?action=voucher&code=b647c71d-41a5-42c4-a10f-8d47952d82f3',
  },
  {
    title: 'Бравл Старс',
    image: '/assets/emojis/brawl_stars.jpg',
    link: 'https://link.brawlstars.com/?action=voucher&code=3484c6d2-9ab5-4eae-878a-4a186fc4e24a',
  },
  {
    title: 'Книга со звездой',
    image: '/assets/emojis/magic_book.jpg',
    link: 'https://link.brawlstars.com/?action=voucher&code=91eead0b-0917-4077-8efe-6b852c7e49a3',
  },
  {
    title: 'Грабитель',
    image: '/assets/emojis/robber.jpg',
    link: 'https://link.brawlstars.com/en/voucher/7bae5a2d-2afa-4e58-8f9b-dab2d987834c/',
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
            {GIFT_EMOJIS.map((emoji, index) => (
              <article
                className={`gift card${index === 0 ? ' gift--golden' : ''}`}
                key={emoji.title}
              >
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