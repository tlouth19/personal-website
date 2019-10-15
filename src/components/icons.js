import React from "react"
import { StaticQuery, graphql } from "gatsby"
import github from "../icons/github.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedin.svg"
import devTo from "../icons/devto.svg"
import email from "../icons/email.svg"

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
            alt: "dev.to",
            icon: devTo,
            url: urls.devTo
          },
          {
            alt: "Email",
            icon: email,
            url: `mailto:${urls.email}`
          }
        ]
        return (
          <div className="flex items-center mt-2">
            {icons.map((icon, index) => (
              <a key={index} target="_blank" rel="noopener noreferrer" href={icon.url} className="flex items-center mr-3 loader loader-1">
                <img src={icon.icon} className="h-5 hover:h-4" alt={icon.alt} title={icon.alt} />
              </a>
            ))}
          </div>
        )
      }}
    />
  )
}

export default Icons
