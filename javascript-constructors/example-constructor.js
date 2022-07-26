function ExampleConstructor() {}

console.log('Value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

var aFunction = new ExampleConstructor();
console.log('value of aFunction:', aFunction);
var prototypeFunction = aFunction instanceof ExampleConstructor;
console.log('Is instance of?', prototypeFunction);
