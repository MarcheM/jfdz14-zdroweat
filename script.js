//===========================Nawigacja=============================
//chowanie menu w widoku komórkowym po kliknięciu linka
document.querySelectorAll('.link').forEach((item) => {
  item.addEventListener('click', () => {
    hideNav()
  })
})
const hideNav = () => {
  document.querySelector('.menu__btn').checked = false
}

//podświetlanie nawigacji

const smallDivs = {
  info: document.querySelector('.menu--about'),
  about: document.querySelector('.menu--us'),
  news: document.querySelector('.menu--sign-in'),
}

const bigDivs = {
  start: document.querySelector('.menu--home'),
  more: document.querySelector('.menu--more'),
}

let optionsForSmallDivs = () => {
  if (window.innerWidth < 576) {
    return {
      threshold: 0,
      rootMargin: '-25px',
    }
  } else if (window.innerWidth < 992) {
    return {
      threshold: 0.5,
      rootMargin: '-50px',
    }
  } else {
    return {
      threshold: 0.9,
      rootMargin: '-20px',
    }
  }
}

let optionsForBigDivs = () => {
  if (window.innerWidth < 576) {
    return {
      threshold: 0,
      rootMargin: '-125px',
    }
  } else if (window.innerWidth < 992) {
    return {
      threshold: 0.4,
      rootMargin: '40px',
    }
  } else {
    return {
      threshold: 0.75,
      rootMargin: '300px',
    }
  }
}
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let itemId = entry.target.id // item-1
    // console.log(entry)
    if (entry.isIntersecting) {
      smallDivs[itemId].style.textDecoration = 'underline'
    } else {
      smallDivs[itemId].style.textDecoration = 'none'
    }
  })
}, optionsForSmallDivs())

const intersectionObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let itemId = entry.target.id // item-1
    // console.log(entry)
    if (entry.isIntersecting) {
      bigDivs[itemId].style.textDecoration = 'underline'
    } else {
      bigDivs[itemId].style.textDecoration = 'none'
    }
  })
}, optionsForBigDivs())

const smallDivSelector = Object.keys(smallDivs)
  .map((key) => `#${key}`)
  .join()
document
  .querySelectorAll(smallDivSelector)
  .forEach((element) => intersectionObserver.observe(element))

const bigDivSelector = Object.keys(bigDivs)
  .map((key) => `#${key}`)
  .join()
document
  .querySelectorAll(bigDivSelector)
  .forEach((element) => intersectionObserver2.observe(element))

//shrink nav on scroll


window.addEventListener('scroll', () => {
  if ((document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) && document.querySelector('.menu__btn').checked === false) {
    document.querySelector(".menu").style.height = "50px";

  } else {
    document.querySelector(".menu").style.height = "70px";
  }
})


//=========================== Carousel =============================

let index = 0
const slides = document.querySelectorAll('.hero__background')
let n = slides.length
const arrowPrev = document.querySelector('.prev')
const arrowNext = document.querySelector('.next')

arrowPrev.addEventListener('click', function () {
  changeSlide('left')
  resetTimer()
})

arrowNext.addEventListener('click', function () {
  changeSlide('right')
  resetTimer()
})

function changeSlide(direction) {
  index = direction === 'left' ? (index + n - 1) % n : (index + 1) % n

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('none')
  }

  slides[index].classList.remove('none')
}

// Automatic slide

function autoPlay() {
  changeSlide('right')
}

let timer = setInterval(autoPlay, 4000)

//Reset automatic play and start again
function resetTimer() {
  clearInterval(timer)
  timer = setInterval(autoPlay, 4000)
}

//===========================More Info=============================
AOS.init()
//===========================Walidacja formularza==================
const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('mail')
const checkbox = document.getElementById('opt-in')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const nameValue = name.value.trim()
  const emailValue = email.value.trim()

  if (nameValue === '') {
    setErrorFor(name, 'Proszę wpisać imię')
  } else {
    setSuccessFor(name)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Proszę wpisać adres mailowy')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Niepoprawny adres mailowy')
  } else {
    setSuccessFor(email)
  }

  if (!checkbox.checked) {
    setErrorFor(checkbox, 'Proszę wyrazić zgodę na przetwarzanie danych')
  } else {
    setSuccessFor(checkbox)
  }

  if (
    checkbox.checked &&
    emailValue !== '' &&
    isEmail(emailValue) &&
    nameValue !== ''
  ) {
    window.open('../game/game.html')
  }
}

function setErrorFor(input, message) {
  const newsletterInput = input.parentElement
  const small = newsletterInput.querySelector('small')
  newsletterInput.className = 'newsletter__input error'
  small.innerText = message
}

function setSuccessFor(input) {
  const newsletterInput = input.parentElement
  newsletterInput.className = 'newsletter__input success'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  )
}

//============= Komunikat cookies======================
const cookie = document.querySelector('.cookie')
const buttonClose = document.querySelector('.cookie__close')

if (localStorage.getItem('cookieAccepted') !== 'isAccepted') {
  setTimeout(() => {
    cookie.classList.remove('hidden')
  }, 3000)
} else {
  cookie.classList.add('hidden')
}

buttonClose.addEventListener('click', () => {
  localStorage.setItem('cookieAccepted', 'isAccepted')
  cookie.classList.add('hidden')
})

//=============Animowane zdjęcia członków zespołu======================
const photoWrapper = document.querySelectorAll('.photo__wrapper')
const photo = document.querySelectorAll('.photo')
const social = document.querySelectorAll('.aboutUs__social')

for (let i = 0; i < 4; i++) {
  photoWrapper[i].addEventListener('mouseover', () => {
    photo[i].style.transform = 'rotateY(90deg)'
    photo[i].style.transition = 'ease-in 0.4s'
    setTimeout(function () {
      photo[i].classList.add('hidden__aboutUs')
      social[i].classList.remove('hidden__aboutUs')
      if (i === 0 || i === 2) {
        photoWrapper[i].classList.add('background__social1')
      } else if (i === 1 || i === 3) {
        photoWrapper[i].classList.add('background__social2')
      }
    }, 500)
  })

  photoWrapper[i].addEventListener('mouseleave', () => {
    photo[i].style.transform = 'rotateY(0deg)'
    setTimeout(function () {
      photo[i].classList.remove('hidden__aboutUs')
      social[i].classList.add('hidden__aboutUs')
      photoWrapper[i].classList.remove('background__social1')
      photoWrapper[i].classList.remove('background__social2')
    }, 500)
  })
}

//=============Arrow Scroll Up======================
const arrow = document.querySelector('.scroll__up')

window.onscroll = function () {
  'use strict'
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    arrow.classList.add('scroll__display')
    arrow.classList.remove('scroll__up')
  } else {
    arrow.classList.remove('scroll__display')
    arrow.classList.add('scroll__up')
  }
}
