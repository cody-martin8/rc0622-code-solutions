/* exported toObject */
// receive keyValuePair as argument
// declare a new variable as an object
// select first item in array and assign to object as a property using bracket notation
// select second item in array and assign it to the property of the object
// return object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

// receive keyValuePair as argument
// declare a new variable as an object
// select first item in array and assign to object as a property using bracket notation
// select second item in array and assign it to the property of the object
// return object
