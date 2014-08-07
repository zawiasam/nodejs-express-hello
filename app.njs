var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Request' + req.url);
    res.end('Hello, world! [helloworld sample]');
}).listen(process.env.PORT);
