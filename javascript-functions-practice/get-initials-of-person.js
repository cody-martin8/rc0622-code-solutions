/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var output = person.firstName.charAt(0) + person.lastName.charAt(0);
  return output;
}
