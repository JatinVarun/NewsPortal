import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const categories = [
  'Technology',
  'Health',
  'Sports',
  'Entertainment',
  'Business',
  'Science',
  'General'
];

function CategoryList() {
  return (
    <div className="category-list">
      <h2 className="category-title">Browse by Category</h2>
      <ul className="category-items">
        {categories.map((category) => (
          <li key={category} className="category-item">
            <Link to={`/category/${category.toLowerCase()}`} className="category-link">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
