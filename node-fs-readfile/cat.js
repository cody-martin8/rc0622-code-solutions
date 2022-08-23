const fs = require('fs');
const files = process.argv;

for (let i = 2; i < files.length; i++) {
  fs.readFile(`./${files[i]}`, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`${files[i]} text:`, data);
  });
}
