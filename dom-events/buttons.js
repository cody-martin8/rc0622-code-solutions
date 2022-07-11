function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('target property of event object: ', event.target);
}

var $button = document.querySelector('.click-button');
$button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('target property of the event object', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('target property of the event object', event.target);
}

var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
