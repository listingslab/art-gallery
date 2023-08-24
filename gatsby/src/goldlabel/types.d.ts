export type AuthShape = {
  authing: boolean
  user: any
}

export type EditShape = {
  collection: CollectionShape
  fbId: string
}

export type DocFetchShape = {
  endpoint: string
  fetching: boolean
  fetched: boolean
  doc: any|null
  error: any|null
}

export type CollectionShape = {
  slug: string
  title: string
  description?: string
  icon: string
  fsUrl: string
  apiUrl?: string
  fields: Array<FieldShape>
}

export type CRUDShape = {
  collections: Array<CollectionShape>
}

export type FieldShape = {
  title: string
  slug: string
} 

export type KeyValueShape {
  key: string
  value: unknown
}
