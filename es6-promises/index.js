const takeAChance = require('./take-a-chance');

const promiseObject = takeAChance('Cody');

promiseObject
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err.message);
  });
