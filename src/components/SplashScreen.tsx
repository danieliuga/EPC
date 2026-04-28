import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [fading, setFading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2700)
    const t2 = setTimeout(() => setDone(true), 3600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
      style={{
        background: '#1A1A1A',
        pointerEvents: fading ? 'none' : 'auto',
        ...(fading ? { animation: 'splashExit 0.9s ease-in forwards' } : {}),
      }}
    >
      {/* Resplandor dorado de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,176,39,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Logo */}
      <img
        src="/LOGO PNG LETRAS BLANCAS.png"
        alt="EPC"
        className="relative z-10 select-none"
        draggable={false}
        style={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          animation: 'splashDrop 0.7s cubic-bezier(0.22,1,0.36,1) both, splashGlow 0.75s ease-out 0.55s both',
        }}
      />

      {/* Línea dorada */}
      <div
        className="relative z-10"
        style={{
          width: 210,
          height: 1,
          transformOrigin: 'center',
          background: 'linear-gradient(to right, transparent, #F5B027 40%, #F5B027 60%, transparent)',
          animation: 'splashLine 0.55s ease-out 0.85s both',
        }}
      />

      {/* Nombre */}
      <h1
        className="relative z-10 font-display text-3xl md:text-5xl tracking-widest text-center"
        style={{
          color: '#FFFFFF',
          animation: 'splashReveal 0.9s cubic-bezier(0.4,0,0.2,1) 1.15s both',
        }}
      >
        Estudiants Pel Canvi
      </h1>

      {/* Subtítulo */}
      <p
        className="relative z-10 font-sans text-xs uppercase tracking-[0.35em] text-center"
        style={{
          color: 'rgba(245,176,39,0.6)',
          animation: 'splashSubtitle 0.65s ease-out 1.9s both',
        }}
      >
        El Futuro Nos Pertenece
      </p>
    </div>
  )
}
