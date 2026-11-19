import './Creator.css'

/** Раздел «Создатель»: только текст — история становления магазина. */
export default function Creator() {
  return (
    <>
      <section className="section creator">
        <div className="container">
          <div className="creator__text">
            <h2>👑СОЗДАТЕЛЬ</h2>
            <p className="creator__placeholder">
              История становления ReDLine Shop
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
