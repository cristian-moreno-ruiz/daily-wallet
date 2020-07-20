const router = require('express').Router();
const { getLatestRates, getHistory } = require('./handlers/rates');

// Routes
router.get('/', (_req, res) => res.json('Server is running'));

// Rates
router.get('/rates/latest', getLatestRates);
router.get('/rates/history', getHistory);


module.exports = router;