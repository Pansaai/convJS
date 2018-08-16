const fs = require(`fs`);
const rp = require(`request-promise`);
const cheerio = require(`cheerio`);

/* This function takes the URL from the CLI and scrapes the first table 
   from the page. Later the option will be given to select any number of tables from a page,
   or any specific table itself.
   Returns the table as a cheerio object
*/
const getTable = (url) => {
	
	const options = {
		uri: url,
		transform: body => cheerio.load(body)
	};

	rp(options)
		.then($ => {
			// get the table & transform into csv
			let table = $(`table`).eq(0);
			table = $.html(table);
			fs.writeFileSync(__dirname + `/table`, table);
		}).catch(err => {
			if(err) throw err;
		});
};

/* This Function will convert the table into a CSV file format */

const convertTableToCSV = () => {
	
	// LOAD the table in cheerio
	const $ = cheerio.load(fs.readFileSync(__dirname + `/table`));

	const createMatrix = ($) => {

		const matrix = [];


		// for each TR - create an array
		$(`table tr`).each((i, elem) => {
			matrix[i] = [];

			// for each th insert in array
			$(elem).find(`th`).each((j, elem) => {
				matrix[i][j] = $(elem).text().trim();
			});

			$(elem).find(`td`).each((j, elem) => {
				matrix[i][j] = $(elem).text().trim();
			});

		});

		console.log(matrix);
	};	

	createMatrix($);
};

module.exports = {
	getTable,
	convertTableToCSV
};
