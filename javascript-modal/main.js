// create two addEventListeners
//   one for Open Modal button
//   One for NO button on pop-up
// create function for each
//   Open Modal button changes classes to on
//     container on, pop-up-wrapper on, pop-up on
//   NO button changes classes to off
//     container off, pop-up-wrapper off, pop-up off

var $container = document.querySelector('.container');
var $popUpWrapper = document.querySelector('.pop-up-wrapper');
var $popUp = document.querySelector('.pop-up');
var $modalButton = document.querySelector('.modal-button-wrapper');
var $popUpButton = document.querySelector('.pop-up-button');

function openModal() {
  $container.className = 'container on';
  $popUpWrapper.className = 'pop-up-wrapper on';
  $popUp.className = 'pop-up on';
}

function closePopUp() {
  $container.className = 'container off';
  $popUpWrapper.className = 'pop-up-wrapper off';
  $popUp.className = 'pop-up off';
}

$modalButton.addEventListener('click', openModal);
$popUpButton.addEventListener('click', closePopUp);
