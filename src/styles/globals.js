import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme, bgColor}) => bgColor ? bgColor : theme.colors.blue};
    color: ${({textColor}) => textColor ? textColor : 'white'};
    max-width: 100vw;
    font-family: ${props => props.theme.fontFamily};
  }

  #___gatsby {
    max-width: 100vw;
    position: relative;
    min-height: 100vh;
  }
  
  a {
    color: inherit;
    font-weight: 500;
  }

  svg {
    pointer-events: none;
  }
`
