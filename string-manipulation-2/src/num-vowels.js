/* exported numVowels */
// receive string as an argument
// create variable to receive count of vowels
// create an if statement that screens for empty strings
//   create a for loop that iterates through the length of the given string
//     create an if statement: if A,E,I,O,U,a,e,i,o,u increment the vowel count
//     create an else statement: vowelCount += 0
// return vowel count

function numVowels(string) {
  var vowelCount = 0;
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  if (string === '') {
    return vowelCount;
  } else {
    for (var i = 0; i < string.length; i++) {
      // if (string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U' || string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||) {
      if (vowels.indexOf(string[i]) !== -1) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

// receive string as an argument
// create variable to receive count of vowels
// create an array for vowel checking
// create an if statement that screens for empty strings
//   create a for loop that iterates through the length of the given string
//     create an if statement: use indexOf() to check whether a character is a vowel (in the array)
//       if true, increment vowelCount by 1
// return vowel count
