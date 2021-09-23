const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log('Server is running', req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"></body>'
    );
    res.write('<button type="submit"> Submit</button>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DYMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
