import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  rawTitle?: boolean
}

const DEFAULT_IMAGE = '/Imagen1.jpg'
const DEFAULT_DESC = 'Acción, mérito y libertad académica. Jóvenes organizados para transformar la universidad.'

const ORG_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Estudiants Pel Canvi',
  alternateName: 'EPC',
  description: 'Colectivo estudiantil universitario comprometido con la libertad académica, el mérito y la participación activa en la Universitat de Barcelona.',
  email: 'estudiantspelcanvi@gmail.com',
  slogan: 'El Futuro Nos Pertenece',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Diagonal, 684',
    addressLocality: 'Barcelona',
    addressRegion: 'Cataluña',
    postalCode: '08034',
    addressCountry: 'ES',
  },
  sameAs: [],
})

export default function SEO({ title, description, image, url, rawTitle = false }: SEOProps) {
  const siteName = 'EPC — Estudiants Pel Canvi'
  const baseTitle = title
    ? (rawTitle ? title : `${title} — EPC`)
    : 'Estudiants Pel Canvi — EPC'
  const desc = description ?? DEFAULT_DESC
  const img = image ?? DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{baseTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content={baseTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={baseTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <script type="application/ld+json">{ORG_SCHEMA}</script>
    </Helmet>
  )
}
