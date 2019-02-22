import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import * as blocks from '../blocks'

import styled from 'styled-components'


export const TeamMember = ({name, bio, image, role, twitter, id}) =>  {
    return (
      <section style={{position: 'relative',minHeight: '100vh', marginTop: 200}} id={id}>
        <section style={{position: 'relative', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', mixBlendMode: 'difference', zIndex: -2}}>
          <blocks.h color={'#FFAF00'} fontSize={[4, 5, 6]} textAlign={'right'}>{name}</blocks.h>
          <blocks.h color={'#FFAF00'} fontSize={[3, 4]} textAlign={'right'}>{role}</blocks.h>
          <blocks.h color={'#FFAF00'} fontSize={[2, 3]} textAlign={'right'}><a href={twitter}>twitter</a></blocks.h>
          <blocks.h color={'#FFAF00'} fontSize={[2, 3]} textAlign={'right'}>
            {bio}
          </blocks.h>
        </section>
        <blocks.img width={'70%'} src={image} style={{filter: 'grayscale(1)', position: 'absolute', top: 0, right: 0, zIndex: -3}}/>
      </section>
    )
}

export const query = graphql`
  fragment TeamMemberFragment on MarkdownRemark {
    html
    frontmatter {
      image
      name
      order
      linkedin
      twitter
      role
    }
  }
`
