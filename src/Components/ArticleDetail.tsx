import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface ArticleDetail {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
}


const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<ArticleDetail | null>(null);
  
    useEffect(() => {
      const fetchArticleDetail = async () => {
        try {
          const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
          setArticle(response.data);
        } catch (error) {
          console.error('Error fetching article detail:', error);
        }
      };
  
      fetchArticleDetail();
    }, [id]);
  
    if (!article) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.date}</p>
        <img src={article.imageUrl} alt={article.title} />
        {article.content && <div dangerouslySetInnerHTML={{ __html: article.content }} />}
      </div>
    );
  };
  
  export default ArticleDetail;
  