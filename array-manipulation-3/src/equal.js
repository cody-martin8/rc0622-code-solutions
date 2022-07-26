/* exported equal */
// receive first and second as arguments
// create for loop that iterates through the length of each array
// create an if statement that checks for equality between each iteration of the arrays
//   if false, return false

function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  if (i !== first.length || i !== second.length) {
    return false;
  } else {
    return true;
  }
}

// receive first and second as arguments
// create for loop that iterates through the length of each array
// create an if statement that checks for equality between each iteration of the arrays
//   if false, return false
// create another if statement that checks that both arrays were iterated through completely
//   if so, then all indexes were checked for equality, and the arrays have the same number of indexes that are equal
