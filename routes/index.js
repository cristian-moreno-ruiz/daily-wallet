const express = require('express');

const router = express.Router();

// Routes
router.get('/', (_req, res) => res.json('Server is running'));

module.exports = router;