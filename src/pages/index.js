import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icons from "../components/icons"
import ProfileImage from "../components/profile-image"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Front End Developer" keywords={[`developer`, `web developer`, `front end developer`, `react developer`]} />
      <div className="bg-gray-900 h-screen w-screen text-gray-200 flex items-center justify-center font-mono">
        <div className="w-full sm:max-w-xl block sm:flex items-center justify-center p-4">
          <ProfileImage />
          <div className="flex-auto mt-2 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl font-bold loader loader-x-fast">Tyson Louth</h1>
            <p className='loader loader-fast'>
              Senior Front End Developer at{" "}
              <a href="https://caredove.com" target="_blank" rel="noopener noreferrer" className="underline">
                Caredove
              </a>
            </p>
            <Icons />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
