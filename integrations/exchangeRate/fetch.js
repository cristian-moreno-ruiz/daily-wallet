const { get } = require('axios');

const BASE_URL = 'https://api.exchangerate.host';

async function latest(opts) {
	return get(`${BASE_URL}/latest`, { params: opts});
}

async function timeSeries(opts) {
	return get(`${BASE_URL}/timeseries`, { params: opts});
}

module.exports = {
	latest,
	timeSeries,
}