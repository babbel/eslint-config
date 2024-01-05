// External Imports
import http from 'node:http';

// Local Variables
const hostname = '127.0.0.1';
const port = 3_000;
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});

// Local Functions
function startServer() {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

// Begin Execution
startServer();
