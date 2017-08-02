let http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'content-Type':'test/plain'});
	res.end = ('Welcome to hellobook\n');
}).listen(1337, '127.0.0.1');
console.log('server running at http://127.0.0.1:1337/');