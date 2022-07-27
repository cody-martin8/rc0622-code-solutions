var message = document.querySelector('.message');

function changeHeading() {
  message.textContent = 'Hello There';
}

setTimeout(changeHeading, 2 * 1000);
