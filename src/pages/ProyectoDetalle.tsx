import { useParams, NavLink } from 'react-router-dom'
import Section from '../components/Section'
import { projects } from '../data/content'
import SEO from '../components/SEO'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="py-24">
        <div className="container-app text-center">
          <p className="font-display text-5xl text-primary">404</p>
          <h1 className="mt-4 font-display text-2xl text-ink">Proyecto no encontrado</h1>
          <p className="mt-2 text-ink/70">El proyecto que buscas no existe o ha sido eliminado.</p>
          <NavLink to="/proyectos" className="btn-primary mt-6 inline-flex">Ver todos los proyectos</NavLink>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO title={project.title} description={project.summary} />
      <Section eyebrow="Proyecto" title={project.title} description={project.summary}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <img src={project.cover} alt="Portada" className="col-span-2 aspect-video w-full rounded-md border border-border object-cover shadow-soft" />
          <div className="rounded-md border border-border bg-white p-6">
            <h4 className="font-semibold">Resultados</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/80">
              {(project.impact ?? []).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {project.gallery && project.gallery.length > 0 && (
        <Section title="Galería" className="bg-surface">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.gallery.map((src, n) => (
              <img
                key={n}
                src={src}
                alt={`${project.title} — imagen ${n + 1}`}
                className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
