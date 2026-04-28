import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import ServicioDetalle from './pages/ServicioDetalle'
import Proyectos from './pages/Proyectos'
import ProyectoDetalle from './pages/ProyectoDetalle'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Donar from './pages/Donar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <SplashScreen />
      <HelmetProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/servicios/:slug" element={<ServicioDetalle />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/contacto/donar" element={<Donar />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
