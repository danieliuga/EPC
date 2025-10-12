import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <SEO title="Inicio" description="Acción, mérito y libertad académica. Jóvenes organizados para transformar la universidad." />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,176,39,0.08),_transparent_50%)] animate-slow-float" />
        <div className="container-app relative flex flex-col items-start py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            EPC — Estudiants Pel Canvi
          </span>
          <Reveal>
            <div className="reveal">
              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-6xl">
                Jóvenes que transforman la universidad.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg">
                Acción, mérito y libertad académica. Nos organizamos para recuperar la voz del estudiantado y construir una universidad justa.
              </p>
              <div className="mt-8 flex gap-3">
                <NavLink to="/contacto#donar" className="btn-primary">Donar</NavLink>
                <NavLink to="/proyectos" className="btn-ghost">Ver proyectos</NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-surface/60 py-3 text-sm text-ink/75">
        <div className="container-app overflow-hidden">
          <div className="marquee">
            <span>Libertad académica</span>
            <span>•</span>
            <span>Mérito</span>
            <span>•</span>
            <span>Pluralidad</span>
            <span>•</span>
            <span>Comunidad</span>
            <span>•</span>
            <span>Excelencia</span>
            <span>•</span>
            <span>Participación</span>
            <span>•</span>
            <span>Libertad académica</span>
            <span>•</span>
            <span>Mérito</span>
            <span>•</span>
            <span>Pluralidad</span>
            <span>•</span>
            <span>Comunidad</span>
          </div>
        </div>
      </div>

      {/* Highlights / KPIs */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { kpi: '12', label: 'Facultades con EPC' },
            { kpi: '80+', label: 'Actividades y acciones' },
            { kpi: '25', label: 'Propuestas presentadas' },
          ].map((item) => (
            <div key={item.label} className="rounded-md border border-border bg-white p-6 text-center shadow-soft">
              <div className="font-display text-4xl text-ink">{item.kpi}</div>
              <div className="mt-1 text-sm text-ink/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Image + text band */}
      <section className="py-16 md:py-24">
        <div className="container-app grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-md border border-border shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1600&auto=format&fit=crop"
              alt="Trabajo en equipo"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Formación, acciones y comunidad</h2>
            <p className="mt-3 text-ink/80 md:text-lg">Desde debates y talleres hasta movilizaciones y mentorías. Organizamos al estudiantado para recuperar su voz y construir una universidad mejor.</p>
            <div className="mt-6 flex gap-3">
              <NavLink to="/servicios" className="btn-primary">Servicios</NavLink>
              <NavLink to="/proyectos" className="btn-ghost">Casos</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Ejes de acción (mosaic) */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            { title: 'Formación', text: 'Charlas, debates libres y aprendizaje crítico.', img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop' },
            { title: 'Acción', text: 'Órganos universitarios, campañas y movilizaciones.', img: 'https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=1600&auto=format&fit=crop' },
            { title: 'Comunidad', text: 'Mentorías y apoyo entre compañeros.', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop' },
            { title: 'Diversión', text: 'Quedadas, cenas y Birras x EPC.', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76c6?q=80&w=1600&auto=format&fit=crop' },
          ].map((card) => (
            <Reveal key={card.title}>
              <div className="reveal relative overflow-hidden rounded-md border border-border shadow-soft">
                <img src={card.img} alt={card.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 rounded-md border border-border bg-white p-5 shadow-soft">
                  <h3 className="font-display text-xl text-ink">{card.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <h2 className="font-display text-3xl md:text-5xl">Agenda y acciones</h2>
          <ul className="mt-8 divide-y divide-border rounded-md border border-border bg-white">
            {[
              { date: '12 NOV', title: 'Asamblea abierta · Facultad de Derecho', tag: 'Próximo' },
              { date: '03 NOV', title: 'Entrega de propuestas a decanato', tag: 'Realizado' },
              { date: '28 OCT', title: 'Debate: Libertad académica y pluralidad', tag: 'Realizado' },
            ].map((e, idx) => (
              <li key={idx} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <span className="rounded-md border border-border px-3 py-2 font-display text-sm">{e.date}</span>
                  <span className="text-ink/90">{e.title}</span>
                </div>
                <span className={`rounded-full px-2 py-1 text-xs ${e.tag === 'Próximo' ? 'bg-primary/20 text-ink' : 'bg-ink/10 text-ink/80'}`}>{e.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-app grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { quote: 'EPC me dio voz y un espacio seguro para debatir en libertad.', name: 'Mar', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop' },
            { quote: 'Aprendí más en sus debates que en muchas clases magistrales.', name: 'Joel', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
            { quote: 'Pasamos de quejarse a proponer y a mover gente.', name: 'Clara', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
          ].map((t) => (
            <div key={t.name} className="rounded-md border border-border bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div className="font-semibold">{t.name}</div>
              </div>
              <p className="mt-3 text-ink/80">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Únete */}
      <section className="py-16 md:py-24">
        <div className="container-app rounded-md border border-border bg-white p-8 shadow-soft">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Únete hoy</h2>
              <p className="mt-2 text-ink/80">Suma tu voz y tu talento. Hagamos de la universidad un lugar mejor.</p>
            </div>
            <ol className="space-y-3 text-sm text-ink/80">
              {['Rellena el formulario', 'Súmate a un grupo local', 'Participa en la próxima acción'].map((s, i) => (
                <li key={s} className="flex items-center gap-2"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary font-semibold text-ink">{i+1}</span> {s}</li>
              ))}
            </ol>
            <div className="flex gap-3 md:justify-end">
              <NavLink to="/contacto#donar" className="btn-primary">Donar</NavLink>
              <NavLink to="/contacto" className="btn-ghost">Hablemos</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
