import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="min-h-dvh flex flex-col bg-surface text-ink">
      <SEO />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-soft"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <div key={pathname} className="animate-page-in">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
