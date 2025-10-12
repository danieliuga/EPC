import Section from '../components/Section'
import Carousel from '../components/Carousel'
import { projects } from '../data/content'
import SEO from '../components/SEO'
import { NavLink } from 'react-router-dom'

export default function Proyectos() {
  return (
    <>
      <SEO title="Proyectos" description="Selección de proyectos con enfoque en impacto y medición." />
      <Section eyebrow="Ejes de acción" title="Lo que hacemos en EPC" description="Formación, movilización y comunidad para transformar la universidad.">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              title: 'Formación',
              text: 'Apostamos por la formación crítica del estudiantado. Charlas, debates abiertos y espacios de aprendizaje colectivo.',
              img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop'
            },
            {
              title: 'Acciones',
              text: 'Movilizaciones, campañas y presencia en las aulas. Pasamos de las palabras a la acción para defender los derechos de los estudiantes.',
              img: 'https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=1600&auto=format&fit=crop'
            },
            {
              title: 'Birras X EPC',
              text: 'Espacio informal para desconectar, charlar y conocernos mejor. La comunidad también se construye entre risas y birras.',
              img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76c6?q=80&w=1600&auto=format&fit=crop'
            },
            {
              title: 'Diversión',
              text: 'Organizamos quedadas, cenas y actividades para crear comunidad fuerte.',
              img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop'
            }
          ].map((card) => (
            <div key={card.title} className="relative overflow-hidden rounded-md border border-border shadow-soft">
              <img src={card.img} alt={card.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute bottom-6 left-6 right-6 rounded-md border border-border bg-white p-5 shadow-soft">
                <h3 className="font-display text-xl text-ink">{card.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trabajo" title="Proyectos" description="Historias de problema → solución → resultado.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <NavLink to={`/proyectos/${p.slug}`} key={p.slug} className="block overflow-hidden rounded-md border border-border bg-white shadow-soft">
              <img src={p.cover} alt={p.title} className="aspect-video w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{p.summary}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </Section>
      <Section title="Destacados" description="Un vistazo rápido a algunos casos." className="bg-surface">
        <Carousel
          items={projects.map((p) => ({ id: p.slug, image: p.cover, title: p.title, subtitle: p.summary }))}
        />
      </Section>
    </>
  )
}
