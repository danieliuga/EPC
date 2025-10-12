import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import { projects } from '../data/content'
import SEO from '../components/SEO'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <div className="container-app py-20">Proyecto no encontrado.</div>

  return (
    <>
      <SEO title={project.title} description={project.summary} />
      <Section eyebrow="Proyecto" title={project.title} description={project.summary}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <img src={project.cover} alt="Portada" className="col-span-2 aspect-video w-full rounded-md border border-border object-cover shadow-soft" />
          <div className="rounded-md border border-border bg-white p-6">
            <h4 className="font-semibold">Resultados</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/80">
              {(project.impact ?? ['Mejoras medibles en conversión', 'Carga rápida y accesible AA']).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Galería" className="bg-surface">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img
              key={n}
              src={`${project.cover}&sig=${n}`}
              alt={`Imagen ${n}`}
              className="aspect-[4/3] w-full rounded-md border border-border object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </Section>
    </>
  )
}

