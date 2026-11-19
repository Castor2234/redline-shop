'use client'

/**
 * Информационный блок «Буст» на странице Brawl Stars.
 * Рендерится только для подраздела «Brawl Stars»: фото + сокращённый текст под ним.
 * Картинку можно заменить, подложив своё фото в public/assets и поправив src.
 */
export default function BrawlStarsBoost() {
  return (
    <section className="boost">
      <div className="container">
        <h2 className="boost__title">🔥Буст кубков, рангов и лиг в Brawl Stars!</h2>
        <img
          className="boost__image"
          src="/assets/brawl_boost.webp"
          alt="Буст Brawl Stars — прокачка кубков, рангов и лиг"
          width={450}
          height={800}
          loading="lazy"
        />
        <div className="boost__body">
          <p>
            В ReDLine Shop доступна профессиональная прокачка аккаунта Brawl Stars:
          </p>
          <ul className="boost__list">
            <li>Буст кубков на отдельных бойцах.</li>
            <li>Поднятие общих кубков аккаунта.</li>
            <li>Буст праймов — от 1 до 3 прайма.</li>
            <li>Продвижение в рейтинговых лигах.</li>
            <li>Совместная игра с бустером без передачи аккаунта.</li>
            <li>Ап мастерства, побед подряд и другие задачи.</li>
          </ul>
          <p>
            Стоимость и сроки считаются индивидуально — зависят от бойца, уровня
            прокачки и сложности заказа. Обычно от 1 до 7 суток.
          </p>
          <p>Заказы выполняет команда опытных бустеров, а не я лично.</p>
          <p className="boost__warning">
            ⚠️Важно: при передаче аккаунта существует риск блокировки со стороны
            разработчиков. Заказывая услугу, вы принимаете этот риск.
          </p>
          <p>
            Оформить заказ можно в Telegram — нажмите «Написать в Telegram»
            ниже.
          </p>
        </div>
      </div>
    </section>
  )
}
