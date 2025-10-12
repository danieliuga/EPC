import SEO from '../components/SEO'

export default function Contacto() {
  return (
    <>
      <SEO title="Contacto" description="¿Quieres que EPC forme parte de tu universidad? Escríbenos y creemos espacios de participación, formación y activismo estudiantil." />
      <section className="py-16 md:py-24">
        <div className="container-app">
          <h1 className="font-display text-3xl md:text-5xl">¿QUIERES QUE EPC FORME PARTE DE TU UNIVERSIDAD?</h1>
          <p className="mt-3 max-w-3xl text-ink/80 md:text-lg">¿Te gustaría que Estudiants pel Canvi estuviera en tu universidad? Estamos abiertas a crear nuevos espacios de participación, formación y activismo estudiantil. Contáctanos y hablemos de cómo hacerlo realidad en tu centro.</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl">Información de Contacto</h2>
              <div className="mt-4 space-y-3 text-sm text-ink/80">
                <div>
                  <div className="font-semibold">Lugar</div>
                  <p>Facultad de Derecho · Universidad de Barcelona · Av. Diagonal, 684</p>
                </div>
                <div>
                  <div className="font-semibold">Contacto</div>
                  <p>Email: estudiantspelcanvi@gmail.com</p>
                </div>
              </div>
            </div>
            <form id="donar" className="rounded-md border border-border bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl">¿Tienes ideas para mejorar la universidad?</h2>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm">Nombre</label>
                  <input className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary" required />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary" required />
                </div>
                <div>
                  <label className="text-sm">Número de teléfono</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm">Detalles adicionales</label>
                  <textarea rows={5} className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <button className="btn-primary w-full" type="submit">Enviar</button>
                </div>
              </div>
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
