import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="bg-black h-screen w-screen text-white flex items-center justify-center p-4 font-mono">
        <div className="max-w-md flex items-center justify-center">
          <h1 className="text-xl font-bold">404 Not Found</h1>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
