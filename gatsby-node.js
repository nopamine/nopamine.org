const slug = require(`slug`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: `slug`,
      value: slug(parent.name),
    })
    createNodeField({
      node,
      name: `collection`,
      value: parent.sourceInstanceName,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: {fields: {collection: {eq: "posts"}}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      if (!result || !result.data || !result.data.allMarkdownRemark) return resolve()
      result.data.allMarkdownRemark.edges.forEach((edge) => {
        const { node } = edge
        
        createPage({
          path: `blog/${node.fields.slug}`,
          component: path.resolve(
            `./src/templates/post.js`
          ),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
