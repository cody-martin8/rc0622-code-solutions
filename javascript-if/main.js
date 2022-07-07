/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var output;
  if (number < 5) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function isEven(number) {
  var output;
  if ((number % 2) === 0) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function startsWithJ(string) {
  var output;
  if (string.charAt(0) === 'j' || string.charAt(0) === 'J') {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function isOldEnoughToDrink(person) {
  var output;
  if (person.age > 21) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function isOldEnoughToDrive(person) {
  var output;
  if (person.age > 16) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function isOldEnoughToDrinkAndDrive(person) {
  var output = false;
  return output;
}

function categorizeAcidity(pH) {
  var output;
  if (pH === 7) {
    output = 'The pH is neutral';
  } else if (pH < 14 && pH > 7) {
    output = 'The pH is basic';
  } else if (pH > 0 && pH < 7) {
    output = 'The pH is acidic';
  } else if (pH > 14 || pH < 0) {
    output = 'The pH is invalid';
  }
  return output;
}

function introduceWarnerBro(name) {
  var output;
  if (name === 'yakko') {
    output = "We're the warner brothers!";
  } else if (name === 'wakko') {
    output = "We're the warner brothers!";
  } else if (name === 'dot') {
    output = "I'm cute~";
  } else {
    output = 'Goodnight everybody!';
  }
  return output;
}
