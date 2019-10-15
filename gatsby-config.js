const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Tyson Louth`,
    description: `The personal website of Tyson Louth, a Front End Developer from Orillia, Ontario, Canada.`,
    author: `@louther18`,
    github: `https://github.com/tlouth19`,
    twitter: `https://twitter.com/louther18`,
    linkedIn: `https://ca.linkedin.com/in/tyson-louth-816b6aa9`,
    email: `tysonlouth@gmail.com`,
    devTo: `https://dev.to/tlouth19`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tyson Louth",
	      short_name: "TL",
	      start_url: "/",
	      background_color: "#1a202c",
	      theme_color: "#edf2f7",
	      display: "minimal-ui",
        icon: `src/icons/favicon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120787737-1",
        head: false
      },
    }
  ]
}
