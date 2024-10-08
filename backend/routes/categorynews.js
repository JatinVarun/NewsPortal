const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to fetch news by category
router.get('/:category', async (req, res) => {
  const { category } = req.params;
  
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: category.toLowerCase(),
        country: 'us', // You can change the country or remove it for global news
        apiKey: process.env.NEWS_API_KEY, // Ensure the API key is in the .env file
      },
    });

    // Check if articles exist and return them, otherwise return a 404 error
    if (response.data.articles && response.data.articles.length > 0) {
      res.json(response.data.articles);
    } else {
      res.status(404).json({ error: 'No news articles found for this category.' });
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Error fetching news. Please try again later.' });
  }
});

module.exports = router;
