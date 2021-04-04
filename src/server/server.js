const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');

// Static stuff
app.use(express.static(path.join(__dirname, '../../public')));

// Fallback route
app.get('*', (_, res) => res.sendFile(path.join(__dirname, '../../public/index.html')));

http.listen(3000, () => {
  console.log('listening on http://localhost:3000');
})
