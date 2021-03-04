module.exports = {
  siteMetadata: {
    title: `David Iosilevich`,
    description: `Personal portfolio website displaying David's personal projects, experience, and skills`,
    author: `David Iosilevich`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DavidIOS`,
        short_name: `DAVIDIOS`,
        start_url: `/`,
        background_color: `#1d1b24`,
        theme_color: `#53f6c7`,
        display: `minimal-ui`,
        icon: `src/images/david-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: 0
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
