import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useSettings } from "@context"
import { useInactiveTab, useOutbound } from "@hooks"

export const Document = ({ title }) => {
  const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
        }
      }
    }
  `)

  const { siteMetadata } = data.site
  const { darkMode } = useSettings()
  
  useInactiveTab()
  useOutbound()

  return ( 
    <Helmet
      htmlAttributes={{
        lang: "en",
        class: darkMode ? "dark" : "light"
      }}
      titleTemplate={`%s \u2013 ${siteMetadata.title}`}
      title={title}
      defer={false}
      metas={[
        {
          name: "description",
          content: siteMetadata.description
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: siteMetadata.description
        },
        {
          name: "twitter:creator",
          content: siteMetadata.author
        },
        {
          name: "twitter:widgets:theme",
          content: darkMode ? "dark" : "light"
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: siteMetadata.description
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:image",
          content: `${siteMetadata.siteUrl}/og-image.png`
        }
      ]}
    />
  )
}