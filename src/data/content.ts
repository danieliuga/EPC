export type Service = {
  slug: string
  title: string
  summary: string
  long?: string
  highlights?: string[]
}

export type Project = {
  slug: string
  title: string
  summary: string
  cover: string
  impact?: string[]
}

export const services: Service[] = [
  {
    slug: 'formacion',
    title: 'Formación',
    summary: 'Charlas, debates abiertos y espacios de aprendizaje crítico para el estudiantado.',
    long: 'Impulsamos una comunidad universitaria informada, exigente y responsable. Organizamos ciclos de debates, talleres y encuentros donde se fomenta el pensamiento crítico y el mérito académico.',
    highlights: ['Charlas y debates', 'Talleres y jornadas', 'Materiales y guías']
  },
  {
    slug: 'acciones',
    title: 'Acciones',
    summary: 'Movilizaciones, campañas y presencia en las aulas para defender derechos estudiantiles.',
    long: 'Pasamos de las palabras a la acción: campañas institucionales, presencia en claustros y movilizaciones pacíficas para exigir una universidad libre y de excelencia.',
    highlights: ['Campañas', 'Propuestas en órganos', 'Movilizaciones']
  },
  {
    slug: 'comunidad',
    title: 'Comunidad',
    summary: 'Encuentros, actividades y cuidado mutuo: una red que permanece.',
    long: 'Creemos en la comunidad como base del cambio: quedadas, mentorías, espacios para desconectar y construir confianza.',
    highlights: ['Mentorías', 'Birras x EPC', 'Quedadas y cenas']
  },
]

export const projects: Project[] = [
  {
    slug: 'defensa-derechos',
    title: 'Defensa de derechos estudiantiles',
    summary: 'Campaña informativa y recogida de propuestas para frenar abusos y mejorar procesos académicos.',
    cover: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    impact: ['Participación en órganos universitarios', 'Propuestas elevadas a decanato']
  },
  {
    slug: 'libertad-academica',
    title: 'Libertad académica',
    summary: 'Acciones pacíficas y diálogo institucional para proteger la pluralidad en las aulas.',
    cover: 'https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=1600&auto=format&fit=crop'
  },
  {
    slug: 'mentorias-epc',
    title: 'Programa de mentorías EPC',
    summary: 'Acompañamiento a nuevos estudiantes y actividades para integrarse a la vida universitaria.',
    cover: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop'
  },
]
