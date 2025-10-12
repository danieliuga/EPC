import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70 border-b border-border">
      <div className="container-app h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-ink font-bold tracking-tight">
          <span className="inline-block h-3 w-3 rounded-sm bg-primary" aria-hidden />
          EPC
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
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
        <div className="flex items-center gap-3">
          <NavLink to="/contacto#donar" className="btn-primary">Donar</NavLink>
          <NavLink to="/contacto" className="btn-ghost">Hablemos</NavLink>
        </div>
      </div>
    </header>
  )
}
