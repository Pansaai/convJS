const rp = require(`request-promise`);
const cheerio = require(`cheerio`);

const getTable = (url) => {
	const options = {
		uri: url,
		transform: (body) => {
			return cheerio.load(body);
		}
	};
    
	rp(options)
		.then($ => {
			// get the table (TODO get specific id)
			console.log($(`table`).html());
			
			
		}).catch(err => {
			if (err) throw err;
		});
};

module.exports.getTable = getTable;
