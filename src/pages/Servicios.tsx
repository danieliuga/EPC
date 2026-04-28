import { NavLink } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { services } from '../data/content'
import SEO from '../components/SEO'

const pasos = [
  { n: '01', title: 'Nos organizamos', text: 'Un grupo de estudiantes con una idea o propuesta se coordina para darle forma y definir los objetivos.' },
  { n: '02', title: 'Lo ponemos en marcha', text: 'Charlas, campañas, mentorías o encuentros: cada actividad se diseña pensando en el mayor impacto posible.' },
  { n: '03', title: 'Medimos el resultado', text: 'Recogemos participación, propuestas generadas y cambios conseguidos. Lo que no se mide no mejora.' },
  { n: '04', title: 'Lo hacemos crecer', text: 'Cada actividad alimenta la siguiente. Así construimos una comunidad cada vez más fuerte y cohesionada.' },
]

export default function Servicios() {
  return (
    <>
      <SEO
        title="Qué hacemos"
        description="Formación crítica, acciones concretas y comunidad sólida. Las actividades recurrentes con las que EPC transforma la universidad."
      />

      {/* Cabecera */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <Reveal>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Qué hacemos
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight tracking-tight text-ink">
                Actividades que<br />transforman la universidad.
              </h1>
              <p className="mt-4 max-w-2xl text-ink/70 md:text-lg leading-relaxed">
                EPC organiza tres tipos de actividad de forma recurrente: formamos, actuamos y construimos comunidad. Aquí puedes ver en qué consiste cada una.
              </p>
            </div>
          </Reveal>

          {/* Cards de servicios */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <NavLink
                  to={`/servicios/${s.slug}`}
                  className="reveal group block overflow-hidden rounded-md border border-border bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
                >
                  {s.image && (
                    <div className="overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3 h-1 w-8 rounded-full bg-primary transition-all duration-200 group-hover:w-14" />
                    <h2 className="font-display text-2xl text-ink">{s.title}</h2>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.summary}</p>
                    {s.highlights && (
                      <ul className="mt-4 space-y-1.5">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-ink/80">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink/50 group-hover:text-ink transition-colors">
                      Saber más
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </NavLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 md:py-24 bg-ink">
        <div className="container-app">
          <Reveal>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Cómo funciona
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight">
                De la idea a la acción.
              </h2>
              <p className="mt-3 max-w-xl text-white/60 leading-relaxed">
                Así organizamos cada actividad, desde el primer impulso hasta el impacto final.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="reveal rounded-md border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8">
                  <span className="font-display text-4xl text-primary/40 leading-none select-none">{p.n}</span>
                  <h3 className="mt-3 font-display text-lg text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app flex flex-col items-center text-center">
          <Reveal>
            <div className="reveal">
              <h2 className="font-display text-4xl md:text-5xl text-ink">¿Quieres participar?</h2>
              <p className="mt-4 mx-auto max-w-lg text-ink/70 md:text-lg leading-relaxed">
                Todas nuestras actividades están abiertas al estudiantado. Escríbenos y te sumamos a la próxima.
              </p>
              <div className="mt-8 flex justify-center gap-3 flex-col sm:flex-row">
                <NavLink to="/contacto" className="btn-primary">Contactar</NavLink>
                <NavLink to="/proyectos" className="btn-ghost">Ver proyectos</NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
