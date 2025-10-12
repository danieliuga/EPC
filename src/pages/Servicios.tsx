import { NavLink } from 'react-router-dom'
import Section from '../components/Section'
import { services } from '../data/content'
import SEO from '../components/SEO'

export default function Servicios() {
  return (
    <>
      <SEO title="Servicios" description="Diseño estratégico, desarrollo web y campañas. Entregamos con calidad, velocidad y medición." />
      <Section eyebrow="Qué hacemos" title="Servicios" description="Soluciones enfocadas en impacto: estrategia, diseño y desarrollo.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <NavLink to={`/servicios/${s.slug}`} key={s.slug} className="group block rounded-md border border-border bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
              <h3 className="font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-ink/80 group-hover:text-ink">
                Ver servicio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </NavLink>
          ))}
        </div>
      </Section>
    </>
  )
}

