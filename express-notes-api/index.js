const express = require('express');
const app = express();

const fs = require('fs');
const data = require('./data.json');

function error(errorId, id) {
  const errorList = [
    {
      error: 'id must be a positive integer'
    },
    {
      error: `cannot find note with id ${id}`
    },
    {
      error: 'content is a required field'
    },
    {
      error: 'An unexpected error occurred.'
    }
  ];

  return errorList[errorId];
}

// GET requests
app.get('/api/notes', (req, res) => {
  const notesArray = [];

  for (const id in data.notes) {
    notesArray.push(data.notes[id]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json(error(0, id));

  } else if (data.notes[id] === undefined) {
    res.status(404).json(error(1, id));

  } else {
    const singleNote = data.notes[id];
    res.json(singleNote);
  }
});

app.use(express.json());

// POST requests
app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  if (Object.values(req.body).length === 0) {
    res.status(400).json(error(2));

  } else {
    newNote.id = data.nextId;
    data.notes[newNote.id] = newNote;
    data.nextId++;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) {
        res.status(500).json(error(3));
        return;
      }
      res.status(201).json(newNote);
    });
  }
});

// DELETE requests
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json(error(0));

  } else if (data.notes[id] === undefined) {
    res.status(404).json(error(1, id));

  } else {
    delete data.notes[id];
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) {
        res.status(500).json(error(3));
        return;
      }
      res.sendStatus(204);
    });
  }
});

// PUT requests
app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const newNote = req.body;

  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json(error(0));

  } else if (Object.values(req.body).length === 0) {
    res.status(400).json(error(2));

  } else if (data.notes[id] === undefined) {
    res.status(404).json(error(1, id));

  } else {
    newNote.id = id;
    data.notes[id] = newNote;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) {
        res.status(500).json(error(3));
        return;
      }
      res.status(200).json(data.notes[id]);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
