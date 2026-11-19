import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { SHOP } from '@/config'
import { CurrencyProvider } from '@/components/CurrencyProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MetrikaTracker from '@/components/MetrikaTracker'
import './globals.css'
import '@/components/Layout.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://redlineshop.shop'),
  title: { default: 'ReDLine Shop — твой помощник по донату', template: '%s | ReDLine Shop' },
  description: 'ReDLine Shop — донат, гемы, пропуски и пополнения для игр. Цены на сайте, заказ и выдача в Telegram.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    siteName: SHOP.name,
    locale: 'ru_RU',
    title: 'ReDLine Shop — твой помощник по донату',
    description: 'Redline Shop - донат, гемы, пропуски и пополнения для игр. Заказ и выдача в Telegram.',
    images: [{ url: '/assets/description_image.webp', width: 1672, height: 941 }],
  },
  twitter: { card: 'summary_large_image', images: ['/assets/description_image.webp'] },
}

export const viewport: Viewport = { themeColor: '#0b0b0d' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Teko.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/113700539" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

        {/* #root нужен твоему CSS (min-height + flex-колонка), в Next его нет */}
        <div id="root">
          <CurrencyProvider>
            <MetrikaTracker />
            <div className="layout__bg" aria-hidden="true" />
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </CurrencyProvider>
        </div>

        <Script id="yandex-metrika" strategy="beforeInteractive">{`
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=113700539', 'ym');
ym(113700539, 'init', { defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });
        `}</Script>
      </body>
    </html>
  )
}