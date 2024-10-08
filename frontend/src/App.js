import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import NewsDetails from './pages/NewsDetails';
import SearchResults from './pages/SearchResults';
import LoginPage from './components/LoginPage'; // Import LoginPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage />} /> {/* Category Route */}
            <Route path="/news/:category/:id" element={<NewsDetails />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/login" element={<LoginPage />} /> {/* Login Page Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
