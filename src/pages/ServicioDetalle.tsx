import { useParams, NavLink } from 'react-router-dom'
import Section from '../components/Section'
import { services } from '../data/content'
import SEO from '../components/SEO'

export default function ServicioDetalle() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <section className="py-24">
        <div className="container-app text-center">
          <p className="font-display text-5xl text-primary">404</p>
          <h1 className="mt-4 font-display text-2xl text-ink">Servicio no encontrado</h1>
          <p className="mt-2 text-ink/70">El servicio que buscas no existe o ha sido eliminado.</p>
          <NavLink to="/servicios" className="btn-primary mt-6 inline-flex">Ver todos los servicios</NavLink>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO title={service.title} description={service.summary} />
      <Section eyebrow="Servicio" title={service.title} description={service.long ?? service.summary}>
        {service.highlights && (
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {service.highlights.map((h) => (
              <li key={h} className="rounded-md border border-border bg-white p-4">{h}</li>
            ))}
          </ul>
        )}
      </Section>
      <Section title="Proceso" description="Transparente y efectivo de principio a fin." className="bg-surface">
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {['Descubrimiento', 'Diseño', 'Desarrollo', 'Entrega'].map((label, i) => (
            <li key={label} className="rounded-md border border-border bg-white p-5">
              <span className="text-xs text-ink/60">Paso {i + 1}</span>
              <h4 className="mt-1 font-semibold">{label}</h4>
              <p className="mt-2 text-sm text-ink/70">Colaboramos, iteramos y validamos con entregables claros.</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
