import React from "react"
import { StaticQuery, graphql } from "gatsby"
import github from "../icons/github.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedin.svg"
import devTo from "../icons/devto.svg"
import email from "../icons/email.svg"
import gitLab from '../icons/gitlab.svg'

const Icons = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              twitter
              github
              linkedIn
              email
              devTo
              gitLab
            }
          }
        }
      `}
      render={(data) => {
        const urls = data.site.siteMetadata
        const icons = [
          {
            alt: "GitHub",
            icon: github,
            url: urls.github
          },
          {
            alt: "GitLab",
            icon: gitLab,
            url: urls.gitLab
          },
          {
            alt: "dev.to",
            icon: devTo,
            url: urls.devTo
          },
          {
            alt: "Twitter",
            icon: twitter,
            url: urls.twitter
          },
          {
            alt: "LinkedIn",
            icon: linkedin,
            url: urls.linkedIn
          },
          {
            alt: "Email",
            icon: email,
            url: `mailto:${urls.email}`
          }
        ]
        return (
          <>
            <div className="mt-3 pb-2 border-t-2 border-gray-800" />
            <div className="flex items-center justify-center sm:justify-start py-2">
              {icons.map((icon, index) => (
                <a key={index} data-tooltip={icon.alt} target="_blank" rel="noopener noreferrer" href={icon.url} className="flex items-center mx-2 sm:ml-0 sm:mr-4 relative">
                  <img src={icon.icon} className="h-6" alt={icon.alt} title={icon.alt} />
                </a>
              ))}
            </div>
          </>
        )
      }}
    />
  )
}

export default Icons
