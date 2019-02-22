import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { siteMetadata } from '../../gatsby-config'
import { pages } from '../site'

const FooterElement = styled.footer``
const PagesList = styled.ol``
const PagesListItem = styled.li``
const Copyright = styled.div``

export function Footer({ location }) {
  return ('')
  return (
    <FooterElement>
      <PagesList>
        {pages.map(({ pageTitle, pagePath, isExternal }) => {
          return (
            <PagesListItem key={`${pagePath}-footer`}>
              {isExternal ? (
                <a rel="noreferrer" target="_blank" href={pagePath}>
                  {pageTitle}
                </a>
              ) : (
                <Link to={pagePath} activeStyle={{ opacity: 0.15 }}>
                  {pageTitle}
                </Link>
              )}
            </PagesListItem>
          )
        })}
      </PagesList>
      <Copyright>©{(new Date()).getUTCFullYear()} {siteMetadata.title}</Copyright>
    </FooterElement>
  )
}
