import React from 'react'

import { ThemeProvider } from 'styled-components'

import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import { Layout } from '../containers/Layout'

import { theme } from '../site'

export default function NotFoundPage({ location, data }) {
  return (
    <Layout location={location}>
      <TitleAndMetaTags description={'404 | Page not found'} />
      <ThemeProvider theme={theme}>
        <h1>404 | Page not found</h1>
      </ThemeProvider>
    </Layout>
  )
}

