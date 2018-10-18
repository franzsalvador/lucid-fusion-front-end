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
    activateIndicators()
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
    activateIndicators()
  }, 600)
}

function displaySlides() {
  const $slides = document.getElementsByClassName('slide')
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = 'none'
  }
  $slides[slideIndex].style.display = 'block'
}

function activateIndicators() {
  const $indicators = document.getElementsByClassName('indicators')
  for (let i = 0; i < $indicators.length; i++) {
    if (i === slideIndex) {
      $indicators[i].setAttribute('class', ' indicators active-indicator')
    }
    else $indicators[i].setAttribute('class', 'indicators')
  }
}

let scrollInterval
let countdown
let timer = 2
const startScroll = () => {
  scrollInterval = setInterval(nextSlide, 3000)
  countdown = setInterval(runClock, 1000)
  timer = 2
}

const stopScroll = () => {
  clearInterval(scrollInterval)
  clearInterval(countdown)
}

function runClock() {
  const $timer = document.getElementById('timer')
  $timer.textContent = timer
  timer === 0
    ? timer = 2
    : timer--
}

startScroll()
