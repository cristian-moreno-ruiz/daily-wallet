const { latest, timeSeries } = require('./fetch');

/**
 * Fetch latest rates from fixer API
 * @param {object} opts 
 */
async function fetchLatestRates(opts) {
	// TODO: Validate opts passed, through an enum for this provider
	const { data } = await latest(opts);
	if (!data.success) {
		throw Error(data.error.info);
	}
	return data.rates;
}

async function fetchTimeSeries(opts) {
	// TODO: Validate opts passed, through an enum for this provider
	// Check we mandatory need start and end date
	const { data } = await timeSeries(opts);
	if (!data.success) {
		throw Error(data.error.info);
	}
	return data.rates;
}

module.exports = {
	fetchLatestRates,
	fetchTimeSeries,
};