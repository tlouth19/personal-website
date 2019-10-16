import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => <div className="bg-gray-900 font-mono text-gray-200">{children}</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
