import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

const plans = [
  {
    title: 'Membresía Estudiantil',
    price: 'Cuota simbólica',
    text: '¿Eres estudiante? Defendemos tus derechos. Súmate al cambio.',
    features: ['Acceso a todos los eventos', 'Voto en asambleas', 'Grupo de Telegram EPC'],
    img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#unete',
  },
  {
    title: 'Membresía Reducida',
    price: '3 €/mes',
    text: 'Gracias por apoyar el cambio. Cada euro suma.',
    features: ['Todo lo de Estudiantil', 'Newsletter mensual', 'Material de formación exclusivo'],
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#unete',
  },
  {
    title: 'Membresía Comprometida',
    price: '7 €/mes',
    text: 'Tu cuota lo hace posible. ¡Gracias, patriota!',
    features: ['Todo lo de Reducida', 'Acceso prioritario a acciones', 'Mención en canales oficiales'],
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#unete',
  },
  {
    title: 'Membresía Generosa',
    price: '15 €/mes',
    text: 'Aportas mucho más que una cuota; construyes el futuro del activismo.',
    features: ['Todo lo de Comprometida', 'Reconocimiento como patrocinador', 'Acceso a reuniones estratégicas'],
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    to: '/contacto#unete',
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
          <h1 className="font-display text-center text-3xl md:text-5xl tracking-wide uppercase">ÚNETE</h1>
          <p className="mt-3 mx-auto max-w-3xl text-center text-ink/80 md:text-lg">
            Apoya un movimiento estudiantil que defiende el patriotismo, el mérito y el compromiso con el futuro.
            Con tu membresía, fortaleces una voz firme y haces posible que más estudiantes tengan representación real.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {plans.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-md border border-border shadow-soft"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg md:text-xl text-ink">{card.title}</h3>
                    <span className="shrink-0 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-ink">{card.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink/70">{card.text}</p>
                  <ul className="mt-3 space-y-1">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to={card.to}
                    className="btn-primary mt-4 w-full justify-center"
                  >
                    Unirme
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
