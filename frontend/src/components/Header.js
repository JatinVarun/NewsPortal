import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';
import './Header.css';

function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        News Portal
      </div>
      <nav className="nav">
        <SearchBar />
        <button onClick={toggleCategories} className="category-toggle-button">
          Categories
        </button>
        <button onClick={handleLoginClick} className="login-button" >
          Login
        </button>
      </nav>
      {showCategories && <CategoryList />}
    </header>
  );
}

// const styles = {
//   loginButton: {
//     marginLeft: '20px',
//     padding: '10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

export default Header;
