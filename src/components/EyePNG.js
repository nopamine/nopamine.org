import React, { PureComponent } from 'react'


import EyeGlobe from '../images/eye.globe.png'
import EyeIris from '../images/eye.iris.png'
import EyeLens from '../images/eye.lens.png'

import styled, { keyframes } from 'styled-components'

const EyeContainer = styled.figure`
  position: absolute;
  height: 500px;
  width: 500px;
  top: 100px;
  left: 175px;
  z-index: 0;
`


const animate1 = keyframes`
  0% {
    transform: translateX(70px) scale(0.75);
  }

  25% {
    transform: translateX(70px) translateY(45px) scale(0.65); 
  }

  42.5% {
    transform: translateX(70px) scale(0.65);
  }
  50% {
    transform: scale(0.55);
  }

  80% {
    transform: scale(0.55);
  }

  100% {
    transform: translateX(70px) scale(0.75);
  }
`;

const animate2 = keyframes`
  0% {
    transform: translateX(35px);
  }
  25% {
    transform: translateX(35px) translateY(30px) ; 
  }

  42.5% {
    transform: translateX(35px);
  }
  50% {
    transform: translateX(0) translateY(0) ; 
  }

  80% {
    transform: translateX(0) translateY(0) ; 
  }

  100% {
    transform: translateX(35px);
  }
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
`

const Globe = styled(Image).attrs({
  src: EyeGlobe
})`
  z-index: 1;
`
const Lens = styled(Image).attrs({
  src: EyeLens
})`
  z-index: 2;
  animation: ${animate2} 9s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
  animation-delay: 125ms;
`
const Iris = styled(Image).attrs({
  src: EyeIris
})`
  z-index: 3;
  animation: ${animate1} 9s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
`


export const EyePNG = (props) => {
  return (
    <EyeContainer {...props}>
      <Iris />
      <Lens />
      <Globe />
    </EyeContainer>
  )
}