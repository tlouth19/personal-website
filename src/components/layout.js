import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              github
              blog
            }
          }
        }
      `}
      render={(data) => <>{children}</>}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
