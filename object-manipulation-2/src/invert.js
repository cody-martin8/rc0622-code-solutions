/* exported invert */
// receive the source as an argument
// create a variable to receive the new object
// create a for loop that will iterate through the length of the object
//   assign the object properties into an array so that the length can be used
//   select each property in the object and assign it to the "value" property of the new object
// return the new object

function invert(source) {
  var invertedObject = {};
  var sourceArray = Object.keys(source);
  for (var i = 0; i < sourceArray.length; i++) {
    invertedObject[source[sourceArray[i]]] = sourceArray[i];
  }
  return invertedObject;
}

// receive the source as an argument
// create a variable to receive the new object
// create a for loop that will iterate through the length of the object
//   assign the object properties into an array so that the length can be used
//   select each property in the object and assign it to the "value" property of the new object
// return the new object
