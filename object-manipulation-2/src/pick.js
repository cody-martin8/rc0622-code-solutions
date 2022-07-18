/* exported pick */
// receive source and keys as arguments
// create a variable to be assigned an empty object
// create variables for two different loops
// create a for loop that iterates through the length of the keys array
//   create another for loop that iterates through the length of the source object
//     create an if statement that checks whether the first key matches each step in the source object
//       if yes
//         push property to new object w/value
//         iterate the first loop variable
//         return object value
//       if no
//         iterate second loop variable
//     iterate first loop variable

function pick(source, keys) {
  var pickObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      pickObject[keys[i]] = source[keys[i]];
    }
  }
  return pickObject;
}

// receive source and keys as arguments
// create a variable to be assigned an empty object
// create a for loop that iterates through the length of keys
//   create an if statement that checks for the keys properties in the source object
//     if not undefined, assign the value of that property in the source object to the same property in the new object
// return new object
