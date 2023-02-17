// navbar mobile version

function mobileNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// navbar button animation

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

// initial photos buttons

const initialTemplate = document.querySelector('.initialPage')
const initialPhotos = document.querySelectorAll('.initialPhotos')
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')
const auto = false
const intervalTime = 5000
let slideInterval

/*const nextSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current')
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add('current')
  } else {
    initialPhotos[0].classList.add('current')
  }
  setTimeout(() => {current.classList.remove('current')})
}

const previousSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current')
  if(current.previousElementSibling){
    current.previousElementSibling.classList.add('current')
  } else {
    initialPhotos[initialPhotos.length - 1].classList.add('current')
  }
  setTimeout(() => {current.classList.remove('current')})
}

leftButton.addEventListener('click', e => {
  previousSlide()
})

rightButton.addEventListener('click', e => {
  nextSlide()
})*/


// Buttons to change Photos

const buttonsPhotos = document.querySelectorAll('.changePhoto')

buttonsPhotos[0].addEventListener('click', e => {
  initialPhotos[1].classList.add('current')
  initialPhotos[0].classList.remove('current')
  initialPhotos[2].classList.remove('current')
  buttonsPhotos[0].style.backgroundColor = '#ffffffff'
  buttonsPhotos[1].style.backgroundColor = 'transparent'
  buttonsPhotos[2].style.backgroundColor = 'transparent'
})

buttonsPhotos[1].addEventListener('click', e => {
  initialPhotos[0].classList.add('current')
  initialPhotos[2].classList.remove('current')
  initialPhotos[1].classList.remove('current')
  buttonsPhotos[1].style.backgroundColor = '#ffffffff'
  buttonsPhotos[2].style.backgroundColor = 'transparent'
  buttonsPhotos[0].style.backgroundColor = 'transparent'
  
})

buttonsPhotos[2].addEventListener('click', e => {
  initialPhotos[2].classList.add('current')
  initialPhotos[1].classList.remove('current')
  initialPhotos[0].classList.remove('current')
  buttonsPhotos[2].style.backgroundColor = '#ffffffff'
  buttonsPhotos[0].style.backgroundColor = 'transparent'
  buttonsPhotos[1].style.backgroundColor = 'transparent'
})