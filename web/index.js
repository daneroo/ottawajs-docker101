const http = require('http');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const counter = require('./counter');

const PORT = process.env.PORT || 8000;
const MORGAN = process.env.MORGAN || 'dev';
const ROOT = path.join(__dirname, 'static');

const app = express();
const server = new http.Server(app);

// Logging (and filter)
app.use(morgan(MORGAN));

app.use('/counter', counter);
app.use(express.static(ROOT));

// Start Http Server
app.listen(PORT, () => {
  // proper logging..
  console.log('Listening on: http://0.0.0.0:%d', PORT);
});

