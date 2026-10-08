/** Два больших раздела каталога. */
export type BigCategory = 'Games' | 'Other'

export type Product = {
  /** Уникальный идентификатор — для ключей в списках. */
  id: string
  /** Большой раздел: Games или Other. */
  category: BigCategory
  /** Подраздел внутри раздела: «Brawl Stars», «ChatGPT»… */
  subcategory: string
  /** Что именно покупает человек: «660 UC», «Plus на 3 месяца». */
  title: string
  /** Цена в рублях. */
  price: number
  /** Что нужно от покупателя: ID, ник, почта. */
  requires: string
  /** Короткое пояснение под названием. */
  note?: string
  /** Показывать подраздел в блоке «Популярное» на главной. */
  popular?: boolean
  /** Слова, по которым товар должен находиться в поиске. */
  keywords?: string[]
}