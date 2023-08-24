import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { useSiteMetadata } from "../"

export const SEO = (props: any) => {
  
  const {appData, type} = props
  const siteMetadata = useSiteMetadata()
  let defaultTitle = "defaultTitle"
  let defaultDescription = "defaultDescription"
  let defaultImage = "/png/nextjs.png"
  const { 
    siteUrl, 
    siteKeywords,
    siteTitle, 
    siteDescription,
    twitterUsername,
  } = siteMetadata
  const canonicalUrl = siteUrl
  const siteName = defaultTitle
  const seo = {
    title: `${defaultTitle} ${defaultDescription}`,
    description: defaultDescription,
    image: defaultImage,
    url: siteUrl,
    twitterUsername: "@machine_v4",
    keywords: siteKeywords,
    lingua: "en",
  }
  if (appData){
    if (appData.data){
      const {markdownRemark} = appData.data
      if (markdownRemark){
        const {frontmatter} = markdownRemark
        if (frontmatter){
          const { path, title, description,
            keywords, lingua, image,
          } = frontmatter
          seo.url = `${seo.url}${path}`
          seo.title = `${title} ${description}`
          seo.description = description
          seo.image = image
          seo.keywords = keywords
          seo.lingua = lingua
        }
      }
    }
  }
  // console.log("seo.title", seo.title)
  if (seo.title === "Home Listingslab Software") {

    seo.title = `${siteTitle} ${siteKeywords}`
    seo.description = siteDescription
  }

  return <><GatsbySeo
              title={seo.title}
              description={seo.description}
              canonical={canonicalUrl}
              openGraph={{
                url: seo.url,
                title: seo.title,
                description: seo.description,
                images: [
                  {
                    url: seo.image,
                    width: 1200,
                    height: 630,
                    alt: `${seo.title} ${seo.description}`,
                  },
                ],
                site_name: siteName,
              }}
              twitter={{
                handle: twitterUsername,
                site: twitterUsername,
                cardType: 'summary_large_image',
              }}
            /></>
}
