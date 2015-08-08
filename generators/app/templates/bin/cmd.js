#!/usr/bin/env node

var package = require('../package.json');
var path = require('path');
var fs = require('fs');
var command;
var usage;

var args = require('minimist')(process.argv.slice(2), {
	alias: { "h": "help", "v": "version" }
});

if (args.version) {
	console.log(package.version);
	process.exit(0);
}

if (args.help || args._.length === 0) {
	command = path.basename(process.argv[1]);
	usage =  path.join(__dirname, './help.txt');
	console.log(
		fs.readFileSync(usage, 'utf-8')
		.replace(/\$0/g, command)
		.trim() + '\n'
	);
	process.exit(0);
}

// Do stuff here.
