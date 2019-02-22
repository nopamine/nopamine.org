import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../containers/Layout'

import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import { Link } from '../components/Common.Link'

import { TeamMember } from '../components/Team.Member'

import * as blocks from '../blocks'

import { theme } from '../site'

export default function TeamPage({ data, location }) {
  const { team } = data

  return (
    <Layout location={location}>
      <TitleAndMetaTags description={'Team'} />
      
      <blocks.h fontSize={[ 3, 4, 5, 4]} mt={[7]} textAlign={'right'}>
        I'm a tiny <Link to={'/team'}>crew</Link> right now, building tools, such as 
        <blocks.span color={theme.colors.blue}> Chili</blocks.span>, 
        <blocks.span color={theme.colors.blue}> aSocial ☻</blocks.span> and 
        <blocks.span color={theme.colors.blue}> Manifest ☻</blocks.span> and to make the web, healty and fun.
        <br/>
        <br/>
        But please reach out. 
        <br/>
        I need friends.
      </blocks.h> 
    
      <ol style={{paddingTop: 50, marginLeft: 50, position: 'fixed', zIndex: 2}}>
        { team.edges.map((edge, index) => <a href={`#${index}`}><blocks.h>{index + 1}. {edge.node.frontmatter.name}</blocks.h></a> ) }
      </ol>
      { team.edges.map((edge, index) => <TeamMember id={index} key={index} bio={edge.node.html} {...edge.node.frontmatter} /> ) }
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    team: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fields: { collection: { eq: "team" } } }
    ) {
      edges {
        node {
          ...TeamMemberFragment
        }
      }
    }
  }
`
