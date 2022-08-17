const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const op = process.argv[3];

// console.log(num1);
// console.log(num2);
// console.log(op);

if (op === 'plus') {
  const sum = add(num1, num2);
  console.log('Result:', sum);
} else if (op === 'minus') {
  const diff = subtract(num1, num2);
  console.log('Result:', diff);
} else if (op === 'times') {
  const prod = multiply(num1, num2);
  console.log('Result:', prod);
} else if (op === 'over') {
  const quot = divide(num1, num2);
  console.log('Result:', quot);
} else {
  console.log('Invalid operation');
}
