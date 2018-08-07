const fs = require(`fs`);
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
			const table = $(`table`).html();
			fs.writeFile(__dirname + `/table.txt`, table.trim(), err => {
				if (err) throw err;
				console.log(`The file has been saved`);
			});
			
			
		}).catch(err => {
			if (err) throw err;
		});
};

module.exports.getTable = getTable;
