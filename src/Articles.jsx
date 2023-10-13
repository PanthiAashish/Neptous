import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/'); // Assuming your articles API endpoint is '/api/articles'
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <h2>{article.articleTitle}</h2>
            <p>{article.articleContent}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
