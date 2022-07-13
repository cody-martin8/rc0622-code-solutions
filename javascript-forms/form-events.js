function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ': ' + event.target.value);
}

var $userName = document.querySelector('label[for=user-name] + input');
var $userEmail = document.querySelector('label[for=user-email] + input');
var $userMessage = document.querySelector('label[for=user-message] + textarea');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
