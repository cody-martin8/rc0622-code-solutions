const fs = require('fs');

const file = process.argv[2];
const newFile = process.argv[3];

fs.readFile(`./${file}`, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(newFile, data, err => {
    if (err) throw err;
  });
});
