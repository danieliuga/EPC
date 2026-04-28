import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Página no encontrada" />
      <section className="py-24">
        <div className="container-app text-center">
          <p className="font-display text-8xl text-primary">404</p>
          <h1 className="mt-4 font-display text-2xl text-ink">Página no encontrada</h1>
          <p className="mt-2 text-ink/70">La página que buscas no existe o ha sido movida.</p>
          <NavLink to="/" className="btn-primary mt-8 inline-flex">Volver al inicio</NavLink>
        </div>
      </section>
    </>
  )
}
