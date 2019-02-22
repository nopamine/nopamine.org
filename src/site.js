import { css } from 'styled-components'

const sizes = { 
  s:  48, // 672px
  m:  64, // 1024px
  l:  80, // 1280px
  xl: 96, // 1536px
}

export const theme =  {
  blockHeights: {
    header: '60px',
    hero: '55vh',
    xlHero: '75vh'
  },
  breakpoints: Object.values(sizes).map(s => `${s}em`),
  media: Object.keys(sizes).reduce((obj, label) => {
    const emSize = sizes[label]

    obj[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return obj
  }, {}),
  containers: {
    xs: '400px',
    s: '672px',
    m: '1024px',
    l: '1280px',
    xl: '1536px',
  },
  colors: {
    blue: '#0050FF',
    green: '#11CF98',
    red: '#FF3C5F',
    orange: '#FF6B6B',
    yellow: '#FFAF00',
    pink: '#FF6B98',
    black: '#111',
    white: '#FBFBFB'
  },
  fontFamily: '"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
  fontSizes: [13, 21, 34, 55, 89, 144, 233, 377, 610, 987],
  space: [13/2, 21/2, 34/2, 55/2, 89/2, 144/2, 233/2, 377/2, 610/2, 987/2],
  opacity: [0.1, 0.25, 0.75],
}

export const pages = [{
  pageTitle: 'Home',
  pagePath: '/',
  bgColor: theme.colors.blue
}, {
  pageTitle: 'Motivation',
  pagePath: '/motivation',
  bgColor: theme.colors.black
}, {
  pageTitle: 'Team',
  pagePath: '/team/',
  bgColor: theme.colors.red
}, {
  pageTitle: 'Blog',
  pagePath: '/blog/',
  bgColor: 'white',
  textColor: theme.colors.blue
}, {
  pageTitle: 'Code',
  pagePath: 'https://github.com/nopamine',
  isExternal: true
}]

