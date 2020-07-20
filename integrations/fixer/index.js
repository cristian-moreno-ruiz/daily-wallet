const { latest } = require('./fetch');

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

module.exports = {
	fetchLatestRates,
};