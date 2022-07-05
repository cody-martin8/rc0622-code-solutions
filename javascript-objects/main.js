var student = {
  firstName: 'Cody',
  lastName: 'Martin',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'DMV car titling and registration at dealership.';

console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);

console.log('value of student: ', student);

var vehicle = {
  make: 'Nissan',
  model: 'Skyline',
  year: 1999
};

vehicle['color'] = 'midnight purple';
vehicle['isConvertible'] = false;

console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Charlie',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
