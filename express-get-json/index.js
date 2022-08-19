const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const gradeArray = [];
for (const property in grades) {
  gradeArray.push(grades[property]);
}

app.get('/api/grades', (req, res) => {
  res.json(gradeArray);
});

app.listen(3000);
