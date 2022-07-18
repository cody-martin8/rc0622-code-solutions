/* exported defaults */
// receive target and source as arguments
// convert the source object into an array and assign to a new variable
// create a for loop that will iterate through the length of the source array
//   create an if statement that checks if each property in source is located in target
//     if not, assign the property and value to the target object
// return the target object

function defaults(target, source) {
  var sourceArray = Object.keys(source);
  var targetArray = Object.keys(target);
  for (var i = 0; i < sourceArray.length; i++) {
    if (targetArray.indexOf(sourceArray[i]) === -1) {
      target[sourceArray[i]] = source[sourceArray[i]];
    }
  }
  return target;
}
