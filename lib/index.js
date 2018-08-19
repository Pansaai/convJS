const yargs = require(`yargs`);

const { getTable, convertTableToCSV } = require(`./getTable`);

const argv = yargs
	.command(`conv`, `get table and convert to csv`, {
		url: {
			describe: `Url to get table from`,
			demand: true,
			alias: `u`
		}
	})
	.help()
	.argv;

const main = async () => {
	try {
		await getTable(argv.url);
		// TODO - find a nicer way to do this
		await setTimeout(() => {
			convertTableToCSV();
		}, 1000);
	} catch (error) {
		console.log(`Error caught: ${error}`);
	}
};

main(argv.url);

module.exports = main;