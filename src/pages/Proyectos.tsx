import { NavLink } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'
import SEO from '../components/SEO'

export default function Proyectos() {
  return (
    <>
      <SEO
        title="Proyectos"
        description="Campañas, propuestas y acciones concretas con impacto real en la Universitat de Barcelona. Esto es lo que EPC ha conseguido."
      />

      {/* Cabecera */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <Reveal>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Proyectos
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight tracking-tight text-ink">
                Lo que hemos<br />conseguido.
              </h1>
              <p className="mt-4 max-w-2xl text-ink/70 md:text-lg leading-relaxed">
                Cada proyecto es una campaña real, con nombre, período y resultados concretos. Aquí puedes ver qué hemos hecho y qué estamos haciendo ahora mismo.
              </p>
            </div>
          </Reveal>

          {/* Cards de proyectos */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <NavLink
                  to={`/proyectos/${p.slug}`}
                  className="reveal group block overflow-hidden rounded-md border border-border bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    {p.status && (
                      <span className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        p.status === 'En curso'
                          ? 'bg-primary text-ink'
                          : 'bg-ink/80 text-white backdrop-blur-sm'
                      }`}>
                        {p.status}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    {p.period && (
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-ink/40">{p.period}</p>
                    )}
                    <div className="mb-2 h-0.5 w-6 rounded-full bg-primary transition-all duration-200 group-hover:w-10" />
                    <h2 className="font-display text-xl text-ink">{p.title}</h2>
                    <p className="mt-1 text-sm text-ink/70 leading-relaxed">{p.summary}</p>
                    {p.impact && p.impact.length > 0 && (
                      <div className="mt-4 border-t border-border pt-4">
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink/40">Impacto</p>
                        <p className="text-sm text-ink/80">{p.impact[0]}</p>
                      </div>
                    )}
                  </div>
                </NavLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel destacado */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app">
          <Reveal>
            <div className="reveal mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Destacados
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">Un vistazo rápido.</h2>
            </div>
          </Reveal>
          <Carousel
            auto
            intervalMs={5000}
            items={projects.map((p) => ({ id: p.slug, image: p.cover, title: p.title, subtitle: p.summary }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 md:py-24">
        <div className="container-app flex flex-col items-center text-center">
          <Reveal>
            <div className="reveal">
              <div className="mb-3 h-1 w-10 rounded-full bg-primary mx-auto" />
              <h2 className="font-display text-4xl md:text-5xl text-white">¿Quieres ser parte<br />del próximo proyecto?</h2>
              <p className="mt-4 mx-auto max-w-lg text-white/60 leading-relaxed">
                Si tienes una idea, una propuesta o simplemente quieres sumarte, escríbenos. EPC es de quien la construye.
              </p>
              <div className="mt-8 flex justify-center gap-3 flex-col sm:flex-row">
                <NavLink to="/contacto" className="btn-primary">Escríbenos</NavLink>
                <NavLink to="/servicios" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Ver qué hacemos
                </NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
