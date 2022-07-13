var $contactForm = document.querySelector('#contact-form');

function submitForm(event) {
  event.preventDefault();
  var formSubmission = {};
  formSubmission.name = $contactForm.elements.name.value;
  formSubmission.email = $contactForm.elements.email.value;
  formSubmission.message = $contactForm.elements.message.value;
  console.log('Message data: ', formSubmission);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitForm);
