import SEO from '../components/SEO'

export default function Nosotros() {
  return (
    <>
      <SEO title="Nosotros" description="Jóvenes universitarios comprometidos con una universidad libre, exigente y justa." />

      {/* Filosofía */}
      <section className="py-16 md:py-24">
        <div className="container-app grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Filosofía</h2>
            <p className="mt-4 text-ink/80 md:text-lg">
              En Estudiants pel Canvi creemos en una universidad que premie el mérito,
              defienda la libertad y forme ciudadanos críticos y responsables. Construimos un
              espacio donde el esfuerzo y el talento sean el motor del progreso individual y colectivo.
            </p>
          </div>
          <img
            src="/Imagen7.jpg"
            alt="Movilización estudiantil"
            className="aspect-[4/3] w-full rounded-md border border-border object-cover shadow-soft"
          />
        </div>
      </section>

      {/* Visión y propósito */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-app grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <img
            src="/Imagen11.jpg"
            alt="Comunidad de estudiantes"
            className="order-1 aspect-[4/3] w-full rounded-md border border-border object-cover shadow-soft md:order-none"
          />
        
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Visión y Propósito</h2>
            <p className="mt-4 text-ink/80 md:text-lg">
              Queremos una comunidad estudiantil activa, libre de adoctrinamiento y con voz propia.
              Luchamos por una educación centrada en la excelencia, los valores y el servicio a la sociedad.
              Porque el futuro no se espera: se construye.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
