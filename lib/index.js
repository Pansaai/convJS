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
	await getTable(argv.url);
	convertTableToCSV();
};

main(argv.url).catch(err => {
	throw err;
});