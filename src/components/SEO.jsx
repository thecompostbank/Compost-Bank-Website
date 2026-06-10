import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'The Compost Bank'
const CANONICAL_DOMAIN = 'https://thecompostbank.com'
const DEFAULT_OG_IMAGE = `${CANONICAL_DOMAIN}/Images/og-default.jpg`

export default function SEO({ title, description, path = '', ogImage }) {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Wealth in Waste`
  const canonical = `${CANONICAL_DOMAIN}${path}`
  const image = ogImage || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
