const express = require('express');
const path = require('path');

const app = express();
const absPath = path.join(__dirname, 'public');

console.log(absPath);

const mid = express.static(absPath);

console.log(mid);

app.use(mid);

app.listen(3000, () => {
  console.log('Listening on 3000!');
});
