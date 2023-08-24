import {PaletteMode} from "@mui/material"

export type PwaReduxShape = {
  bootTime: number
  navOpen: boolean
  authing: boolean
  route: RouteShape|null
  account: boolean
  sharing: boolean
  books: boolean
  pages: boolean
  settings: boolean
  addListing: boolean
  user: any
  darkmode: boolean
}

export type ThemeShape = {
  title: string
  primaryColor: string
  secondaryColor: string
  backgroundColor?: string
  font: string
}

export type ConfigShape = {
  siteTitle: string
  siteDescription: string
  siteUrl: string
  siteType: string
  siteImage: string
  siteIcon: string
  siteTwitter: string
  siteTheme: string
  siteKeywords: string
  themes: Array<ThemeShape>
  contexts: any
  firebase: any
}

export type MetaShape = {
  appData?: any
  type?: string
}

export type Meta = {
  siteTitle: string
  title: string
  description: string
  siteDescription: string
  keywords: string
  url: string
  canonical: string
  image: string
  twitter: string
}






export type RouteShape = {
  hash?: string
  host?: string
  hostname?: string
  href: string|null
  key?: string
  origin?: string
  pathname?: string
  port?: string
  protocol?: string
  search?: string
  state?: string|null
}

export type HistoryType = {
    display: string
    num: number
}

export type AppShellShape = {
  appData: any  
}

export type SSRShape = {
  ssrData: any
}

export type WrapperShape = {
  command?: string
  data?: any
  pageContext?: any
  location: any
}



export type GatsbyShape = {
  siteUrl: string
  siteIcon: string
  siteTitle: string
  title: string
  siteDescription: string
  siteKeywords: string
  description: string
  siteImage: string
  image: string
  siteTwitter: string
  twitterUsername: string
  siteTheme: string
}

export type LocaleShape = {
  code: string
  displayName: string
  localName: string
  flag: string
}





export type ImageSizeShape = {
  width: number
  height: number
}

export interface KeyValueShape {
  key: string
  value: any
}

export type PWABarShape = {
  data?: any
}

