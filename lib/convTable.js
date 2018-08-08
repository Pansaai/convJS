/* const readline = require(`readline`);
const fs = require(`fs`);

const convertTableToCSV = () => {
	const rl = readline.createInterface({
		input: fs.createReadStream(__dirname + `/table`),
		crlfDelay: Infinity
	});
	
	rl.on(`line`, line => {
		console.log(line);
	});
};

module.exports.convertTableToCSV = convertTableToCSV;
 */