import React from 'react'
import styled, { ThemeProvider  } from 'styled-components'
import { color, space, width, fontSize, textAlign } from 'styled-system'

import { Root } from '../components/Layout.Root'
import { Header } from '../components/Layout.Header'
import { Footer } from '../components/Layout.Footer'

import { pages, theme } from '../site'
import { GlobalStyle } from '../styles/globals'

export const Main = styled.main`
  ${space}
  ${width}
`
export const Layout = ({ location, children }) => {
  const { bgColor, textColor } = pages.find( ({pagePath}) => pagePath.indexOf(location.pathname.split('/')[1]) !== -1) || pages[0]

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle bgColor={bgColor} textColor={textColor} />
        <Header/>
        <Main mx={[20, '5vw']} >
          {children}
        </Main>
        <Footer/>
        
      </React.Fragment>
    </ThemeProvider>
  )
}
