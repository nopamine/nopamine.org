import React, { PureComponent } from 'react'

import Heart from '../images/heart.png'
import Like from '../images/Like.png'

import styled, { keyframes } from 'styled-components'


const AddictionContainer = styled.div`
  position: absolute;
  height: 500px;
  top: 350px;
  width: 50vw;
  z-index: 0;
  left: 0;  
`


const animate = keyframes`
  0% {
    transform: scale(1.25);
    opacity: 0;
  }

  25% {
    transform: scale(2.25);
    opacity: 1;
  }

  42.5% {
     transform: scale(4.25);
     opacity: 0;
  }

  50% {
    transform: scale(4.25);
   
  }

  100% {
    transform: scale(4.25);
    opacity: 0;
  }
`;


const ImageDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 500px;
  width: 100%;
  background-repeat: no-repeat;
  animation: ${animate} 10s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
  background-size: 20%;
  background-position: 50% 50%;
  transform: translateZ(0);
  will-change: transform,  opacity;
  opacity: 0;
`


const LikeDiv = styled(ImageDiv)`
  background-image: url(${Like});
`

const HeartDiv = styled(ImageDiv)`
  background-image: url(${Heart});
  background-size: 30%;
  animation-delay: 5s;
`
  

export const HeartLikePNG = (props) => {
  return (
    <AddictionContainer>
      <div style={{height: 500, position: 'relative'}}>
        <LikeDiv/>
        <HeartDiv/>
      </div>
    </AddictionContainer>
  )
}