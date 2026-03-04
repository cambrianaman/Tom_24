const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Global variable to store the request count
let requestCount = 0;

// Middleware to count all incoming requests
app.use((req, res, next) => {
  requestCount++;
  console.log('Total requests so far: ${requestCount}');
  next();
});

// Connect to SQLite database (it will create file if not exists)
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL
  )
`);

// POST route to save firstname and lastname
app.post('/person', (req, res) => {
  const { firstname, lastname } = req.body;

  if (!firstname || !lastname) {
    return res.status(400).json({ error: 'Firstname and lastname are required' });
  }

  const sql = 'INSERT INTO persons (firstname, lastname) VALUES (?, ?)';

  db.run(sql, [firstname, lastname], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Return generated ID
    res.json({
      id: this.lastID
    });
  });
});

//  GET route to fetch person by id
app.get('/person/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT firstname, lastname FROM persons WHERE id = ?';

  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(row);
  });
});

// API endpoint to get the request count
app.get('/count', (req, res) => {
  res.json({
    totalRequests: requestCount
  });
});

// Home route
app.get('/', (req, res) => {
  res.send('Hello World! Access the /count route to see total requests.');
});

// Start server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});