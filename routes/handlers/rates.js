const { fetchLatestRates } = require('../../integrations/fixer');

async function getLatestRates(req, res) {
	// TODO: Add cache system
	try{
		const rates = await fetchLatestRates();
		res.json(rates);
	} catch(err) {
		res.status(500)
		res.json({error: err.message});
	}
}

module.exports = {
	getLatestRates,
};