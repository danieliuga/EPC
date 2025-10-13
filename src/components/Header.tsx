import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70 border-b border-border">
        <div className="container-app h-16 flex items-center justify-between">
          {/* Logo + botón hamburguesa */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink/80 hover:text-ink hover:bg-white/70"
              aria-label="Abrir menú"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(v => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <NavLink to="/" className="flex items-center gap-2 text-ink font-bold tracking-tight">
              <img
              src='/LOGO PNG LETRAS GRISES.png'
              alt="EPC"
              className="inline-block h-28 w-28"
              loading="lazy"
            />
            </NavLink>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-ink ${isActive ? 'text-ink' : 'text-ink/70'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Botones a la derecha */}
          <div className="flex items-center gap-3">
            <NavLink to="/contacto/donar" className="btn-primary">Donar</NavLink>
            <NavLink to="/contacto" className="btn-ghost">Hablemos</NavLink>
          </div>
        </div>
      </header>

      {/* Backdrop fuera del header */}
      {open && (
        <div
          aria-hidden
          className="fixed inset-0 z-[55] bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel móvil */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 z-[60] border-t border-border bg-surface shadow-soft transition-transform duration-200 ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-2 pointer-events-none opacity-0'
        }`}
      >
        <nav className="container-app py-3 flex flex-col gap-1">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-2 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-ink/80 hover:bg-primary hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
