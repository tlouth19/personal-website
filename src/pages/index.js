import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icons from "../components/icons"
import ProfileImage from "../components/profile-image"
import reactSVG from '../images/tools/react.svg'
import reduxSVG from '../images/tools/redux.svg'
import tailwindSVG from '../images/tools/tailwind.svg'
import gatsbySVG from '../images/tools/gatsby.svg'
import nodejsSVG from '../images/tools/nodejs.svg'
import laravelSVG from '../images/tools/laravel.svg'
import visualStudioSVG from '../images/tools/visual-studio-code.svg'
import webpackSVG from '../images/tools/webpack.svg'
import jestSvg from '../images/tools/jest.svg'
import nextJsSVG from '../images/tools/nextjs.svg'

let EXPERIENCE = [
  {
    company: "Caredove",
    date: "Oct 2019 to Present",
    role: "Senior Front End Developer",
    location: "Orillia, Ontario, Canada"
  },
  {
    company: "Teaching.com",
    date: "May 2019 to Oct 2019",
    role: "Product Developer",
    location: "San Juan, Puerto Rico (Remote)"
  },
  {
    company: "BitCine (CineSend)",
    date: "June 2015 to May 2019",
    role: "Lead Front End Developer",
    location: "Toronto, Ontario, Canada"
  },
  {
    company: "Freelance",
    date: "Jan 2013 to June 2015",
    role: "Web Developer",
    location: "Orillia, Ontario, Canada"
  }
]

let EDUCATION = [
  {
    name: "Pfeiffer University",
    date: "Aug 2009 to May 2013",
    degree: "Bachelor's Degree, Computer Information Systems",
    location: "Charlotte, North Carolina"
  }
]

let TOOLS = [
  { icon: reactSVG, alt: "React" },
  { icon: reduxSVG, alt: "Redux" },
  { icon: nextJsSVG, alt: "Next.js"},
  { icon: gatsbySVG, alt: "Gatsby" },
  { icon: tailwindSVG, alt: "Tailwind" },
  { icon: jestSvg, alt: "Jest" },
  { icon: webpackSVG, alt: "Webpack" },
  { icon: nodejsSVG, alt: "NodeJS" },
  { icon: laravelSVG, alt: "Laravel" },
  { icon: visualStudioSVG, alt: "Visual Studio Code"}
]

function IndexPage() {
  return (
    <Layout>
      <SEO title="Front End Developer" keywords={[`developer`, `web developer`, `front end developer`, `react developer`]} />
      <section className="fadeUp flex items-center justify-center p-4">
        <div className="w-full sm:max-w-xl block sm:flex items-center justify-center">
          <ProfileImage />
          <div className="flex-auto mt-2 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl font-bold">Tyson Louth</h1>
            <p className="text-gray-400">
              Senior Front End Developer at{" "}
              <a href="https://caredove.com" target="_blank" rel="noopener noreferrer" className="underline">
                Caredove
              </a>
            </p>
            <Icons />
          </div>
        </div>
      </section>
      <section className="px-4 pb-64">
        <div className="w-full sm:max-w-xl mx-auto">
          <h2 className="text-2xl font-bold">Experience</h2>
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="bg-gray-100 text-gray-900 rounded mt-4 p-4 w-full">
              <div className="text-xs border-b border-gray-500 text-gray-700 pb-2 mb-4">{job.location}</div>
              <div className="block sm:flex items-center justify-between mb-4 sm:mb-0">
                <strong className="text-lg block">{job.company}</strong>
                <i className="text-xs block">{job.date}</i>
              </div>
              <p className="text-sm mb-2">{job.role}</p>
             
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 pb-64">
        <div className="w-full sm:max-w-xl mx-auto">
          <h2 className="text-2xl font-bold">Education</h2>
          {EDUCATION.map((school, index) => (
            <div key={index} className="bg-gray-100 text-gray-900 rounded mt-4 p-4 w-full">
              <div className="text-xs border-b border-gray-500 text-gray-700 pb-2 mb-4">{school.location}</div>
              <div className="block sm:flex items-center justify-between mb-4 sm:mb-0">
                <strong className="text-lg block">{school.name}</strong>
                <i className="text-xs block">{school.date}</i>
              </div>
              <p className="text-sm mb-2">{school.degree}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='px-4 pb-64'>
        <div className="w-full sm:max-w-xl mx-auto">
          <h2 className="text-2xl font-bold">My Favourite Tools</h2>
          <div className='flex flex-wrap items-center -mx-2 mt-2'>
            {TOOLS.map((tool) => 
              <div key={tool.alt} className='w-24 h-24 m-2 bg-white rounded-full flex items-center justify-center p-4'  data-tooltip={tool.alt}>
                <img src={tool.icon} alt={tool.alt} className='w-full'/>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
