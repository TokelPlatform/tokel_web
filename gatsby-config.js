module.exports = {
  siteMetadata: {
    title: "tokel",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
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
        mode: "async",
    
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
    
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],
    
        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Metropolis"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/fonts.css",
          },
        ],
    
        /* Web fonts. File link should point to font CSS file. */
        web: [{
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Sourse Sans Pro",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap",
          },
        ],
      },
    }
    
    
  ],
};
