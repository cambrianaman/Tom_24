const express = require('express');
const app = express();
const PORT = 3000;

// Global variable to store the request count
let requestCount = 0;

// Middleware to count all incoming requests
app.use((req, res, next) => {
  requestCount++;
  console.log('Total requests so far: ${requestCount}');
  next(); // Pass control to the next handler
});

// API endpoint to get the request count
app.get('/count', (req, res) => {
  // Respond with a JSON object containing the count
  res.json({
    totalRequests: requestCount
  });
});

// Optional: A simple home route
app.get('/', (req, res) => {
  res.send('Hello World! Access the /count route to see the total requests received.');
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
  console.log("hello");
});