import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icons from "../components/icons"
import ProfileImage from "../components/profile-image"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Front End Developer" keywords={[`developer`, `web developer`, `front end developer`, `react developer`]} />
      <section className="h-screen w-screen flex items-center justify-center p-4">
        <div className="w-full sm:max-w-xl block sm:flex items-center justify-center">
          <ProfileImage />
          <div className="flex-auto mt-2 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl font-bold loader loader-fast">Tyson Louth</h1>
            <p className="loader text-gray-400">
              Senior Front End Developer at{" "}
              <a href="https://caredove.com" target="_blank" rel="noopener noreferrer" className="underline">
                Caredove
              </a>
            </p>
            <Icons />
          </div>
        </div>
      </section>
      <section className="p-4 pb-64">
        <div className="w-full sm:max-w-xl mx-auto">
          <h1 className="text-2xl font-bold">Experience</h1>
          {[
            {
              company: "Caredove",
              date: "Oct 2019 to Present",
              role: "Senior Front End Developer",
              exp: "React,Redux,Node.js",
              location: "Orillia, Ontario, Canada"
            },
            {
              company: "Teaching.com",
              date: "May 2019 to Oct 2019",
              role: "Product Developer",
              exp: "React,Redux,Node.js,PHP,Zend,Laravel,SASS,Webpack",
              location: "San Juan, Puerto Rico (Remote)"
            },
            {
              company: "BitCine Technologies",
              date: "June 2015 to May 2019",
              role: "Lead Front End Developer",
              exp: "React,Redux,Gatsby,TypeScript,Node.js,PHP,Laravel,AWS,Vue,CSS-in-JS,SASS,LESS,S3,Lambda,Webpack,Gulp",
              location: "Toronto, Ontario, Canada"
            },
            {
              company: "Freelance",
              date: "Jan 2013 to June 2015",
              role: "Web Developer",
              exp: "jQuery,React,Wordpress,Drupal,HTML,CSS,PHP,Gulp",
              location: "Orillia, Ontario, Canada"
            }
          ].map((job, index) => (
            <div key={index} className="bg-gray-100 text-gray-900 rounded mt-4 p-4 w-full">
              <div className="text-xs border-b border-gray-500 text-gray-600 pb-2 mb-4">{job.location}</div>
              <div className="block sm:flex items-center justify-between mb-4 sm:mb-0">
                <strong className="text-lg block">{job.company}</strong>
                <i className="text-xs block">{job.date}</i>
              </div>
              <p className="text-sm mb-2">{job.role}</p>
              <ul className="flex flex-wrap items-start">
                {job.exp.split(",").map((e) => (
                  <li key={e} className="bg-gray-400 text-gray-700 rounded px-1 text-xs mr-2 mt-2">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="p-4 pb-64">
        <div className="w-full sm:max-w-xl mx-auto">
          <h1 className="text-2xl font-bold">Education</h1>
          {[
            {
              name: "Pfeiffer University",
              date: "Aug 2009 to May 2013",
              degree: "Bachelor's Degree, Computer Information Systems",
              location: "Charlotte, North Carolina"
            }
          ].map((school, index) => (
            <div key={index} className="bg-gray-100 text-gray-900 rounded mt-4 p-4 w-full">
              <div className="text-xs border-b border-gray-500 text-gray-600 pb-2 mb-4">{school.location}</div>
              <div className="block sm:flex items-center justify-between mb-4 sm:mb-0">
                <strong className="text-lg block">{school.name}</strong>
                <i className="text-xs block">{school.date}</i>
              </div>
              <p className="text-sm mb-2">{school.degree}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
