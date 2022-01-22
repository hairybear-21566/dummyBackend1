const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    if (request.url === '/') {

        response.end('Welcome to our homepage!');
    }
    if (request.url === '/about') {
        response.end('Here is our short story')
    }
    response.end(`
<h1>Oops!</h1>
<p>could nnot find resources</p>
<a href='/'>linky</a>
    `);
})

server.listen(5000);