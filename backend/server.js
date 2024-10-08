const express = require('express');
const cors = require('cors');
const morgan = require('morgan');  // For logging
const connectDB = require('./db');   // Import the database connection
require('dotenv').config();           // Load environment variables

const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));  // Logs HTTP requests

// Connect to MongoDB
connectDB();

// Import routes
const searchRoute = require('./routes/search');
const userRoute = require('./routes/users');
const categorynewsRoute = require('./routes/categorynews');

// Use routes
app.use('/api/search', searchRoute);
app.use('/api/users', userRoute);
app.use('/api/news', categorynewsRoute); // Route for news category

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
