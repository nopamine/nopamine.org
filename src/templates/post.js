import React from 'react'

import { graphql } from 'gatsby'

import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import { Layout } from '../containers/Layout'

export default function BlogPage({ data, location }) {
  const { post } = data
  const { frontmatter } = post

  return (
    <Layout location={location}>
      <TitleAndMetaTags title={frontmatter.title} />
      <h1>{ frontmatter.title }</h1>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...BlogPostFragment
    }
  }
`
