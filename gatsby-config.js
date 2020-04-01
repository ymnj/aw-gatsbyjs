/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `AW-Gatsby`,
    siteUrl: `http://localhost:8000/`,
    description: `Sample Gatsby site`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://apr1test.force1.awdev.ca/`,
        apiBase: `api`,
      },
    },
  ],
}
