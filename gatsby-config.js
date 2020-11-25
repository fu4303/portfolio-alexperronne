const siteConfig = {
  name: "Alex Perronnet",
  author: "@alexperronnet",
  url: "https://alexperronnet.io",
  gaTrackingId: "UA-156157580-2",
  description: "I am Alex Perronnet, a french freelance developer and designer. I am also an open-source contributor and a content creator"
}

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    author: siteConfig.author,
    siteUrl: siteConfig.url,
    description: siteConfig.description
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
        name: siteConfig.name,
        short_name: siteConfig.name,
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
        siteUrl: siteConfig.url
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: siteConfig.gaTrackingId
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteConfig.url,
        sitemap: `${siteConfig.url}/sitemap.xml`,
        policy: [{
          userAgent: "*",
          allow: "/"
        }]
      }
    }
  ]
}