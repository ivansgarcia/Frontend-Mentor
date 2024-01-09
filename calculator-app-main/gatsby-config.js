// TODO: and fix first oppening always theme = 1

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
            name: `Calculator App`,
            short_name: `Calculator`,
            start_url: `/`,
            background_color: `#f7f0eb`,
            theme_color: `#EAE3DC`,
            display: `standalone`,
            icon: 'static/icon.png',
          },
        },
        'gatsby-plugin-offline',
    ],
};
