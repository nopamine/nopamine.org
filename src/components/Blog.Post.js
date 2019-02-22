import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

export const query = graphql`
  fragment BlogPostFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM d, YYYY")
      title
      author
    }
    html
  }
`
