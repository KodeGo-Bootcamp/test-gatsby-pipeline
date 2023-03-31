/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `test-gatsby-pipeline`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})