const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerUser, loginUser, requireAuth, logoutUser, authUser, sessionLogin, sendUserData } = require('../controllers/authControl');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.get('/logout', requireAuth, logoutUser);

// Authorized routing
router.get('/protected', authUser);

// Login with token
router.post('/sessionlogin', sessionLogin);

// Send user info if logged in
router.get('/user/data', requireAuth, sendUserData);

// Other authentication-related routes

module.exports = router;