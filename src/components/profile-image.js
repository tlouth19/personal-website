import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <div className="flex justify-center pr-0 sm:pr-6">
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-gray-800">
          <Img title="Profile Image" alt="Profile Image" className="w-full h-full" fixed={data.file.childImageSharp.fixed} />
        </div>
      </div>
    )}
  />
)

const query = graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ProfileImage
