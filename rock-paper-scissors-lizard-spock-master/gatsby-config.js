/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rock Paper Scissors Lizard Spock`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Rock Paper Scissors Lizard Spock`,
        short_name: `RPSLS`,
        start_url: `/`,
        background_color: `#141539`,
        theme_color: `#EAE3DC`,
        display: `fullscreen`,
        icon: "src/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
    }
  }, "gatsby-plugin-offline"],
};