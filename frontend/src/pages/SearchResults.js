// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './SearchResults.css'; 

// function SearchResults() {
//   const { query } = useParams();
//   const [searchResults, setSearchResults] = useState([]);
//   const navigate = useNavigate();  // Add this line

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/everything', {
//           params: {
//             q: query,
//             apiKey: '82f7cfd23e0149a3bb847b48511813b6',
//           },
//         });
//         setSearchResults(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching the search results', error);
//       }
//     };
//     fetchSearchResults();
//   }, [query]);

//   // Function to handle navigation back to home
//   const handleGoHome = () => {
//     navigate('/');
//   };

//   return (
//     <div className="search-results">
//       <button onClick={handleGoHome} className="home-button">
//         Home
//       </button>
//       <h2 className="section-title">Search Results for "{query}"</h2>
//       <div className="news-grid">
//         {searchResults.map((article, index) => (
//           <div className="news-card" key={index}>
//             {article.urlToImage && (
//               <img src={article.urlToImage} alt={article.title} className="news-image" />
//             )}
//             <div className="news-content">
//               <h3 className="news-title">{article.title}</h3>
//               <p className="news-description">{article.description}</p>
//               <a href={article.url} className="read-more" target="_blank" rel="noopener noreferrer">
//                 Read More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchResults;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchResults.css'; 

function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/search', {
          params: {
            q: query,  // Pass the search query to the backend
          },
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching the search results', error);
      }
    };
    fetchSearchResults();
  }, [query]);

  // Function to handle navigation back to home
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="search-results">
      <button onClick={handleGoHome} className="home-button">
        Home
      </button>
      <h2 className="section-title">Search Results for "{query}"</h2>
      <div className="news-grid">
        {searchResults.length > 0 ? (
          searchResults.map((article, index) => (
            <div className="news-card" key={index}>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
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
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
