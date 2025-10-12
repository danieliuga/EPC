import { useEffect, useRef, useState } from 'react'

type CarouselItem = {
  id: string
  image: string
  title: string
  subtitle?: string
}

type CarouselProps = {
  items: CarouselItem[]
  auto?: boolean
  intervalMs?: number
  hideArrows?: boolean
  ratioClass?: string
}

export default function Carousel({ items, auto = false, intervalMs = 4000, hideArrows = false, ratioClass = 'aspect-[16/9]' }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollToIndex = (i: number) => {
    const el = viewportRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(i, items.length - 1))
    setIndex(clamped)
    el.scrollTo({ left: el.clientWidth * clamped, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth)
      setIndex(i)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!auto || items.length === 0) return
    const id = setInterval(() => {
      const next = (index + 1) % items.length
      scrollToIndex(next)
    }, intervalMs)
    return () => clearInterval(id)
  }, [auto, intervalMs, index, items.length])

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        aria-roledescription="carousel"
      >
        <div className="flex w-full">
          {items.map((item) => (
            <article
              key={item.id}
              className="min-w-full snap-start"
              aria-label={item.title}
            >
              <div className={`relative ${ratioClass} w-full overflow-hidden rounded-md border border-border bg-surface shadow-soft`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                  <h3 className="font-display text-xl md:text-2xl">{item.title}</h3>
                  {item.subtitle && <p className="text-sm opacity-90">{item.subtitle}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2 w-6 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-ink/20 hover:bg-ink/40'}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        {!hideArrows && (
          <div className="flex gap-2">
            <button className="btn-ghost py-2 px-3" onClick={() => scrollToIndex(index - 1)}>Anterior</button>
            <button className="btn-primary py-2 px-3" onClick={() => scrollToIndex(index + 1)}>Siguiente</button>
          </div>
        )}
      </div>
    </div>
  )
}
