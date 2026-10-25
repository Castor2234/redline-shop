import './Charity.css'

/** Благотворительность: две картинки вверху и текст под ними. */
export default function Charity() {
  return (
    <>
      <section className="section charity">
        <div className="container">
          <div className="charity__images">
            <img
              className="charity__image"
              src="/assets/charity-1.webp"
              alt="Благотворительность"
            />
            <img
              className="charity__image"
              src="/assets/charity-2.webp"
              alt="Благотворительность"
            />
          </div>

          <div className="charity__text">
            <h2>
              ❤️ ИТОГИ 4-Й НЕДЕЛИ И ВСЕГО МЕСЯЦА #ДОНАТЬТВОРИДОБРО
            </h2>
            <p className="charity__placeholder">
              Завершился наш Месяц благотворительного доната в ReDLine Shop! ❤️{' '}
              <br />
              📅 За 4-ю неделю — с 28 августа по 6 сентября оборот в рамках акции составил:{' '}
              <br />
              🇷🇺 64 701 ₽<br />
              🇧🇾 959,00 BYN<br />
              А теперь самое главное — общий результат за весь месяц, с 6 августа по 6 сентября 2026 года:<br />
              🇷🇺 283 551 ₽<br />
              🇧🇾 3 243,46 BYN<br />
              ❤️ Именно эта общая сумма будет направлена на благотворительность.<br />
              Огромное спасибо каждому, кто в течение этого месяца покупал донат, игры, приложения и другие услуги через ReDLine Shop. Каждый ваш заказ стал частью большого общего доброго дела.{' '}
              За четыре недели мы вместе показали, что даже обычная покупка может превратиться в реальную помощь тем, кому она необходима. 🫶<br />
              Отправив средства: Дикий животным, птицам, пожилым людям, закрыв сбор в Сбербанке, собачкам из Новополоцка, организации vremya_pomogat.by: в сумме более 311.073 RUB и 3499.99 BYN, чеки и ссылки ниже:<br />
              <br />
              Дикие животные: 2000 BYN - 57.124 RUB - <a href="https://sirin.by/podderjka/" target="_blank" rel="noreferrer">https://sirin.by/podderjka/</a><br />
              Птицы 100.000 RUB - <a href="https://ptici.by/help.php#module-donate-wrapper" target="_blank" rel="noreferrer">https://ptici.by/help.php#module-donate-wrapper</a><br />
              Пожилые люди - 2000 BYN - 57.124 RUB - <a href="https://vera.by/s-veroj-sogreem-serdcza-pozhilyh/" target="_blank" rel="noreferrer">https://vera.by/s-veroj-sogreem-serdcza-pozhilyh/</a><br />
              Сбор Сбербанк девушке - 96.825 RUB<br />
              <br />
              Собачки Новополоцк: 2000 BYN - <a href="https://www.instagram.com/p/Dcn6B_ViGQ5/?stkn=MWR3eGZkY2U1dGMydg==" target="_blank" rel="noreferrer">https://www.instagram.com/p/Dcn6B_ViGQ5/?stkn=MWR3eGZkY2U1dGMydg==</a><br />
              Vremya_pomogat.by: 1000 BYN - <a href="https://www.instagram.com/vremya_pomogat.by/" target="_blank" rel="noreferrer">https://www.instagram.com/vremya_pomogat.by/</a><br />
              Девочка из Гродно: 499.99 BYN - <a href="https://www.instagram.com/reel/DdBi6JNMPqt/?stkn=MXIydzFmazJlMW9jYg==" target="_blank" rel="noreferrer">https://www.instagram.com/reel/DdBi6JNMPqt/?stkn=MXIydzFmazJlMW9jYg==</a><br />
              <br />
              Спасибо всем, кто был с нами и поддержал #ДОНАТЬТВОРИДОБРО! ❤️<br />
              От себя, благодарю всех причастных в доброму делу, ВСЕМ БОЛЬШОЕ СПАСИБО!<br />
              Больше фото и скринов в тг посте - <a href="https://t.me/mobilegemss/5632" target="_blank" rel="noreferrer">https://t.me/mobilegemss/5632</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}