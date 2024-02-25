/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ToDo App`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "ToDo app",
      short_name: "ToDo app",
      start_url: "/",
      display: "standalone",
      icon: "src/images/icon.png",
    }
  }, "gatsby-plugin-offline"]
};