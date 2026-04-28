import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'

const valores = [
  {
    title: 'Libertad académica',
    text: 'Defendemos el pluralismo y la libertad de pensamiento en las aulas. Ninguna ideología debe monopolizar la universidad pública.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: 'Mérito',
    text: 'El esfuerzo y el talento deben ser reconocidos. Apostamos por una universidad exigente que recompense el trabajo serio.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Comunidad',
    text: 'Construimos redes de apoyo real entre estudiantes. La solidaridad y el compañerismo son la base de nuestro colectivo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Acción',
    text: 'Pasamos de las palabras a los hechos. Proponemos, organizamos y ejecutamos para transformar la universidad desde dentro.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

const hitos = [
  {
    label: 'El origen',
    text: 'Nacimos de la inquietud de un grupo de estudiantes de Derecho que veían cómo la universidad perdía su vocación crítica e independiente. Empezamos con debates informales y la convicción de que el cambio era posible.',
  },
  {
    label: 'El crecimiento',
    text: 'Poco a poco nos fuimos organizando: primeras asambleas abiertas, campañas institucionales y presencia en los órganos de la facultad. El boca a boca hizo el resto.',
  },
  {
    label: 'Hoy',
    text: 'Estamos presentes en varias facultades de la UB, con una comunidad activa, propuestas concretas elevadas a decanato y un grupo cada vez más grande de estudiantes comprometidos.',
  },
]

export default function Nosotros() {
  return (
    <>
      <SEO
        title="Quiénes Somos"
        description="Estudiants Pel Canvi es un colectivo estudiantil universitario comprometido con la libertad académica, el mérito y la participación activa en la Universitat de Barcelona."
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/Imagen4.jpg"
            alt="Estudiants Pel Canvi"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/20" />
        </div>
        <div className="container-app relative py-20">
          <Reveal>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Quiénes somos
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-5xl md:text-7xl text-white leading-none tracking-tight">
                Estudiantes<br />que actúan.
              </h1>
              <p className="mt-5 max-w-xl text-white/75 md:text-lg leading-relaxed">
                Somos EPC — un colectivo de activismo estudiantil comprometido con una universidad libre, crítica y justa en la Universitat de Barcelona.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="py-16 md:py-24">
        <div className="container-app grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <div className="reveal">
              <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
              <h2 className="font-display text-4xl md:text-5xl text-ink">Un colectivo con propósito</h2>
              <p className="mt-5 text-ink/80 md:text-lg leading-relaxed">
                Estudiants Pel Canvi nació de la necesidad de una voz estudiantil independiente en la Universitat de Barcelona. Nos organizamos para defender derechos, promover el mérito y construir comunidad real entre el estudiantado.
              </p>
              <p className="mt-4 text-ink/80 leading-relaxed">
                No somos un sindicato al uso ni una agrupación política convencional. Somos estudiantes que creen que la universidad puede y debe ser mejor, y que actúan en consecuencia: con propuestas, con presencia y con constancia.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="reveal">
              <img
                src="/Imagen11.jpg"
                alt="Comunidad EPC"
                className="aspect-[4/3] w-full rounded-md border border-border object-cover shadow-soft"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app">
          <Reveal>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Nuestros valores
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">Lo que nos mueve</h2>
              <p className="mt-3 max-w-xl text-ink/70 md:text-lg leading-relaxed">
                Cuatro principios que guían cada decisión, cada campaña y cada acción de EPC.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {valores.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="reveal flex gap-5 rounded-md border border-border bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-ink">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-24">
        <div className="container-app grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <Reveal>
            <div className="reveal relative overflow-hidden rounded-md border border-border shadow-soft">
              <img
                src="/Imagen5.jpg"
                alt="Historia de EPC"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-ink">
                  Facultad de Derecho · UB
                </span>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="reveal">
                <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
                <h2 className="font-display text-4xl md:text-5xl text-ink">Nuestra historia</h2>
              </div>
            </Reveal>
            <ol className="mt-8 space-y-7">
              {hitos.map((h, i) => (
                <Reveal key={h.label} delay={i * 100}>
                  <li className="reveal flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-sm text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-ink">{h.label}</div>
                      <p className="mt-1 text-sm text-ink/70 leading-relaxed">{h.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Visión — split oscuro */}
      <section className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[280px] md:min-h-0">
            <img
              src="/Imagen2.jpg"
              alt="Visión EPC"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
          <div className="bg-ink flex items-center px-8 py-20 md:px-16 md:py-28">
            <Reveal>
              <div className="reveal">
                <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
                <h2 className="font-display text-4xl md:text-5xl text-white leading-tight tracking-tight">
                  El futuro<br />nos pertenece.
                </h2>
                <p className="mt-5 max-w-sm text-white/60 leading-relaxed">
                  Queremos una universidad donde la participación sea real, el conocimiento sea libre y los estudiantes sean protagonistas, no espectadores.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app text-center">
          <Reveal>
            <div className="reveal">
              <h2 className="font-display text-4xl md:text-5xl text-ink">¿Te identificas?</h2>
              <p className="mt-4 mx-auto max-w-xl text-ink/70 md:text-lg leading-relaxed">
                Si crees que la universidad puede mejorar y quieres ser parte del cambio, EPC es tu espacio.
              </p>
              <div className="mt-8 flex justify-center gap-3 flex-col sm:flex-row">
                <NavLink to="/contacto" className="btn-primary">Únete a EPC</NavLink>
                <NavLink to="/proyectos" className="btn-ghost">Ver proyectos</NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
