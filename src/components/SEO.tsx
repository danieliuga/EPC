import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  rawTitle?: boolean
}

export default function SEO({ title, description, image, url, rawTitle = false }: SEOProps) {
  const siteName = 'EPC'
  const baseTitle = title
    ? (rawTitle ? title : `${title} — ${siteName}`)
    : `${siteName} — Diseño + Tecnología`
  const desc = description ?? 'Proyectos de alto impacto con resultados medibles.'

  return (
    <Helmet>
      <title>{baseTitle}</title>
      <meta name="description" content={desc} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={baseTitle} />
      <meta property="og:description" content={desc} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

