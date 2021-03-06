/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Digital Garden🌱",
    description: "Checkout my digital Garden!",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
  ],
}
