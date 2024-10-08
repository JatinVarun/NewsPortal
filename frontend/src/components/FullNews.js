import React from 'react';
import './FullNews.css';

function FullNews({ newsItem }) {
  return (
    <div className="full-news-card">
      {newsItem.urlToImage && (
        <img src={newsItem.urlToImage} alt={newsItem.title} className="full-news-image" />
      )}
      <div className="full-news-content">
        <h2 className="news-title">{newsItem.title}</h2>
        <p className="news-description">{newsItem.description}</p>
        <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="read-more">
          Read Full Article
        </a>
      </div>
    </div>
  );
}

export default FullNews;
