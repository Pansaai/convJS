const fs = require(`fs`);
const rp = require(`request-promise`);
const cheerio = require(`cheerio`);

/* This function takes the URL from the CLI and scrapes the first table 
   from the page. Later the option will be given to select any number of tables from a page,
   or any specific table itself.
   Saves the table as a .txt file locally. (will be removed again after conversion.)
*/
const getTable = (url) => {
	return new Promise(resolve => {
		const options = {
			uri: url,
			transform: (body) => {
				return cheerio.load(body);
			}
		};
	
		rp(options)
			.then($ => {
				// get the table - THIS ONLY GETS THE FIRST TABLE
				const table = $(`table`).html();
				fs.writeFile(__dirname + `/table.txt`, table.trim(), err => {
					if (err) throw err;
					console.log(`The file has been saved`);
				});
			}).catch(err => {
				if (err) throw err;
			});

		resolve();
	});
};

module.exports.getTable = getTable;
