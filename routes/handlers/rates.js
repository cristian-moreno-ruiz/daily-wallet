const { fetchLatestRates, fetchTimeSeries } = require('../../integrations/exchangeRate');

async function getLatestRates(req, res) {
	// TODO: Add cache system
	try {
		const { query: opts } = req;
		const data = await fetchLatestRates(opts);
		res.json(data);
	} catch(err) {
		res.status(500)
		res.json({error: err.message});
	}
}

async function getHistory(req, res) {
	// TODO: Add cache system
	try {
		const { query: opts } = req;
		const data = await fetchTimeSeries(opts);
		res.json(data);
	} catch(err) {
		res.status(500)
		res.json({error: err.message});
	}
}

module.exports = {
	getLatestRates,
	getHistory,
};