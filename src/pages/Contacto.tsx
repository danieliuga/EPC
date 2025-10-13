import SEO from '../components/SEO'

export default function Contacto() {
  return (
    <>
      <SEO
        title="Contacto"
        description="¿Quieres que EPC forme parte de tu universidad? Escríbenos y creemos espacios de participación, formación y activismo estudiantil."
      />

      <section className="py-16 md:py-24">
        <div className="container-app">
          <h1 className="font-display text-3xl md:text-5xl">
            ¿QUIERES QUE EPC FORME PARTE DE TU UNIVERSIDAD?
          </h1>

          <p className="mt-3 max-w-3xl text-ink/80 md:text-lg">
            ¿Te gustaría que Estudiants pel Canvi estuviera en tu universidad? Estamos abiertas a crear nuevos espacios de participación, formación y activismo estudiantil. Contáctanos y hablemos de cómo hacerlo realidad en tu centro.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Columna izquierda: Información de contacto + imagen una debajo de otra, mismas alturas */}
            <div className="flex flex-col gap-6">
              {/* Contenedor con altura fija o adaptable */}
              <div className="flex flex-col justify-between h-[480px] md:h-[500px]">
                {/* Tarjeta compacta */}
                <div className="rounded-md border border-border bg-white p-5 shadow-soft flex-1">
                  <h2 className="font-display text-lg">Información de contacto</h2>
                  <div className="mt-3 space-y-2 text-[13px] leading-tight text-ink/80">
                    <div>
                      <div className="font-semibold text-ink/90">Lugar</div>
                      <p>Facultad de Derecho · Universidad de Barcelona · Av. Diagonal, 684</p>
                    </div>
                    <div>
                      <div className="font-semibold text-ink/90">Contacto</div>
                      <p>
                        Email:{' '}
                        <a
                          href="mailto:estudiantspelcanvi@gmail.com"
                          className="underline underline-offset-2 hover:text-ink"
                        >
                          estudiantspelcanvi@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Imagen igual altura que la tarjeta */}
                <figure className="relative overflow-hidden rounded-md border border-border shadow-soft flex-1 mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1600&auto=format&fit=crop"
                    alt="Trabajo en equipo en la universidad"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <figcaption className="absolute bottom-3 left-3 right-3 text-xs text-white/90">
                    Construyamos espacios de participación y formación juntos.
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Columna derecha: formulario */}
            <form id="donar" className="rounded-md border border-border bg-white p-6 shadow-soft self-start">
              <h2 className="font-display text-xl">¿Tienes ideas para mejorar la universidad?</h2>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="tel" className="text-sm">Número de teléfono</label>
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm">Detalles adicionales</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 w-full rounded-md border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <button className="btn-primary w-full" type="submit">Enviar</button>
                </div>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
