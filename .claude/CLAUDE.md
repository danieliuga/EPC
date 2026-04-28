# EPC — Estudiants Pel Canvi

Web institucional de **EPC (Estudiants Pel Canvi)**, una organización de activismo estudiantil universitario con sede en la Facultad de Derecho de la Universidad de Barcelona (Av. Diagonal, 684). El lema de la organización es **"El Futuro Nos Pertenece"**.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework UI | React 19 |
| Lenguaje | TypeScript 5.9 |
| Bundler | Vite 7 |
| Estilos | Tailwind CSS 3.4 |
| Routing | react-router-dom v7 |
| SEO | react-helmet-async |
| Tailwind plugins | @tailwindcss/forms, @tailwindcss/typography, @tailwindcss/aspect-ratio |

Scripts disponibles: `dev`, `build` (tsc + vite), `lint`, `preview`.

---

## Paleta de colores

Definida en `tailwind.config.js` y en las CSS custom properties de `src/index.css`.

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#F5B027` | Dorado/ámbar — botones primarios, acentos, iconos, marcadores |
| `ink` (DEFAULT) | `#1A1A1A` | Texto principal |
| `ink.subtle` | `#2A2A2A` | Texto secundario oscuro |
| `surface` (DEFAULT) | `#FFFFFF` | Fondo de tarjetas y formularios |
| `surface.muted` | `#F7F7F8` | Fondo de secciones alternadas |
| `border` | `#E9EAEC` | Bordes de tarjetas, divisores, inputs |

CSS vars (espejo de los tokens):
```
--color-bg:       #FFFFFF
--color-ink:      #1A1A1A
--color-surface:  #F7F7F8
--color-border:   #E9EAEC
--color-primary:  #F5B027
```

La selección de texto usa `background: var(--color-primary); color: #111`.

---

## Tipografía

| Rol | Familia | Uso |
|---|---|---|
| `font-sans` | Plus Jakarta Sans → system-ui | Cuerpo de texto, párrafos, UI |
| `font-display` | Sora → system-ui | Títulos (`h1`–`h4`), números grandes |

---

## Tokens de diseño adicionales

- **Border radius `md`**: `10px` (sobreescribe el valor por defecto de Tailwind)
- **Box shadow `soft`**: `0 6px 24px rgba(0,0,0,0.06)`
- **Easing `smooth`**: `cubic-bezier(0.22, 1, 0.36, 1)`

---

## Estructura de rutas

```
/                        → Home
/servicios               → Listado de servicios
/servicios/:slug         → Detalle de servicio
/proyectos               → Listado de proyectos + carrusel
/proyectos/:slug         → Detalle de proyecto
/nosotros                → Filosofía + Visión y propósito
/contacto                → Formulario de contacto + info
/contacto/donar          → Página de membresías / donar
```

---

## Estructura de archivos (`src/`)

```
src/
├── main.tsx               Punto de entrada (monta App con HelmetProvider + BrowserRouter)
├── App.tsx                Definición de rutas
├── index.css              Tokens CSS, clases reutilizables, animaciones
├── App.css                (vacío / mínimo)
├── data/
│   └── content.ts         Datos estáticos: services[], projects[]
├── components/
│   ├── Layout.tsx          Wrapper global: Header + <main> + Footer
│   ├── Header.tsx          Barra fija sticky con menú desktop/mobile y CTAs
│   ├── Footer.tsx          Footer con links, redes sociales y copyright
│   ├── Section.tsx         Sección reutilizable: eyebrow + title + description + children
│   ├── Carousel.tsx        Carrusel horizontal snap con autoplay, dots e indicadores
│   ├── Reveal.tsx          Wrapper de animación scroll con IntersectionObserver
│   └── SEO.tsx             Head tags (Helmet): title, description, OG, Twitter
└── pages/
    ├── Home.tsx            Hero slideshow, KPIs animados, marquee, mosaico ejes, agenda, testimonios
    ├── Servicios.tsx       Grid de cards de servicios
    ├── ServicioDetalle.tsx Detalle dinámico por slug + proceso en 4 pasos
    ├── Proyectos.tsx       Ejes de acción (grid) + listado projects + Carousel destacados
    ├── ProyectoDetalle.tsx Detalle dinámico de proyecto por slug
    ├── Nosotros.tsx        Filosofía + Visión y propósito
    ├── Contacto.tsx        Formulario de contacto con honeypot anti-spam
    └── Donar.tsx           4 planes de membresía en grid de tarjetas con imagen
```

---

## Clases CSS reutilizables

Definidas en `@layer components` y `@layer utilities` de `index.css`:

| Clase | Descripción |
|---|---|
| `.container-app` | `mx-auto max-w-7xl px-6` — contenedor principal |
| `.btn-primary` | Botón dorado (color `primary`), con hover lift y focus ring |
| `.btn-ghost` | Botón gris con borde, texto blanco, hover oscurece |
| `.reveal` | Estado inicial de animación scroll (opacidad 0, desplazado) |
| `.marquee` | Animación de scroll horizontal infinito (25s) |
| `.animate-slow-float` | Flotación suave de 10s (usada en overlay del hero) |
| `.no-scrollbar` | Oculta la barra de scroll (usada en Carousel) |

---

## Datos (`src/data/content.ts`)

### Servicios (`services[]`)
| Slug | Título |
|---|---|
| `formacion` | Formación — charlas, debates, talleres |
| `acciones` | Acciones — campañas, claustros, movilizaciones |
| `comunidad` | Comunidad — mentorías, quedadas, Birras x EPC |

### Proyectos (`projects[]`)
| Slug | Título | Cover |
|---|---|---|
| `defensa-derechos` | Defensa de derechos estudiantiles | `/Imagen1.jpg` |
| `libertad-academica` | Libertad académica | `/Imagen10.jpg` |
| `mentorias-epc` | Programa de mentorías EPC | `/Imagen9.jpg` |

---

## Imágenes

- **Imágenes locales** en `/public/`: `Imagen1.jpg` → `Imagen11.jpg` y `LOGO PNG LETRAS GRISES.png`
- Algunas páginas usan imágenes de **Unsplash** como fallback (Contacto, Donar, Proyectos)
- El Hero hace slideshow automático entre Imagen1–Imagen11, cambiando cada 3 s

---

## Componentes clave — notas de comportamiento

### `Header`
- Sticky (`top-0 z-50`), fondo con backdrop-blur
- Menú hamburguesa en mobile; nav horizontal en `md+`
- Logo: `/LOGO PNG LETRAS GRISES.png` (112×112 px)
- CTA fijos: **Donar** (`btn-primary` → `/contacto/donar`) y **Hablemos** (`btn-ghost` → `/contacto`)
- Menú mobile: panel deslizante con backdrop negro semitransparente

### `Reveal`
- Usa `IntersectionObserver` con threshold 0.15
- El wrapper establece `data-inview="true"` al entrar en viewport
- Los hijos directos con clase `.reveal` se animan via CSS (`[data-inview="true"] > .reveal`)

### `Carousel`
- Scroll horizontal nativo con `snap-x snap-mandatory`
- Autoplay opcional (`auto`, `intervalMs`)
- Dots de navegación; flechas opcionales (`hideArrows`)
- Ratio configurable (`ratioClass`, default `aspect-[16/9]`)

### `Section`
- Props: `eyebrow?`, `title`, `description?`, `actions?`, `children?`, `className?`
- El eyebrow se muestra como pill con punto dorado
- Padding por defecto: `py-16 md:py-24`

### `SEO`
- `rawTitle=true` usa el título tal cual; si no, añade ` — EPC`
- Default title: `EPC — Diseño + Tecnología`
- Default description: `Proyectos de alto impacto con resultados medibles.`

---

## Contacto oficial

- Email: `estudiantspelcanvi@gmail.com`
- Sede: Facultad de Derecho, Universitat de Barcelona, Av. Diagonal, 684
- Redes: YouTube, Telegram, Instagram, TikTok, X (enlaces pendientes de configurar)

---

## Convenciones del proyecto

- Idioma del UI: **castellano** (con algún término en catalán en el nombre oficial)
- No hay backend ni API — los datos son estáticos en `content.ts`
- No hay sistema de autenticación
- Los formularios no tienen lógica de envío implementada (solo estructura HTML + honeypot)
- No hay tests configurados
- El formulario de Contacto incluye un **honeypot** anti-spam (`input[name="company"]` oculto)
