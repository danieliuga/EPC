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
    cover: '/Imagen1.jpg',
    impact: ['Participación en órganos universitarios', 'Propuestas elevadas a decanato']
  },
  {
    slug: 'libertad-academica',
    title: 'Libertad académica',
    cover: '/Imagen10.jpg',
    summary: 'Acciones pacíficas y diálogo institucional para proteger la pluralidad en las aulas.'
  },
  {
    slug: 'mentorias-epc',
    title: 'Programa de mentorías EPC',
    cover: '/Imagen9.jpg',
    summary: 'Acompañamiento a nuevos estudiantes y actividades para integrarse a la vida universitaria.'
  },
]
