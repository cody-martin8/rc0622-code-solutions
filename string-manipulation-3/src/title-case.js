/* exported titleCase */
// receive title as an argument
// create a for loop that makes all characters in the title lowercase
// split the title with ' ', and store in titleArray

// capitalize the first letter of the first word

// create an if statement that evaluates for words that are not "and, or, nor, but, a, an, the, as, at, by, for, in, of, on, per, to"
//   capitalize the first letter of the word

// create an if statement that evaluates for a word following a ":" (use string.endsWith())
//   capitalize the first letter of the word

// create an if statement that evaluates for hard code exceptions
//   if Javascript, make JavaScript
//   else if api, make API

// Push results to variable title

function titleCase(title) {
  title = title.toLowerCase();

  let string = title.charAt(0);
  for (let z = 1; z < title.length; z++) {
    let index = title.charAt(z);
    if (title.charAt(z - 1) === '-') {
      index = title.charAt(z).toUpperCase();
    }
    string += index;
  }
  title = string;

  const titleArray = title.split(' ');
  titleArray[0] = titleArray[0].charAt(0).toUpperCase() + titleArray[0].slice(1);

  const minorArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (let i = 0; i < titleArray.length; i++) {
    if (!minorArray.includes(titleArray[i])) {
      titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
    }
    if (titleArray[i] === 'Javascript') {
      titleArray[i] = 'JavaScript';
    }
    if (titleArray[i] === 'Javascript:') {
      titleArray[i] = 'JavaScript:';
    }
    if (titleArray[i] === 'Api') {
      titleArray[i] = 'API';
    }
    if (i >= 1 && titleArray[i - 1].endsWith(':')) {
      titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
    }
  }

  title = '';
  for (let n = 0; n < titleArray.length; n++) {
    if (n === titleArray.length - 1) {
      title += titleArray[n];
    } else {
      title += titleArray[n] + ' ';
    }
  }

  return title;
}

// receive title as an argument
// make all characters in the title lowercase

// create a for loop that iterates through each character checks if the prior char is '-'
//   create an if statement that checks if the prior character is '-'
//     if so, capitalize the iterative character

// split the title with ' ', and store in titleArray
// store all the minor words that need to be avoided in an array

// create a for loop that iterates through each word in the titleArray
//   capitalize the first letter of the first word
//   create an if statement that evaluates for words that are not the minor words
//     capitalize the first letter of the word
//   create an if statement that evaluates for a word following a ":" (use string.endsWith())
//     capitalize the first letter of the word
//   create an if statement that evaluates for hard code exceptions
//     if Javascript, make JavaScript
//     else if api, make API

// concatenate each titleArray word to variable title string
