//===========================Nawigacja=============================
//chowanie menu w widoku komórkowym po kliknięciu linka
document.querySelectorAll(".link").forEach((item) => {
  item.addEventListener("click", () => {
    hideNav();
  });
});
const hideNav = () => {
  document.querySelector(".menu__btn").checked = false;
};
//===========================More Info=============================
AOS.init();
//===========================Walidacja formularza==================
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("mail");
const checkbox = document.getElementById("opt-in");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Proszę wpisać imię");
  } else {
    setSuccessFor(name);
  }

  if (emailValue === "") {
    setErrorFor(email, "Proszę wpisać adres mailowy");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Niepoprawny adres mailowy");
  } else {
    setSuccessFor(email);
  }

  if (!checkbox.checked) {
    setErrorFor(checkbox, "Proszę wyrazić zgodę na przetwarzanie danych");
  } else {
    setSuccessFor(checkbox);
  }
}

function setErrorFor(input, message) {
  const newsletterInput = input.parentElement;
  const small = newsletterInput.querySelector("small");
  newsletterInput.className = "newsletter__input error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const newsletterInput = input.parentElement;
  newsletterInput.className = "newsletter__input success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//============= Komunikat cookies======================
const cookie = document.querySelector(".cookie");
const buttonClose = document.querySelector(".cookie__close");

if (localStorage.getItem("cookieAccepted") !== "isAccepted") {
  setTimeout(() => {
    cookie.classList.remove("hidden");
  }, 3000);
} else {
  cookie.classList.add("hidden");
}

buttonClose.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "isAccepted");
  cookie.classList.add("hidden");
});

//=============Animowane zdjęcia członków zespołu======================
const photoWrapper = document.querySelectorAll('.photo__wrapper');
const photo = document.querySelectorAll('.photo');
const social = document.querySelectorAll('.aboutUs__social');

for(let i = 0; i < 4; i++){
  photoWrapper[i].addEventListener('mouseover', () => {
    photo[i].style.transform = 'rotateY(90deg)';
    photo[i].style.transition = "ease-in 0.4s";
    setTimeout(function(){
      photo[i].classList.add('hidden__aboutUs');
      social[i].classList.remove('hidden__aboutUs');
      if(i === 0 || i === 2){
        photoWrapper[i].classList.add('background__social1');
      } else if (i === 1 || i === 3){
        photoWrapper[i].classList.add('background__social2');
      }
    },500)
  })
  
  photoWrapper[i].addEventListener('mouseleave', () => {
    photo[i].style.transform = 'rotateY(0deg)';
    setTimeout(function(){
      photo[i].classList.remove('hidden__aboutUs');
      social[i].classList.add('hidden__aboutUs');
      photoWrapper[i].classList.remove('background__social1');
      photoWrapper[i].classList.remove('background__social2');
    },500)
  })
}