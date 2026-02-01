const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! Deploy via CI/CD Berhasil!\n Ini adalah perubahan ke-1');
});
server.listen(3000, () => console.log('Server running on port 3000'));