import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles');
        if (response.data && Array.isArray(response.data.results)) {
          setArticles(response.data.results);
        } else {
          console.error('La risposta dell\'API non contiene un array di articoli:', response.data);
        }
      } catch (error) {
        console.error('Errore nel recupero degli articoli:', error);
      }
    };

    fetchArticles();
  }, []);

  if (!Array.isArray(articles)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Spaceflight News</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>
              <img src={article.imageUrl} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
