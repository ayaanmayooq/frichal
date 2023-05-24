const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerUser, loginUser, requireAuth, logoutUser } = require('../controllers/authControl');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.post('/logout', requireAuth, logoutUser);

// Other authentication-related routes

module.exports = router;