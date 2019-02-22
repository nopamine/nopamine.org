import React from 'react'
import { graphql } from 'gatsby'

import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import { Layout } from '../containers/Layout'

export default function TeamPage({ data, location }) {
  const { posts } = data
  
  return (
    <Layout location={location}>
      <TitleAndMetaTags description={'Team'} />
      <h1>Blog</h1>
      { posts.edges.map((edge) => <a href={edge.node.fields.slug}><li>{edge.node.frontmatter.title}</li></a> ) }
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    posts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fields: { collection: { eq: "posts" } } }
    ) {
      edges {
        node {
          ...BlogPostFragment
        }
      }
    }
  }
`
