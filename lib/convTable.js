const readline = require(`readline`);
const fs = require(`fs`);

const convertTableToCSV = () => {
	const rl = readline.createInterface({
		input: fs.createReadStream(__dirname + `/table.txt`),
		crlfDelay: Infinity
	});
	
	rl.on(`line`, line => {
		fs.appendFile(__dirname + `/table2`, line, (err) => {
			if(err) throw err;
		});
	});
};

module.exports.convertTableToCSV = convertTableToCSV;
