/* eslint-disable no-unused-vars */

const $slides = document.getElementsByClassName('slide')

let currentSlide = 0
let previousSlide = $slides.length - 1
let nextSlide = currentSlide + 1

const prev = () => {
  currentSlide === 0
    ? currentSlide = $slides.length - 1
    : currentSlide = currentSlide -= 1
  previousSlide === 0
    ? previousSlide = $slides.length - 1
    : previousSlide = previousSlide - 1
  nextSlide === 0
    ? nextSlide = $slides.length - 1
    : nextSlide = nextSlide - 1
  displaySlides()
}

const next = () => {
  currentSlide === $slides.length - 1
    ? currentSlide = 0
    : currentSlide = currentSlide + 1
  previousSlide === $slides.length - 1
    ? previousSlide = 0
    : previousSlide = previousSlide + 1
  nextSlide === $slides.length - 1
    ? nextSlide = 0
    : nextSlide = nextSlide + 1
  displaySlides()
}

function displaySlides() {
  const $slides = document.getElementsByClassName('slide')
  for (let i = 0; i < $slides.length; i++) {
    if (i !== previousSlide) {
      $slides[i].setAttribute('class', 'slide')
      $slides[i].style.display = 'none'
    }
    if (i === previousSlide) {
      $slides[i].setAttribute('class', 'slide previous-slide')
      $slides[i].style.display = 'inline'
    }
    if (i === nextSlide) {
      $slides[i].setAttribute('class', 'slide next-slide')
      $slides[i].style.display = 'inline'
    }
    if (i === currentSlide) {
      $slides[i].setAttribute('class', 'slide')
      $slides[i].style.display = 'inline'
    }
  }
  activateIndicators()
}

function activateIndicators() {
  const $indicators = document.getElementsByClassName('indicators')
  for (let i = 0; i < $indicators.length; i++) {
    if (i === currentSlide) {
      $indicators[i].setAttribute('class', ' indicators active-indicator')
    }
    else $indicators[i].setAttribute('class', 'indicators')
  }
}

let scrollInterval
let countdown
let timer = 2

const startScroll = () => {
  scrollInterval = setInterval(next, 3000)
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

displaySlides()
startScroll()
