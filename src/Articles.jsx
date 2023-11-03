import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { response } from 'express';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/').then(response => response.json()).then(data => { setArticles(data)})},[])
  



  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles?.map(article => (
          <li key={article._id}>
            <h2>{article.articleTitle}</h2>
            <p>{article.articleContent.slice(0, 300)} <Link to = 'https://www.w3schools.com/react/react_router.asp'>ReadMore </Link></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
