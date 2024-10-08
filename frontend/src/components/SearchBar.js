import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; 

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for news..."
        className="search-input"
      />
      <button type="submit" className="search-button">🔍</button>
    </form>
  );
}

export default SearchBar;
