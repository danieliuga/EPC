import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO' // opcional; quítalo si no lo usas

const plans = [
  {
    title: 'Membresía estudiantil',
    text: '¿Eres estudiante? Defendemos tus derechos. Súmate al cambio.',
    img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#donar',
  },
  {
    title: 'Membresía Reducida',
    text: 'Gracias por apoyar el cambio. Cada euro suma.',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#donar',
  },
  {
    title: 'Membresía Comprometida',
    text: 'Tu cuota lo hace posible. ¡Gracias, patriota!',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#donar',
  },
  {
    title: 'Membresía Generosa',
    text: 'Aportas mucho más que una cuota; construyes el futuro del activismo.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#donar',
  },
]

export default function Donar() {
  return (
    <>
      <SEO
        title="Únete"
        description="Apoya un movimiento estudiantil que defiende el mérito y el compromiso con el futuro. Súmate a Estudiants pel Canvi."
      />

      <section className="py-16 md:py-24">
        <div className="container-app">
          {/* Cabecera */}
          <h1 className="font-display text-center text-3xl md:text-5xl tracking-wide uppercase">
            ÚNETE
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-center text-ink/80 md:text-lg">
            Apoya un movimiento estudiantil que defiende el patriotismo, el mérito y el compromiso con el futuro. 
            Con tu membresía, fortaleces una voz firme y haces posible que más estudiantes tengan representación real.
          </p>

          {/* Grid tarjetas */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {plans.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-md border border-border shadow-soft"
              >
                {/* Imagen */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Tarjeta blanca superpuesta */}
                <div className="absolute left-6 right-6 -bottom-6 translate-y-[-50%] md:translate-y-0 md:bottom-6">
                  <div className="rounded-md border border-border bg-white p-5 shadow-soft">
                    <h3 className="font-display text-lg md:text-xl text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink/70">{card.text}</p>

                    {/* CTA opcional: descomenta si quieres botón dentro de la tarjeta */}
                  </div>
                </div>

                {/* Clic en toda la tarjeta (opcional) */}
                <NavLink
                  to={card.to}
                  className="absolute inset-0"
                  aria-label={`Abrir ${card.title}`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
