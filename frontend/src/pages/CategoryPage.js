import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryPage.css';

function CategoryPage() {
  const { category } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);

        // Fetch news from the backend server, passing the category
        const response = await axios.get(`http://localhost:5000/api/news/${category}`);

        if (response.data.length > 0) {
          setCategoryNews(response.data); // Set the news data
        } else {
          setError('No news articles found for this category.');
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching the category news:", error.message); 
        setError("Could not fetch the news. Please try again.");
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [category]);

  return (
    <div className="category-page">
      <header className="category-header">
        <h1 className="header-title">{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
        <p className="header-description">Stay updated with the latest {category} news.</p>
      </header>
      <div className="category-content">
        {loading && <p>Loading news...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && categoryNews.length > 0 ? (
          categoryNews.map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage ? (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
              ) : (
                <div className="placeholder-image">No Image Available</div>
              )}
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-description">{article.description}</p>
                <a href={article.url} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>No news available for {category} at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
