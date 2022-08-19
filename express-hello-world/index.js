const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Here is a string!');
});

app.listen(3000);
