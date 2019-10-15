import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <div className='flex justify-center'>
        <div className="w-20 h-20 mr-0 sm:mr-4 rounded-full overflow-hidden flex items-center loader loader-fast justify-center border-2 border-gray-200">
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
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ProfileImage
