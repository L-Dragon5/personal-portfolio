/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "typeface-open-sans"
import "typeface-roboto"

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            <p>© Joseph Oh {new Date().getFullYear()}</p>
            <p>This website was developed using Gatsby, a JavaScript framework built on React.<br /><a href="https://github.com/L-Dragon5/personal-portfolio" target="_blank" rel="noopener noreferrer">Check out the code at my GitHub repository.</a></p>
          </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
