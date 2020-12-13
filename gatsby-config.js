const site = require(`${__dirname}/config/website`)

module.exports = {
  siteMetadata: {
    title: site.name,
    author: site.author,
    siteUrl: site.url,
    description: site.description
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: site.name,
        short_name: site.name,
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "static/favicon.png",
        icon_options: {
          purpose: "maskable"
        }
      }
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: site.url
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: site.gaTrackingId
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: site.url,
        sitemap: `${site.url}/sitemap.xml`,
        policy: [
          {
            userAgent: "*",
            allow: "/"
          }
        ]
      }
    }
  ]
}
