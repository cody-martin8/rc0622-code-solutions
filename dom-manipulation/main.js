var clicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCounter() {
  clicks += 1;
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks > 0 && clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks > 3 && clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks > 6 && clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks > 9 && clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks > 12 && clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickCounter);
