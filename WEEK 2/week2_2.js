const http = require('http');
const server = http.createServer((req, res) => {
// GET request handler
if (req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, GET request!');
}
// POST request handler
else if (req.method === 'POST') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, POST request!');
}
// PUT request handler
else if (req.method === 'PUT') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, PUT request!');
}
// DELETE request handler
else if (req.method === 'DELETE') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, DELETE request!');
}
else if (req.method === 'PATCH') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, PATCH request!');
}
// HEAD request handler
else if (req.method === 'HEAD') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, HEAD request!');
}
// OPTIONS request handler
else if (req.method === 'OPTIONS') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, OPTIONS request!');
}
// PROPFIND request handler
else if (req.method === 'PROPFIND') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, PROPFIND request!');
}
// Invalid request method
else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid request method');
    }
    });
    server.listen(3000, () => {
    console.log('Server is running on port 3000');
    });