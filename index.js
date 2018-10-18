/* eslint-disable no-unused-vars */

let slideIndex = 0

displaySlides(slideIndex)

const $slides = document.getElementsByClassName('slide')

const prevSlide = () => {
  $slides[slideIndex].setAttribute('class', 'slide slideOutLeft')
  setTimeout(() => {
    slideIndex < 1
      ? slideIndex = $slides.length - 1
      : slideIndex = slideIndex -= 1
    $slides[slideIndex].setAttribute('class', 'slide slideInLeft')
    displaySlides()
  }, 600)
}

const nextSlide = () => {
  $slides[slideIndex].setAttribute('class', 'slide slideOutRight')
  setTimeout(() => {
    slideIndex >= $slides.length - 1
      ? slideIndex = 0
      : slideIndex = slideIndex += 1
    $slides[slideIndex].setAttribute('class', 'slide slideInRight')
    displaySlides()
  }, 600)
}

function displaySlides() {
  const $slides = document.getElementsByClassName('slide')
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = 'none'
  }
  $slides[slideIndex].style.display = 'block'
}
