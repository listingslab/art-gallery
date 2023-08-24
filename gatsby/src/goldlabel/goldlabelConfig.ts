import {ConfigShape} from "../types"

export const goldlabelConfig: ConfigShape = {
    siteUrl: "https://pwa-seo.app/",
    siteEmail: "colz@studioqarnita.com",
    siteTitle: "Goldlabel Gallery",
    siteDescription: "Original Artwork for sale in Malta",
    siteKeywords: "listingslab, goldlabel, art gallery,",
    siteType: "gallery",
    siteImage: "/jpg/car-hire.jpg",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@listingslab",
    siteTheme: "#C09F52",
    themes: [
        {
            title: "Gallery",
            primaryColor: "#C09F52",
            secondaryColor: "#87703B",
            font: "gotham",
        },
    ],
    firebase: {
        collection: "gallery",
    },
    contexts: {
        gallery: {}
    },
}
