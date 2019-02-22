import React from 'react'
import { Link as GatsbyLink} from 'gatsby'
import styled, { keyframes, css } from 'styled-components'
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


import { theme } from '../site'


const LinkStyles = css`
  ${color}
  position: relative;
  font-weight: inherit;

  &:before {
    display: inline-block;
    position: absolute;
    width: 100%;
    top: -40px;
    text-align: center;
    color: 'inherit';
    //color: ${({theme}) => theme.colors.green};
  }

  &:hover:before {
    content: '▩';
    opacity: 0.25;
  }

  &.active {
    &:before {
      content: '▨';
      display: inline-block;
      position: absolute;
      width: 100%;
      top: -40px;
      text-align: center;
    }
  }
`
const RegularLink = styled.a`
  ${LinkStyles}
`
const StyledGatsbyLink = styled(GatsbyLink)`
  ${LinkStyles}
`;

export const Link = props => 
  props.to.match(/http|https|:\/\//)
    ? <RegularLink href={props.to} {...props} />
    : <StyledGatsbyLink activeClassName={'active'} {...props} />