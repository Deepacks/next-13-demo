export interface OrganicResult {
  position: number
  title: string
  link: string
  thumbnail: string
  snippet: string
}

export interface SearchResult {
  organic_results: OrganicResult[]
}
