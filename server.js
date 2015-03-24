var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname + '/demo' })
).listen(8000);

console.log('Listening on :8000');
