const express = require('express');
const router = express.Router();
const { createChallenge } = require('../controllers/challengeControl');

// Create Challenge route
router.post('/create', createChallenge);

module.exports = router;