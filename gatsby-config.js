module.exports = {
  siteMetadata: {
    title: `Nopamine.org`,
    description: `A tiny crew, building tools, trying to make the web healthy and fun again.`,
    siteUrl: `https://nopamine.org`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/content/team/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .map(({node}) => {
                  return {
                    title: node.title,
                    author: node.author,
                    description: node.description,
                    date: node.date,
                    url: `${site.siteMetadata.siteUrl}/blog/${node.fields.slug}`,
                    guid: `${site.siteMetadata.siteUrl}/blog/${node.fields.slug}`,
                    custom_elements: [{ 'content:encoded': node.html }],
                  }
                })
            },
            query: `
            {
              allMarkdownRemark(
                sort: { order: ASC, fields: [frontmatter___order] }
                filter: { fields: { collection: { eq: "posts" } } }
              ) {
                edges {
                  node {
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
                }
              }
            }
          `,
            output: '/rss.xml',
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
    `gatsby-plugin-force-trailing-slashes`,
  ],
}
