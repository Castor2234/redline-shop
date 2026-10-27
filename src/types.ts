/** Два больших раздела каталога. */
export type BigCategory = 'Games' | 'Other'

/** Тип товара: по нему товары группируются на странице игры. */
export type ProductKind = 'currency' | 'pass' | 'subscription' | 'other'

/** Один способ купить товар: свой вариант выдачи и своя цена. */
export type PurchaseOption = {
  /** «Заход на аккаунт», «Через Supercell Store»… Обязателен, если способов несколько. */
  label?: string
  /** Цена в рублях (RUB). */
  price: number
  /** Цена в белорусских рублях (BYN) — проставляется вручную. */
  priceByn: number
  /** Что нужно от покупателя, если для этого способа отличается от product.requires. */
  requires?: string
  /** Важное примечание к способу — показывается под его названием. */
  note?: string
}

export type Product = {
  /** Уникальный идентификатор — для ключей в списках. */
  id: string
  /** Большой раздел: Games или Other. */
  category: BigCategory
  /** Подраздел (игра или сервис): «Brawl Stars», «ChatGPT»… */
  subcategory: string
  /** Группа внутри игры: валюта, пропуски, подписки… */
  kind: ProductKind
  /** Что именно покупает человек: «660 UC», «Brawl Pass». */
  title: string
  /** Способы покупки. Один — просто цена, несколько — покупатель выбирает. */
  options: [PurchaseOption, ...PurchaseOption[]]
  /** Что нужно от покупателя по умолчанию: ID, ник, почта. */
  requires: string
  /** Короткое пояснение под названием. */
  note?: string
  /** Показывать подраздел в блоке «Популярное» на главной. */
  popular?: boolean
  /** Слова, по которым товар должен находиться в поиске. */
  keywords?: string[]
}