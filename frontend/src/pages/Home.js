import React from 'react';
import TrendingNews from '../components/TrendingNews';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="trending-section">
        <h1 className="section-title">Trending News</h1>
        <TrendingNews />
      </section>
    </div>
  );
}

export default Home;
