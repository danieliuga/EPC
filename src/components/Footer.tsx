export default function Footer() {
  const year = new Date().getFullYear()
  const links = [
    { label: 'Inicio', href: '/' },
    { label: '¿Quiénes somos?', href: '/nosotros' },
    { label: 'Únete', href: '/contacto' },
    { label: 'Dona', href: '#' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Blog', href: '#' },
  ]
  const socials = [
    { label: 'YouTube', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M23 7.5s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C17.6 3.9 12 3.9 12 3.9h0s-5.6 0-8.3.3c-.4.1-1.2.1-1.9.9C.2 5.8 0 7.5 0 7.5S-.2 9.4 0 11.2v1.6S.2 14.6.8 15.3c.7.8 1.7.8 2.1.9 1.5.1 7.1.3 9.1.3 0 0 5.6 0 8.3-.3.4-.1 1.2-.1 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.9 0-3.7V7.5ZM9.6 13.1V6.9l6 3.1-6 3.1Z" fill="currentColor"/></svg>
    )},
    { label: 'Telegram', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M22.5 3.6 1.9 11.4c-1 .4-1 1.3-.2 1.6l5.2 1.6 2 6.5c.2.5.8.6 1.2.2l3-2.9 5.8 4.3c.5.3 1.2.1 1.4-.5L24 4.7c.3-.9-.4-1.5-1.5-1.1ZM8 13.7l9.9-6.1-7.6 7.4-.3 3.3-2-4.6Z" fill="currentColor"/></svg>
    )},
    { label: 'Instagram', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2.2c3 0 3.3 0 4.5.1 1.1.1 1.7.2 2.1.4.5.2.9.5 1.3.9.3.3.7.8.9 1.3.2.4.3 1 .4 2.1.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.1-.2 1.7-.4 2.1-.2.5-.5.9-.9 1.3-.3.3-.8.7-1.3.9-.4.2-1 .3-2.1.4-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.1-.1-1.7-.2-2.1-.4-.5-.2-.9-.5-1.3-.9-.3-.3-.7-.8-.9-1.3-.2-.4-.3-1-.4-2.1C2.2 15.3 2.2 15 2.2 12s0-3.3.1-4.5c.1-1.1.2-1.7.4-2.1.2-.5.5-.9.9-1.3.3-.3.8-.7 1.3-.9.4-.2 1-.3 2.1-.4C8.7 2.2 9 2.2 12 2.2Zm0 1.8c-3 0-3.3 0-4.4.1-.9.1-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.2.8-.3 1.7-.1 1.1-.1 1.4-.1 4.4s0 3.3.1 4.4c.1.9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.2 1.7.3 1.1.1 1.4.1 4.4.1s3.3 0 4.4-.1c.9-.1 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.2-.8.3-1.7.1-1.1.1-1.4.1-4.4s0-3.3-.1-4.4c-.1-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.2-1.7-.3-1.1-.1-1.4-.1-4.4-.1Zm0 3.1a6.9 6.9 0 1 1 0 13.8 6.9 6.9 0 0 1 0-13.8Zm0 1.8a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Zm5.3-2.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" fill="currentColor"/></svg>
    )},
    { label: 'TikTok', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M21 8.5c-2.6 0-4.8-2.1-4.9-4.7V3h-3v12.1a3.6 3.6 0 1 1-3.6-3.6c.3 0 .6 0 .9.1V8.5c-3.8-.6-7.3 2.2-7.7 6-.4 3.8 2.2 7.3 6 7.7s7.3-2.2 7.7-6V9.8c1.3 1 2.9 1.6 4.6 1.6V8.5Z" fill="currentColor"/></svg>
    )},
    { label: 'X', href: '#', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M18.2 3H21l-6.3 7.2L22 21h-4.9l-3.8-5-4.3 5H3.2l6.8-7.8L2.8 3h5.1l3.4 4.5L18.2 3Zm-1.7 16h1.3L7.6 5.1H6.1L16.5 19Z" fill="currentColor"/></svg>
    )},
  ]

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-app py-12">
        <div className="flex items-end justify-between">
          <h3 className="font-display text-2xl md:text-3xl tracking-tight">EL FUTURO NOS PERTENECE</h3>
          <div className="hidden md:flex items-center gap-4 text-ink/80">
            <span className="text-sm">Síguenos:</span>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="text-ink/80 hover:text-ink">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 text-sm text-ink/80 md:grid-cols-3 lg:grid-cols-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-ink">{l.label}</a>
          ))}
        </div>
        <hr className="my-6 border-border" />
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-ink/60 md:flex-row">
          <p>© {year} EPC — Estudiants Pel Canvi</p>
          <div className="md:hidden flex items-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="text-ink/80 hover:text-ink">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
