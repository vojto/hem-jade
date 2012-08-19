var compilers = require('hem/lib/compilers');
var jade = require('jade/lib/jade');
var fs   = require('fs');

compilers.jade = (path) ->
  content = fs.readFileSync path, 'utf8'
  fn = jade.compile content, client: true, filename: path
  "module.exports = #{fn.toString()}"