/* eslint-disable no-unused-vars */

let slideIndex = 0

displaySlides(slideIndex)

const $slides = document.getElementsByClassName('slide')

function displaySlides() {
  const $slides = document.getElementsByClassName('slide')
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = 'none'
  }
  $slides[slideIndex].style.display = 'block'
}
