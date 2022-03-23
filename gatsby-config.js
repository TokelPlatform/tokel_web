require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Tokel - The Token pLatform",
    siteUrl: `https://tokel.io`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-eslint",
    "gatsby-plugin-root-import",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",
    
      /* Plugin options */
      options: {
    
        /* Font loading mode */
        mode: "render-blocking",
    
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
    
        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            name: "Metropolis",
            file: "/fonts/fonts.css",
          },
          {
            name: "Source Sans Pro",
            file: "/fonts/fonts.css",
          },
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.tokel.io',
        siteUrl: 'https://tokel.io'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: "https://tokel.us20.list-manage.com/subscribe/post?u=0783e89d9e8585986386d7bef&amp;id=413a1692b6", // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
