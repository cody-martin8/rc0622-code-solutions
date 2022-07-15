var bookshelf = [
  {
    isbn: '123456789',
    title: 'Title of Book',
    author: 'Author of Book'
  },
  {
    isbn: '987654321',
    title: 'Title of Another Book',
    author: 'Author of Another Book'
  },
  {
    isbn: '192837465',
    title: 'Book Title',
    author: 'Book Author'
  }
];

console.log('Bookshelf array:', bookshelf, 'typeof:', typeof bookshelf);
var jsonString = JSON.stringify(bookshelf);
console.log('JSON string:', jsonString, 'typeof:', typeof jsonString);

var jsonNewString = '{"number ID":"123456789","name":"Cody Martin"}';
console.log('jsonNewString:', jsonNewString, 'typeof:', typeof jsonNewString);

var jsonNewObject = JSON.parse(jsonNewString);
console.log('jsonNewObject:', jsonNewObject, 'typeof:', typeof jsonNewObject);
