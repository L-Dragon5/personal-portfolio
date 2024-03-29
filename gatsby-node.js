/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const workTemplate = path.resolve(`src/templates/workTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {title: DESC}}, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: workTemplate,
        content:{},
      })
    })
  })
}