import { CONTACTS, SHOP } from '../config'
import { chatUrl } from '../helpers/telegram'
import './Faq.css'

/** Частые вопросы: обновлять тексты можно прямо здесь. */
const QUESTIONS: { q: string; a: string }[] = [
  {
    q: 'Как оформить заказ?',
    a: 'Выберите товар в каталоге и нажмите «Купить» — откроется Telegram с уже готовым текстом заказа. Или просто напишите нам в Telegram: назовите товар и что от вас нужно (ID, тег, ник).',
  },
  {
    q: `Как быстро приходит заказ?`,
    a: `Обычно выдача занимает ${SHOP.deliveryTime} после оплаты. В часы пик или при задержке со стороны платформы может дольше.`,
  },
  {
    q: 'Как происходит оплата?',
    a: 'Оплата без проблем с России, Беларуси и любых других стран! Перевод с карты на карту, СБП, ЕРИП, Криптовалютой, возможность оплатить частями на несколько месяцев.',
  },
  {
    q: 'Почему такие дорогие цены?',
    a: 'Цены в рублях в игре давно неактуальны — их не обновляли более трёх лет. За это время выросли курсы валют, комиссии и стоимость пополнений. \n В цену входят сам донат, банковские и платёжные комиссии, налоги и другие расходы. Все пополнения проходят официальными способами, безопасно для аккаунта. \n Я работаю более 4 лет и гарантирую надёжный сервис, быстрое выполнение и поддержку. Поэтому итоговая цена может отличаться от старой цены, указанной в игре.',
  },
  {
    q: 'Что нужно от меня для заказа?',
    a: 'Всё написано в карточке товара в строке «Нужно:» — обычно это ID аккаунта, тег игрока, ник или почта.',
  },
  {
    q: 'Гарантии и что если товар не пришёл?',
    a: 'Работаем более 4 лет — с мая 2022 года! Более 10 000 заказов, YouTube-канал — 50 000 подписчиков с активным контентом. Если ошибка с нашей стороны или услуга не выполнена — 100% возврат средств с учётом банковских комиссий.'
  },
  {
    q: 'Возможен ли возврат, если оплатили, но передумали?',
    a: 'Если вы оплатили, но передумали по любым причинам — возврат 50%.'
  },
]

/** Вопросы и ответы: аккордеон, отзывы и все контакты магазина. */
export default function FAQ() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Вопросы и ответы</h1>
          <p>
            Коротко о заказе, оплате и выдаче. Не нашли ответ — напишите нам
            в Telegram, ответим в рабочее время.
          </p>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq__grid">
          <div className="faq__list">
            <h2>Частые вопросы</h2>
            {QUESTIONS.map((item) => (
              <details className="faq__item card" key={item.q}>
                <summary className="faq__question">
                  <span>{item.q}</span>
                  <span className="faq__chevron" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq__answer">{item.a}</p>
              </details>
            ))}
          </div>

          <aside className="faq__side">
            <div className="faq__reviews card">
              <h3>Отзывы</h3>
              <p className="muted">
                Реальные отзывы покупателей — в открытом Telegram и ВК каналах.
              </p>
              <a
                className="btn btn--primary"
                href={SHOP.reviewsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Отзывы телеграм
              </a>
              <a
                className="btn btn--primary"
                href="https://vk.com/topic-147969897_48891442"
                target="_blank"
                rel="noreferrer"
              >
                Отзывы ВКонтакте
              </a>
            </div>

            <div className="faq__contacts card">
              <h3>Контакты</h3>
              {CONTACTS.map((contact) => (
                <div className="faq__contact" key={contact.username}>
                  <span className="tag tag--brand">{contact.role}</span>
                  <a
                    className="faq__contact-name"
                    href={chatUrl(contact.username)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{contact.username}
                  </a>
                  <p className="muted">{contact.description}</p>
                </div>
              ))}
              <div className="faq__contact" key="Mobile Games1">
                  <span className="tag tag--brand">Ютуб Канал</span>
                  <a
                    className="faq__contact-name"
                    href="https://www.youtube.com/@Mobile_Games"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Mobile_Games
                  </a>
                  <p className="muted">Основной ютуб канал с 50 тысячами подписчиков.</p>
              </div>
              <div className="faq__contact" key="Mobile Games2">
                  <span className="tag tag--brand">Ютуб Канал</span>
                  <a
                    className="faq__contact-name"
                    href="https://www.youtube.com/@ReDLineShop100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ReDLineShop100
                  </a>
                  <p className="muted">Второй ютуб канал про магазин Redline Shop.</p>
                </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}