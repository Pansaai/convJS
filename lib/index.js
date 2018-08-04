const yargs = require(`yargs`);

const { getTable } = require(`../lib/scraper/scraper`);

const argv = yargs.options({
	url: {
		demand: true,
		alias: `url`,
		describe: `Url of the table you want to export to excel`,
		string: true
	}
})
	.help()
	.alias(`help`, `h`)
	.argv;

const url = getTable(argv.url);

console.log(url);
