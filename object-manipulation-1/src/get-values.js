/* exported getValues */
// receive object as argument
// create variable for new array
// use for...in statement to select values in object
//   within for...in statement, push values into new array
// return new array

function getValues(object) {
  var valuesArray = [];
  for (var property in object) {
    valuesArray.push(object[property]);
  }
  return valuesArray;
}

// receive object as argument
// create variable for new array
// use for...in statement to select values in object
//   within for...in statement, push values into new array using bracket notation
// return new array
