'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
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

const listeners = new Set<() => void>()

/** Запасное значение, если localStorage недоступен (приватный режим). */
let fallback: Currency = 'RUB'

function subscribe(callback: () => void) {
  listeners.add(callback)
  window.addEventListener('storage', callback) // выбор, сделанный в другой вкладке
  return () => {
    listeners.delete(callback)
    window.removeEventListener('storage', callback)
  }
}

function getSnapshot(): Currency {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'RUB' || stored === 'BYN') return stored
  } catch {
    // localStorage недоступен — используем запасное значение.
  }
  return fallback
}

/** На сервере и при гидратации всегда рубли — HTML совпадает с клиентом. */
const getServerSnapshot = (): Currency => 'RUB'

function save(next: Currency) {
  fallback = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Без localStorage выбор живёт только до перезагрузки — приложение работает.
  }
  listeners.forEach((listener) => listener())
}

/** Хранит выбранную валюту и раздаёт её всем компонентам. */
export function CurrencyProvider({ children }: { children: ReactNode }) {
  const currency = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const setCurrency = useCallback((next: Currency) => save(next), [])
  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency])

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