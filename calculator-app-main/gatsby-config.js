/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Calculator App`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `GatsbyJS`,
            short_name: `GatsbyJS`,
            start_url: `/`,
            background_color: `#f7f0eb`,
            theme_color: `#a2466c`,
            display: `standalone`,
            icon: '/favicon.ico',
          },
        },
        'gatsby-plugin-offline',
    ],
};
