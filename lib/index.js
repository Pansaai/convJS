#!/usr/bin/env node
const yargs = require(`yargs`);

const { getTable } = require(`./scraper`);

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

getTable(argv.url);