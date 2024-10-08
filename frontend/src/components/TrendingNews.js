import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrendingNews.css';

function TrendingNews() {
  const [trendingNews, setTrendingNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Try changing this to 'in' for India, or another country code like 'gb', 'ca', etc.
            apiKey: '82f7cfd23e0149a3bb847b48511813b6',
          },
        });

        console.log('API Response:', response);
        console.log('Number of articles:', response.data.articles.length); // Log the number of articles

        if (response.data.status === 'ok' && response.data.articles.length > 0) {
          setTrendingNews(response.data.articles); // Set the articles state if data exists
        } else if (response.data.status !== 'ok') {
          console.error('Error fetching news:', response.data.message);
          setError('Failed to load news: ' + response.data.message);
        } else {
          setError('No news articles available at the moment.');
        }
      } catch (error) {
        console.error('Error fetching the trending news:', error);
        setError('Failed to load news: ' + error.message);
      }
    };

    fetchTrendingNews();
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image+Available'; // Placeholder image
  };

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!trendingNews.length) {
    return <div className="loading-message">Loading news...</div>;
  }

  return (
    <div className="trending-news">
      <div className="news-grid">
        {trendingNews.map((article, index) => (
          <div className="news-card" key={index}>
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
                onError={handleImageError}
              />
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
        ))}
      </div>
    </div>
  );
}

export default TrendingNews;
