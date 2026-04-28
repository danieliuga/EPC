export type Service = {
  slug: string
  title: string
  summary: string
  long?: string
  highlights?: string[]
  image?: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  cover: string
  status?: 'En curso' | 'Realizado'
  period?: string
  impact?: string[]
  gallery?: string[]
}

export type Event = {
  date: string
  title: string
  tag: 'Próximo' | 'Realizado'
}

export const services: Service[] = [
  {
    slug: 'formacion',
    title: 'Formación',
    summary: 'Charlas, debates abiertos y espacios de aprendizaje crítico para el estudiantado.',
    long: 'Impulsamos una comunidad universitaria informada, exigente y responsable. Organizamos ciclos de debates, talleres y encuentros donde se fomenta el pensamiento crítico y el mérito académico.',
    highlights: ['Charlas y debates', 'Talleres y jornadas', 'Materiales y guías'],
    image: '/Imagen7.jpg',
  },
  {
    slug: 'acciones',
    title: 'Acciones',
    summary: 'Movilizaciones, campañas y presencia en las aulas para defender derechos estudiantiles.',
    long: 'Pasamos de las palabras a la acción: campañas institucionales, presencia en claustros y movilizaciones pacíficas para exigir una universidad libre y de excelencia.',
    highlights: ['Campañas institucionales', 'Propuestas en órganos', 'Movilizaciones pacíficas'],
    image: '/Imagen5.jpg',
  },
  {
    slug: 'comunidad',
    title: 'Comunidad',
    summary: 'Encuentros, actividades y cuidado mutuo: una red que permanece.',
    long: 'Creemos en la comunidad como base del cambio: quedadas, mentorías, espacios para desconectar y construir confianza.',
    highlights: ['Mentorías entre estudiantes', 'Birras x EPC', 'Quedadas y cenas'],
    image: '/Imagen8.jpg',
  },
]

export const projects: Project[] = [
  {
    slug: 'defensa-derechos',
    title: 'Defensa de derechos estudiantiles',
    summary: 'Campaña informativa y recogida de propuestas para frenar abusos y mejorar procesos académicos.',
    cover: '/Imagen1.jpg',
    status: 'Realizado',
    period: 'Feb – May 2024',
    impact: ['Participación en órganos universitarios', 'Propuestas elevadas a decanato'],
    gallery: ['/Imagen1.jpg', '/Imagen2.jpg', '/Imagen3.jpg'],
  },
  {
    slug: 'libertad-academica',
    title: 'Libertad académica',
    cover: '/Imagen10.jpg',
    summary: 'Acciones pacíficas y diálogo institucional para proteger la pluralidad en las aulas.',
    status: 'En curso',
    period: 'Mar 2024 – presente',
    impact: ['Presencia activa en claustros de facultad', 'Alianzas con otros colectivos universitarios'],
    gallery: ['/Imagen10.jpg', '/Imagen4.jpg', '/Imagen5.jpg'],
  },
  {
    slug: 'mentorias-epc',
    title: 'Programa de mentorías EPC',
    cover: '/Imagen9.jpg',
    summary: 'Acompañamiento a nuevos estudiantes y actividades para integrarse a la vida universitaria.',
    status: 'En curso',
    period: 'Sep 2024 – presente',
    impact: ['Más de 30 estudiantes acompañados', 'Red de mentores activos en la facultad'],
    gallery: ['/Imagen9.jpg', '/Imagen6.jpg', '/Imagen7.jpg'],
  },
]

export const events: Event[] = [
  { date: '15 MAY', title: 'Asamblea abierta — Facultad de Derecho', tag: 'Próximo' },
  { date: '03 ABR', title: 'Entrega de propuestas a decanato', tag: 'Realizado' },
  { date: '20 MAR', title: 'Debate: Libertad académica y pluralidad', tag: 'Realizado' },
]

// Actualiza estos enlaces con las URLs reales de las redes sociales de EPC
export const socialUrls = {
  youtube: '#',
  telegram: '#',
  instagram: '#',
  tiktok: '#',
  x: '#',
}
