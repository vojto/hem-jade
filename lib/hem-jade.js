var compilers = require('hem/lib/compilers');
var pkg = require('hem/lib/package');
var jade = require('jade/lib/jade');
var fs   = require('fs');

compilers.jade = function(path) {
  var content = fs.readFileSync(path, 'utf8');
  var fn = jade.compile(content, {client: true, filename: path});
  return "var jade = require('jade/lib/runtime'); module.exports = " + fn.toString();
};