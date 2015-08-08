var generator = require('yeoman-generator');

module.exports = generator.Base.extend({
	default: {
	},
	writing: {
		projectfiles: function () {
			this.template('_package.json', 'package.json');
		},
		binfiles: function () {
			this.copy('bin/cmd.js', 'bin/cmd.js');
			this.copy('bin/help.txt', 'bin/help.txt');
		}
	},
	install: {
		installMinimist: function () {
			this.npmInstall(['minimist'], { 'save': true });
		}
	},
});
