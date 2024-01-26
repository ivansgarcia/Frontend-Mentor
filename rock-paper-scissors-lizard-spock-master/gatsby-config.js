/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rock Paper Scissors Lizard Spoke`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Rock Paper Scissors`,
        short_name: `R&P&S`,
        start_url: `/`,
        background_color: `#141539`,
        theme_color: `#EAE3DC`,
        display: `fullscreen`,
        icon: "src/images/icon.jpg"
    }
  }]
};