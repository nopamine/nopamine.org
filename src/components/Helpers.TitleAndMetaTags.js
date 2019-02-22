import React from 'react'
import Helmet from 'react-helmet'

import { siteMetadata } from '../../gatsby-config'

export function TitleAndMetaTags({
  url = siteMetadata.siteUrl,
  pathname = '',
  title = siteMetadata.title,
  description = siteMetadata.description,
}) {
  return (
    <Helmet>
      <title>
        {title} | {description}
      </title>

      <link rel="icon" href={`favicon.ico`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`favicon-16x16.png`} />

      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <meta property="og:url" content={`${url}/${pathname}`} />
      <meta property="og:image" content={`${url}/img/nopamine-social-1.png`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={`${url}/${pathname}`} />
      <meta name="twitter:image" content={`${url}/img/nopamine-social-1.png`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@nopamine" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@nopamine" />
    </Helmet>
  )
}