'use client'

/**
 * Информационный блок «Читы» на странице Brawl Stars.
 * Рендерится только для подраздела «Brawl Stars»: фото + текст о читах под ним.
 * Картинку можно заменить, подложив своё фото в public/assets и поправив src.
 */
export default function BrawlStarsCheats() {
  return (
    <section className="cheats">
      <div className="container">
        <h2 className="cheats__title">
          🔥Читы для Brawl Stars — в ReDLine Shop!
        </h2>
        <img
          className="cheats__image"
          src="/assets/brawl_cheats.webp"
          alt="Читы для Brawl Stars — aim, автоуклонение, визуал"
          width={700}
          height={450}
          loading="lazy"
        />
        <div className="cheats__body">
          <p>🎮 Теперь у нас можно приобрести читы для Brawl Stars!</p>
          <p>
            🌟Навсегда чит: 2999 руб — 115 BYN — 40 $
          </p>
          <p>
            ⚡️ Дополнительные возможности и функции: Aim — авто наводка, авто
            уклонение, новый визуал и не только.
          </p>
          <p className="cheats__warning-title">
            ⚠️ Важно! Перед покупкой ознакомьтесь!
          </p>
          <ul className="cheats__list">
            <li>
              🚨 Использование читов нарушает правила Brawl Stars.
            </li>
            <li>
              ❗️Бан может быть как временным, так и навсегда, с потерей всего
              прогресса, скинов, покупок и достижений.
            </li>
            <li>🛡️ Наша рекомендация: используйте только дополнительные аккаунты (твинки).</li>
            <li>Не рискуйте своим основным аккаунтом.</li>
            <li>
              Помните, что даже использование читов на твинке не гарантирует
              безопасность других аккаунтов.
            </li>
            <li>
              Все риски блокировки необходимо учитывать заранее.
            </li>
          </ul>
          <p>
            Подробный ролик:{' '}
            <a
              className="cheats__link"
              href="https://youtu.be/XuiJFCxjj-U?si=pEVCI2j8np_UUY9z"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://youtu.be/XuiJFCxjj-U?si=pEVCI2j8np_UUY9z
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
