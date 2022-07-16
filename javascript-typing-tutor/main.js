//   not sure on formatting, but this is the idea for checking correctness
// do not use any loops, each keypress must trigger an event
// create an index variable to be incremented in the callback function
// document.addEventListener('keypress', function typingTutor(event) {
//   if keypress value === span[index].textContent
//     change class name to correct
//     increment index variable
//     change class name of new span to active
//     return index variable
//   else
//     change class name to incorrect
//     return index variable
// })

var typingIndex = 0;
var $spanContent = document.querySelectorAll('span');

document.addEventListener('keydown', function typingTutor(event) {
  if (event.key === $spanContent[typingIndex].textContent) {
    // console.log($spanContent[typingIndex].textContent);
    $spanContent[typingIndex].className = 'typing correct';
    typingIndex++;
    if (typingIndex < 29) {
      $spanContent[typingIndex].className = 'typing active';
    }
  } else {
    $spanContent[typingIndex].className = 'typing incorrect';
  }
  return typingIndex;
});
