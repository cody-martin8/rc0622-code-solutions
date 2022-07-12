// create addEventListener that calls function for switching class name
// create function that changes classes for bulb-row and button
//   use if statement to check current class name, then switch

var $bulbRow = document.querySelector('.bulb-row');
var $button = document.querySelector('button');

function lightSwitch() {
  if ($bulbRow.className === 'bulb-row on') {
    $bulbRow.className = 'bulb-row off';
    $button.className = 'button off';
  } else {
    $bulbRow.className = 'bulb-row on';
    $button.className = 'button on';
  }
}

$button.addEventListener('click', lightSwitch);
