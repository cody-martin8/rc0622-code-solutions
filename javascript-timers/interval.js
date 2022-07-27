var countdown = document.querySelector('.countdown-display');

function countingDown() {
  if (countdown.textContent === '4') {
    countdown.textContent = '3';
  } else if (countdown.textContent === '3') {
    countdown.textContent = '2';
  } else if (countdown.textContent === '2') {
    countdown.textContent = '1';
  } else if (countdown.textContent === '1') {
    countdown.textContent = '~Earth Beeeelooowww Us~';
  } else if (countdown.textContent === '~Earth Beeeelooowww Us~') {
    cancelCountdown();
  }
}

function cancelCountdown() {
  clearInterval(intervalID);
}

var intervalID = setInterval(countingDown, 1 * 1000);
