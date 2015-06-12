module.exports = function (options) {
	var args = require('minimist')(
		process.argv.slice(2)
		, options
	)
	, pkg = require('package.json')
	, helpFile
	, path
	, cmd
	, fs
	;

	if (args.version) {
		console.log(pkg.version);
		process.exit();
	}

	if (args.help || args._.length === 0) {
		cmd = path.basename(process.argv[1]);
		helpFile = __dirname + '/../help.txt';
		console.log(
			fs.readFileSync(helpFile)
			.replace(/\$0/g, cmd)
			.trim()
		);
		process.exit();
	}

	return args;
};
