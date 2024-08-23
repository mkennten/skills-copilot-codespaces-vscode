// Create web server
const server = http.createServer((req, res) => {
  res.write('Welcome to our home page');
  res.end();
});

// Listen on port 5000
server.listen(5000);


// Add the following code to the comments.js file:
// Import the add function
import { add } from './main.js';
