import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullNews from '../components/FullNews';
import './NewsDetails.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function NewsDetails() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            apiKey: '82f7cfd23e0149a3bb847b48511813b6',
          },
        });
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };
    fetchNewsData();
  }, []);

  return (
    <div className="news-details">
      <TransitionGroup className="news-list">
        {newsData.map((newsItem, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <FullNews newsItem={newsItem} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default NewsDetails;
