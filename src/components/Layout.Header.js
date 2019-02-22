import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'


import { Link } from './Common.Link'

import { siteMetadata } from '../../gatsby-config'
import { pages } from '../site'

const _Header = styled.header.attrs({
  role: 'banner'
})`
  
  transform-origin: bottom left;
  transform: translateY(-67px) rotate(90deg);
  position: fixed;
  top: 0;
  left: 0;
  width: 110vh;
  mix-blend-mode: difference;
  z-index: 1337;
`

const Nav = styled.nav.attrs({
  role: 'navigation'
})`
`
Nav.List = styled.ol`
  list-style: none;
  display: flex;
  position: relative;
  
`

Nav.Item = styled.li`
  ${space};
  ${fontSize};
  a {
    color: inherit;
    text-decoration: none;
    
    &:before {
      transform: rotate(-90deg);
    }
  }

`

export class Header extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderItem = ({ pageTitle, pagePath, isExternal }) => 
    <Nav.Item key={pagePath} p={[1]} fontSize={[40]}>
      <Link to={pagePath}>{pageTitle}</Link>
    </Nav.Item>

  render() {
    return (
      <_Header>
          <Nav>
            <Nav.List> {pages.map(p => this.renderItem(p))} </Nav.List>
          </Nav>
      </_Header>
    )
  }
}

//export const query = graphql``
