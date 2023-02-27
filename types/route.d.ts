export type ObjectKeyValue<T = string | number> = {
  [key: string]: T
}

export interface MetaParams {
  title: string
  showInMenu: boolean
  icon?: string
}

export interface RouteParams {
  fullPath: string
  hash: string
  matched: any
  meta: any
  name: string
  params: any
  path: string
  query: any
  redirectedFrom: string
}

export interface LocalRouteParams {
  id?: string
  path: string
  name: string
  meta: MetaParams
  children?: any
  component: any
}
