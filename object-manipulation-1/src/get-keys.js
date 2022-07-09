/* exported getKeys */
// receive object as argument
// use for...in statement to select properties in object
// create variable for storing new array
// create variable for iterating while loop
// create while loop to iterate through the length of the object

function getKeys(object) {
  var keyArray = [];
  for (var property in object) {
    keyArray.push(property);
  }
  return keyArray;
}

// receive object as argument
// create variable for storing new array
// use for...in statement to select properties
//   within for...in statement, push property into new array
// return new array
