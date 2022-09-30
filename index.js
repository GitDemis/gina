const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('<h1>Hello, World</h1>');
    }
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => console.log('server running on port ${PORT}'));
