/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var output = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return output;
}
