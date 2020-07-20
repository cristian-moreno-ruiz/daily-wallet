const { get } = require('axios');

const BASE_URL = 'http://data.fixer.io/api';
const API_KEY = process.env.FIXER_API_KEY;

async function latest(opts) {
	return get(`${BASE_URL}/latest`, { params: { ...opts, access_key: API_KEY }});
}

module.exports = {
	latest,
}