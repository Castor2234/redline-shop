import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { type Currency } from '../helpers/currency'

/** Ключ, под которым выбор валюты хранится в localStorage. */
const STORAGE_KEY = 'redline-shop:currency'

type CurrencyContextValue = {
  /** Текущая валюта отображения цен. */
  currency: Currency
  /** Переключить валюту — выбор сохраняется в localStorage. */
  setCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null)

/** Читает сохранённую валюту; если её нет — рубли по умолчанию. */
function readStoredCurrency(): Currency {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'RUB' || stored === 'BYN') return stored
  } catch {
    // localStorage может быть недоступен (приватный режим) — молча игнорируем.
  }
  return 'RUB'
}

/** Хранит выбранную валюту и раздаёт её всем компонентам. */
export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(readStoredCurrency)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, currency)
    } catch {
      // Без localStorage просто не запоминаем выбор — приложение работает.
    }
  }, [currency])

  const value = useMemo(() => ({ currency, setCurrency }), [currency])

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

/** Доступ к валюте из любого компонента внутри провайдера. */
export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency должен вызываться внутри <CurrencyProvider>')
  }
  return context
}