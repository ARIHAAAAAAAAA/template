// import React from "react";
import { useQuery } from '@apollo/client';
import { Article } from '../types/article';
import { GET_NEWS } from '../queries/query';

function News() {
 // Fetch data using the useQuery hook
 const { loading, error, data } = useQuery(GET_NEWS);
 console.log("data", data);

 // Handle loading and error states
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>;

 // Render the data
 return (

   <div>
     <h2>My first Apollo app 🚀</h2>
     <h2>hello world</h2>
     <ul>
       {data.getNews.articles.map((article: Article) => (
         <li key={article.title}>
           <h3>{article.title}</h3>
           <p>{article.description}</p>
           <p>{article.author}</p>
           <p>{article.url}</p>
           {/* Add more details as needed */}
         </li>
       ))}
     </ul>
   // </div>
 );
}
export default News;
