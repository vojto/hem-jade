var compilers = require('hem/lib/compilers');
var jade = require('jade/lib/jade');
var fs   = require('fs');

compilers.jade = function(path) {
  var content = fs.readFileSync(path, 'utf8');
  var fn = jade.compile(content, {client: true, filename: path});
  return "module.exports = " + fn.toString();
};
