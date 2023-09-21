const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');

  // Define the directory where your HTML files are located
  const directoryPath = path.join(__dirname, 'public');

  // Determine the requested URL path
  let filePath = path.join(directoryPath, req.url === '/' ? 'index.html' : req.url);

  // Check if the file exists
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Read the file and send it as the response
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          res.statusCode = 200;
          res.end(data);
        }
      });
    } else {
      // If the file does not exist, send a 404 Not Found response
      res.statusCode = 404;
      res.end('File Not Found');
    }
  });
});

const port = 3000;

// Listen on port 3000
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
