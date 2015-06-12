module.exports = function (options) {
  var args = require('minimist')(
    process.argv.slice(2)
    , options
  );

  if (args.help || args._.length === 0) {
    var cmd = require('path').basename(process.argv[1]);
    console.log(
      require('fs')
        .readFileSync(__dirname + '/../help.txt', 'utf-8')
        .replace(/\$0/g, cmd)
        .trim());
    process.exit();
  }

  if (args.version) {
    console.log(require('../package.json').version);
    process.exit();
  }
  
  return args;
};
