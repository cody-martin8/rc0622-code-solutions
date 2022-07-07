/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  var i = 0;
  while (i < students.length) {
    studentNames.push(students[i].name);
    i++;
  }
  return studentNames;
}
