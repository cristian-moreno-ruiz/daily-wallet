const router = require('express').Router();
const { getLatestRates } = require('./handlers/rates');

// Routes
router.get('/', (_req, res) => res.json('Server is running'));

// Rates
router.get('/rates/latest', getLatestRates);

module.exports = router;