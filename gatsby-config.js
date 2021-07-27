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
    }
    
    
  ],
};
