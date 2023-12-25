export const typeDefs = `#graphql
type Source {
  id: String
  name: String
}

type Article {
  source: Source
  author: String
  title: String
  description: String
  url: String
  urlToImage: String
  publishedAt: String
  content: String
}

type NewsResponse {
  status: String
  totalResults: Int
  articles: [Article]
}

type Query {
  getNews: NewsResponse
}

`