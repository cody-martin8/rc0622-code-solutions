/* exported omit */
// receive source and keys as arguments
// create a variable to receive the new object
// create a for loop that iterates the length of the source object
//   push the object properties into an array to be able to use its length
//   create an if statement that checks whether the key property values are equal to that of the source object
//     if so, skip it
//     if not, assign the source property and value to the new object
// return the new object

function omit(source, keys) {
  var pickObject = {};
  var sourceArray = Object.keys(source);
  for (var i = 0; i < sourceArray.length; i++) {
    if (keys.indexOf(sourceArray[i]) === -1) {
      pickObject[sourceArray[i]] = source[sourceArray[i]];
    }
  }
  return pickObject;
}

// receive source and keys as arguments
// create a variable to receive the new object
// create a for loop that iterates the length of the source object
//   push the object properties into an array to be able to use its length
//   create an if statement that checks if the indexOf method of the keys object with the argument of each source property is equal to -1
//     if so, this means the property is not present in the keys array and can be assigned to the new object
// return the new object
