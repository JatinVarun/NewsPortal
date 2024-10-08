const express = require('express');
const axios = require('axios');
const router = express.Router();

// Define a route to handle search queries
router.get('/', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching data from News API:', error.message);
    res.status(500).json({ message: 'Failed to fetch search results' });
  }
});

module.exports = router;
