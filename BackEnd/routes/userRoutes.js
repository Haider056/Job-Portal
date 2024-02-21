const express = require('express');
const router = express.Router();
const pool = require('../db'); 

router.post('/signup', async (req, res) => {
  const { username, password, email, user_type } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (username, password, email, user_type) VALUES ($1, $2, $3, $4) RETURNING id',
      [username, password, email, user_type]
    );

    const userId = result.rows[0].id;
    res.json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'An error occurred while registering the user postman' });
  }
});
const jwt = require('jsonwebtoken');
const secretKey = 'XzC6u3bT!Zp2FvA8yL@qSs7gRvE1wQ5zP0oOjK'; 

router.post('/login', async (req, res) => {
  const { username, password } = req.body; // Remove user_type from here

  try {
    const result = await pool.query(
      'SELECT id, username, user_type FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length === 1) {
      const user = result.rows[0];

      const token = jwt.sign({ user_id: user.id, user_type: user.user_type }, secretKey, { expiresIn: '1h' });
      console.log('Token generated:', token);

      res.json({ message: 'Login successful', user, token });
    } else {
      console.log('Login failed for username:', username);
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error('Error logging in', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});


module.exports = router;
module.exports = router;
