import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { NavLink } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { events } from '../data/content'

const images = [
  '/Imagen1.jpg', '/Imagen2.jpg', '/Imagen3.jpg', '/Imagen4.jpg',
  '/Imagen5.jpg', '/Imagen6.jpg', '/Imagen7.jpg', '/Imagen8.jpg',
  '/Imagen9.jpg', '/Imagen10.jpg', '/Imagen11.jpg',
]

const ejes = [
  { title: 'Formación', text: 'Charlas, debates libres y espacios de aprendizaje crítico donde el pensamiento se forja y se pone a prueba.', img: '/Imagen7.jpg', to: '/servicios/formacion' },
  { title: 'Acción', text: 'Movilizaciones, campañas y presencia real en los órganos universitarios. Las palabras no bastan: hay que actuar.', img: '/Imagen5.jpg', to: '/servicios/acciones' },
  { title: 'Comunidad', text: 'Mentorías, quedadas y el espacio informal de las Birras x EPC. La red más sólida empieza con una conversación.', img: '/Imagen8.jpg', to: '/servicios/comunidad' },
  { title: 'Diversión', text: 'Porque el cambio también se celebra. Cenas, actividades y momentos que construyen comunidad para siempre.', img: '/Imagen10.jpg', to: '/servicios' },
]

const testimonials = [
  { quote: 'EPC me dio voz y un espacio seguro para debatir en libertad. Fue completamente transformador.', name: 'Mar', role: 'Estudiante de Derecho, 3r curso', initials: 'M' },
  { quote: 'Aprendí más en sus debates que en muchas clases magistrales. El nivel de los compañeros es increíble.', name: 'Joel', role: 'Estudiante de Económicas, 2º curso', initials: 'J' },
  { quote: 'Pasamos de quejarse a proponer y a mover gente. Por fin una organización que actúa de verdad.', name: 'Santi', role: 'Delegado de facultad', initials: 'S' },
]

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <SEO title="Estudiants Pel Canvi" rawTitle description="Acción, mérito y libertad académica. Jóvenes organizados para transformar la universidad." />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,176,39,0.08),_transparent_60%)] animate-slow-float" />

        <div className="container-app relative z-10 flex flex-col items-start py-20 md:py-32">
          <Reveal>
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              EPC — Estudiants Pel Canvi
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="reveal mt-6 font-display text-white leading-[0.88] tracking-tighter"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
            >
              El Futuro<br />Nos Pertenece
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="reveal">
              <p className="mt-6 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
                Acción, mérito y libertad académica. Nos organizamos para recuperar la voz del estudiantado y construir una universidad justa.
              </p>
              <div className="mt-8 flex gap-3 flex-col sm:flex-row">
                <NavLink to="/contacto#unete" className="btn-primary">Únete a EPC</NavLink>
                <NavLink to="/proyectos" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                  Ver proyectos
                </NavLink>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none select-none" aria-hidden>
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-ink py-3 overflow-hidden">
        <div className="marquee text-sm text-white/40 gap-10">
          {['Libertad académica', '·', 'Mérito', '·', 'Pluralidad', '·', 'Comunidad', '·', 'Excelencia', '·', 'Participación', '·', 'Libertad académica', '·', 'Mérito', '·', 'Pluralidad', '·', 'Comunidad', '·', 'Excelencia', '·', 'Participación'].map((t, i) => (
            <span key={i} className={t === '·' ? 'text-primary' : ''}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── KPIs ── */}
      <section className="bg-ink">
        <div className="container-app">
          <div className="grid grid-cols-1 divide-y divide-white/8 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              { value: 12, suffix: '', label: 'Facultades con EPC' },
              { value: 80, suffix: '+', label: 'Actividades y acciones' },
              { value: 25, suffix: '', label: 'Propuestas presentadas' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center py-16 px-8 text-center">
                <div className="font-display text-5xl md:text-6xl text-primary leading-none tabular-nums">
                  <CountUp value={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-3 text-[11px] font-medium uppercase tracking-widest text-white/30">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFIESTO split ── */}
      <section className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-primary flex items-center px-8 py-20 md:px-16 md:py-28">
            <Reveal>
              <div className="reveal">
                <h2 className="font-display text-5xl md:text-6xl text-ink leading-[0.88] tracking-tight">
                  Acción.<br />Mérito.<br />Libertad.
                </h2>
                <p className="mt-6 max-w-xs text-ink/65 leading-relaxed">
                  Nos organizamos porque la universidad que queremos no existe todavía. Juntos la construimos.
                </p>
                <NavLink
                  to="/nosotros"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink border-b-2 border-ink/30 hover:border-ink transition-colors pb-0.5"
                >
                  Nuestra filosofía →
                </NavLink>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[360px] md:min-h-0">
            <img src="/Imagen6.jpg" alt="EPC en acción" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── EJES — franjas horizontales alternadas ── */}
      <section>
        <div className="container-app pt-16 pb-10">
          <Reveal>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Cómo actuamos
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">Ejes de acción</h2>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {ejes.map((card, i) => (
            <div
              key={card.title}
              className={`grid grid-cols-1 md:grid-cols-2 border-b border-border`}
            >
              {/* Imagen */}
              <div className={`relative overflow-hidden min-h-[300px] md:min-h-[420px] ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              {/* Texto */}
              <div className="flex items-center px-8 py-14 md:px-14 lg:px-20 bg-white">
                <Reveal>
                  <div className="reveal">
                    <span
                      className="font-display leading-none text-ink/[0.06] select-none block"
                      style={{ fontSize: 'clamp(5rem, 11vw, 10rem)' }}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-ink -mt-3">{card.title}</h3>
                    <p className="mt-4 text-ink/70 leading-relaxed max-w-sm">{card.text}</p>
                    <NavLink
                      to={card.to}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink/40 hover:text-ink transition-colors group"
                    >
                      Saber más
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </NavLink>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section className="py-14 md:py-20 bg-surface">
        <div className="container-app">
          <Reveal>
            <div className="reveal">
              <div className="mb-3 h-1 w-10 rounded-full bg-primary" />
              <h2 className="font-display text-4xl md:text-5xl text-ink">Agenda</h2>
            </div>
          </Reveal>
          <ul className="mt-8 divide-y divide-border rounded-md border border-border bg-white overflow-hidden">
            {events.map((e, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <li className="reveal flex items-center justify-between p-4 md:p-5 transition-colors hover:bg-surface">
                  <div className="flex items-center gap-4">
                    <span className="rounded-md bg-primary text-ink px-3 py-2 font-display text-sm font-semibold shrink-0">{e.date}</span>
                    <span className="text-ink/90 text-sm md:text-base">{e.title}</span>
                  </div>
                  <span className={`shrink-0 ml-4 rounded-full px-3 py-1 text-xs font-medium ${e.tag === 'Próximo' ? 'bg-primary/20 text-ink' : 'bg-ink/8 text-ink/50'}`}>
                    {e.tag}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <Reveal>
            <div className="reveal mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Lo que dicen
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">Testimonios</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className="reveal flex flex-col rounded-md border border-border bg-white p-7 shadow-soft">
                  {/* Comilla decorativa */}
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="currentColor" className="text-primary mb-5 shrink-0" aria-hidden>
                    <path d="M0 26V16.12C0 11.4 1.307 7.787 3.92 5.28 6.587 2.773 10.507 1.147 15.68.4L16.96 3.44C14.24 4.08 12.107 5.147 10.56 6.64 9.067 8.08 8.267 9.893 8.16 12.08H13.6V26H0zm18.4 0V16.12c0-4.72 1.307-8.333 3.92-10.84C24.987 2.773 28.907 1.147 34.08.4L35.36 3.44c-2.72.64-4.853 1.707-6.4 3.2-1.493 1.44-2.293 3.253-2.4 5.44H32V26H18.4z"/>
                  </svg>
                  <p className="flex-1 text-ink/80 leading-relaxed text-[15px]">{t.quote}</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center font-display font-bold text-ink text-sm select-none">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{t.name}</p>
                      <p className="text-xs text-ink/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARRUSEL proyectos ── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-app">
          <Reveal>
            <div className="reveal mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />Proyectos
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">Lo que hemos logrado</h2>
            </div>
          </Reveal>
          <Carousel
            auto
            intervalMs={5000}
            ratioClass="aspect-[16/7]"
            items={[
              { id: 'p1', image: '/Imagen1.jpg', title: 'Defensa de derechos estudiantiles', subtitle: 'Propuestas elevadas a decanato' },
              { id: 'p2', image: '/Imagen10.jpg', title: 'Libertad académica', subtitle: 'Acciones pacíficas y diálogo institucional' },
              { id: 'p3', image: '/Imagen9.jpg', title: 'Programa de mentorías EPC', subtitle: 'Acompañamiento a nuevos estudiantes' },
            ]}
          />
        </div>
      </section>

      {/* ── CTA FINAL — fondo dorado ── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-app">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="mb-3 h-1 w-10 rounded-full bg-ink/25" />
              <h2 className="font-display text-3xl md:text-4xl text-ink">Únete hoy</h2>
              <p className="mt-3 text-ink/65 leading-relaxed">Suma tu voz y tu talento. Hagamos de la universidad un lugar mejor.</p>
            </div>
            <ol className="space-y-4 text-sm md:col-span-1">
              {['Rellena el formulario', 'Súmate a un grupo local', 'Participa en la próxima acción'].map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-display font-bold text-white text-sm">{i + 1}</span>
                  <span className="text-ink/75">{s}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <NavLink
                to="/contacto/donar"
                className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Donar
              </NavLink>
              <NavLink
                to="/contacto"
                className="inline-flex items-center justify-center rounded-md border-2 border-ink/20 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink/8"
              >
                Hablemos
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
