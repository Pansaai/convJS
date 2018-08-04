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
			console.log($(`table`).html());
		}).catch(err => {
			console.log(err);
		});
};

module.exports.getTable = getTable;
