const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a "Hello, World!" response
  res.end('Hello, World!\n');
});

const port = 3000;

// Listen on port 3000
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
