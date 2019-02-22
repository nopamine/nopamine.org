import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../containers/Layout'

import { Link } from '../components/Common.Link'
import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import * as AnimatedBlobs from '../components/AnimatedBlobs'

import * as blocks from '../blocks'

import { theme } from '../site'

import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

export default function IndexPage({ data, location }) {
  return (
    <Layout location={location}>
      <TitleAndMetaTags description={'Home'} />
      <section style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-end', minHeight: '100vh'}}>
        <AnimatedBlobs.LandingPageBlobs />
        <blocks.h fontSize={[ 6, 6, 7, 6]} textAlign={'right'} my={2}  style={{position: 'relative', zIndex: 1336}}>
          NOPAMINE
        </blocks.h>
        <blocks.h 
          fontSize={[ 3, 4 ]} 
          textAlign={'right'}
        >
        <i>An open-sourced, non-profit focused on making the web a tad more healthy.</i>
        </blocks.h>
      </section>
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
