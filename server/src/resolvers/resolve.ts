import dotenv from 'dotenv';
import { Article } from '../types/article.js';

dotenv.config();
const apiKey = process.env.API_KEY;
console.log("api", apiKey);

export const resolvers = {
  Query: {
    getNews: async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      try {
        const response = await fetch(url); 
        const data = await response.json();
        return {
          status: 'ok',
          totalResults: data.articles.length,
          articles: data.articles.map((article: Article) => ({
            source: { id: article.source.id, name: article.source.name },
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            content: article.content,
          })),
        };
      } catch (error) {
        console.error('Failed to fetch news:', error);
        throw new Error('Failed to fetch news');
      }
    },
  },
};
