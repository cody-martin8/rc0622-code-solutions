var leftIcon = document.querySelector('.left-icon');
var rightIcon = document.querySelector('.right-icon');

var dotOne = document.querySelector('.slide-one');
var dotTwo = document.querySelector('.slide-two');
var dotThree = document.querySelector('.slide-three');
var dotFour = document.querySelector('.slide-four');
var dotFive = document.querySelector('.slide-five');

var imageSlide = document.querySelectorAll('.image');
var progressDots = document.querySelectorAll('.fa-circle');

var imageIndex = 0;

function carousel() {
  if (imageSlide[imageIndex].className === 'image') {
    imageSlide[imageIndex].className = 'image hidden';
    progressDots[imageIndex].className = 'fa-regular fa-circle';
    if (imageIndex < 4) {
      imageSlide[imageIndex + 1].className = 'image';
      progressDots[imageIndex + 1].className = 'fa-solid fa-circle';
    } else if (imageIndex === 4) {
      imageSlide[0].className = 'image';
      progressDots[0].className = 'fa-solid fa-circle';
    }
  }
  imageIndex++;
  if (imageIndex === 5) {
    imageIndex = 0;
  }
}

function changeImage() {
  for (var i = 0; i < imageSlide.length; i++) {
    imageSlide[i].className = 'image hidden';
    progressDots[i].className = 'fa-regular fa-circle';
  }
  imageSlide[imageIndex].className = 'image';
  progressDots[imageIndex].className = 'fa-solid fa-circle';
}

var intervalID;

function pauseCarousel() {
  clearInterval(intervalID);
  intervalID = null;
}

function startCarousel() {
  if (!intervalID) {
    intervalID = setInterval(carousel, 3000);
  }
}

window.addEventListener('load', startCarousel);

dotOne.addEventListener('click', function () {
  imageIndex = 0;
  pauseCarousel();
  changeImage();
  startCarousel();
});

dotTwo.addEventListener('click', function () {
  imageIndex = 1;
  pauseCarousel();
  changeImage();
  startCarousel();
});

dotThree.addEventListener('click', function () {
  imageIndex = 2;
  pauseCarousel();
  changeImage();
  startCarousel();
});

dotFour.addEventListener('click', function () {
  imageIndex = 3;
  pauseCarousel();
  changeImage();
  startCarousel();
});

dotFive.addEventListener('click', function () {
  imageIndex = 4;
  pauseCarousel();
  changeImage();
  startCarousel();
});

leftIcon.addEventListener('click', function () {
  if (imageIndex !== 0) {
    imageIndex -= 1;
  } else {
    imageIndex = 4;
  }
  pauseCarousel();
  changeImage();
  startCarousel();
});

rightIcon.addEventListener('click', function () {
  if (imageIndex !== 4) {
    imageIndex += 1;
  } else {
    imageIndex = 0;
  }
  pauseCarousel();
  changeImage();
  startCarousel();
});
