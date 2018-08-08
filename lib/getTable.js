const fs = require(`fs`);
const rp = require(`request-promise`);
const cheerio = require(`cheerio`);
// const { convertTableToCSV } = require(`./convTable`);


/* This function takes the URL from the CLI and scrapes the first table 
   from the page. Later the option will be given to select any number of tables from a page,
   or any specific table itself.
   Saves the table as a .txt file locally. (will be removed again after conversion.)
*/
const getTable = (url) => {
	
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
		
			fs.writeFileSync(__dirname + `/table.txt`, table.trim(), err => {
				if(err){
					console.log(err);
				}
			});


		}).catch(err => {
			if (err) {
				console.log(err);
			}
		});
};

module.exports.getTable = getTable;
