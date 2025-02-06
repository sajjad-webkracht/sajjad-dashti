/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sajjad Dashti`,
    siteUrl: `https://www.sajjaddashti.ir`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:400,700` // Specify font weights and styles
        ],
        display: 'swap' // Optional: Add font-display property
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static/`,
      }
    },
    {
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: `${__dirname}/src/static`,
        destination: '/static',
      }
    }
  ]
};