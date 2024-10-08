import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNews.css';

function CategoryNews() {
  const categories = ['technology', 'sports', 'health', 'entertainment', 'business'];

  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <Link key={index} to={`/category/${category}`} className="category-link">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </div>
  );
}

export default CategoryNews;
