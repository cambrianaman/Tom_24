const express = require('express');
const app = express();
const PORT = 3000;

// Counter variable
let requestCount = 0;

// Middleware to count requests
app.use((req, res, next) => {
  requestCount++;
  next();
});

// API endpoint to get request count
app.get('/', (req, res) => {
  res.json({ totalRequests: requestCount });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});