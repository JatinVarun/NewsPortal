const express = require('express');
const router = express.Router();
const User = require('../models/Users'); // Ensure this path is correct

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match any user
  const user = await User.findOne({ email, password });

  if (user) {
    res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = router;
