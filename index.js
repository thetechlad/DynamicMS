const express = require('express');
const app = express();

// serve static files from the public directory
app.use(express.static('public'));

// route for the root URL
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/categories', function(req, res) {
  res.sendFile(__dirname + '/public/categories.html');
});

app.get('/mentors', function(req, res) {
  res.sendFile(__dirname + '/public/mentors.html');
});

// start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
