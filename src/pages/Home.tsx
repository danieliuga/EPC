import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { NavLink } from 'react-router-dom'
import Carousel from '../components/Carousel'

export default function Home() {
  // Hero slideshow images and index
  const heroImages = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600&auto=format&fit=crop',
  ]
  const [heroIndex, setHeroIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 3000)
    return () => clearInterval(id)
  }, [])
  function CountUp({ value, duration = 1500, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
    const [display, setDisplay] = useState(0)
    useEffect(() => {
      let raf = 0
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        setDisplay(Math.floor(p * value))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(raf)
    }, [value, duration])
    return <span>{display}{suffix}</span>
  }
  return (
    <>
      <SEO title="Inicio" description="Acción, mérito y libertad académica. Jóvenes organizados para transformar la universidad." />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        {/* Background slideshow */}
        <div className="absolute inset-0">
          {heroImages && heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Fondo hero"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
              loading="eager"
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,176,39,0.08),_transparent_50%)] animate-slow-float" />
        <div className="container-app relative flex flex-col items-center text-center py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            EPC — Estudiants Pel Canvi
          </span>
          <Reveal>
            <div className="reveal">
              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-6xl sr-only">
                Jóvenes que transforman la universidad.
              </h1>
              <h1 className="mt-6 max-w-4xl font-display text-4xl leading-tight tracking-tight text-white md:text-6xl">El Futuro Nos Pertenece</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                Acción, mérito y libertad académica. Nos organizamos para recuperar la voz del estudiantado y construir una universidad justa.
              </p>
              <div className="mt-8 flex gap-3 flex-col md:flex-row w-full md:w-auto justify-center">
                <NavLink to="/contacto#unete" className="btn-primary w-full md:w-auto">Únete a EPC</NavLink>
                <NavLink
                  to="/proyectos"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink shadow-soft transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  Ver proyectos
                </NavLink>
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
      <section className="py-20 bg-surface">
        <div className="container-app grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { value: 12, suffix: '', label: 'Facultades con EPC', percent: 60, icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 10l9-6 9 6" />
                <path d="M4 10v10h16V10" />
                <path d="M9 21V9h6v12" />
              </svg>
            )},
            { value: 80, suffix: '+', label: 'Actividades y acciones', percent: 80, icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 4h-2v6H5v2h6v6h2v-6h6v-2h-6z" />
              </svg>
            )},
            { value: 25, suffix: '', label: 'Propuestas presentadas', percent: 50, icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2h9l5 5v15H6z" />
                <path d="M14 2v6h6" />
              </svg>
            )},
          ].map((item) => (
            <div key={item.label} className="rounded-md border border-border bg-white p-6 text-center shadow-soft">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                {item.icon}
              </div>
              <div className="font-display text-4xl text-ink">
                <CountUp value={item.value} suffix={item.suffix} />
              </div>
              <div className="mt-1 text-sm text-ink/70">{item.label}</div>
              <div className="mt-4 h-2 w-full rounded-full bg-ink/10">
                <div className="h-full rounded-full bg-primary transition-[width] duration-1000" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image + text band */}
      <section className="py-20">
        <div className="container-app grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-md border border-border shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1600&auto=format&fit=crop"
              alt="Trabajo en equipo"
              className="aspect-[16/10] w-full object-cover"
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
            { title: 'Diversión', text: 'Quedadas, cenas y Birras x EPC.', img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600&auto=format&fit=crop' },
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
      <section className="py-10 md:py-14">
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
                  <span className="rounded-md border border-transparent bg-primary text-ink px-3 py-2 font-display text-sm">{e.date}</span>
                  <span className="text-ink/90">{e.title}</span>
                </div>
                <span className={`rounded-full px-2 py-1 text-xs ${e.tag === 'Próximo' ? 'bg-primary/20 text-ink' : 'bg-ink/10 text-ink/80'}`}>{e.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonios (nuevo carrusel) */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-app">
          <Carousel
            auto
            intervalMs={5000}
            hideArrows
            ratioClass="aspect-[16/6]"
            items={[
              {
                id: 't1',
                image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop',
                title: '“EPC me dio voz y un espacio seguro para debatir en libertad.”',
                subtitle: 'Mar',
              },
              {
                id: 't2',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop',
                title: '“Aprendí más en sus debates que en muchas clases magistrales.”',
                subtitle: 'Joel',
              },
              {
                id: 't3',
                image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop',
                title: '“Pasamos de quejarse a proponer y a mover gente.”',
                subtitle: 'Santi',
              },
            ]}
          />
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
