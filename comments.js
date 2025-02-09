// Create web server
var http = require('http');

// Create web server
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

// Listen on port 3000
server.listen(3000);

console.log('Server running at http://localhost:3000');
// Run the server using node comments.js