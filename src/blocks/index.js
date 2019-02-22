import styled from 'styled-components'
import { 
  background, 
  color, 
  space, 
  width, 
  fontSize, 
  fontFamily, 
  textAlign,
  justifyContent, 
  alignItems,
} from 'styled-system'

export const h = styled.h1`
  margin: 0;
  ${space}
  ${width}
  ${color}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  word-wrap: break-word;

`

export const p = styled.p`
  ${space}
  ${width}
  ${color}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
`

export const span = styled.span`
  ${space}
  ${width}
  ${color}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
`

export const img = styled.img`
  ${space}
  ${width}
  ${color}
  object-fit: cover;
`

export const fillSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: -0 -5vw;

  ${space}
  ${width}
  ${color}
  ${textAlign}
  ${justifyContent}
  ${alignItems}
`


export const spacing = styled.div`
  ${space}
`

