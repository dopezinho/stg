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


// Buttons to change Photos

const initialPhotos = document.querySelectorAll('.initialPhotos')
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

// Second Carousel


let depoTemplate = document.querySelector('.depoTemplate')
const dialogTemplate = document.createElement('div')
const dialogBox = document.createElement('div')
const depoInfo = document.createElement('p')
const dialogImage = document.createElement('div')
const captionEBox = document.createElement('div')

dialogTemplate.classList.add('dialogTemplate')
dialogBox.classList.add('dialogBox')
depoInfo.classList.add('depoInfo')
dialogImage.classList.add('dialogImage')
captionEBox.classList.add('captionEBox')

dialogBox.innerHTML = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos quibusdam illo debitis nulla natus?"'
depoInfo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

captionEBox.appendChild(dialogBox)
captionEBox.appendChild(depoInfo)


dialogTemplate.appendChild(captionEBox)
dialogTemplate.appendChild(dialogImage)



depoTemplate.append(dialogTemplate)



const depoList = [['"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos quibusdam illo debitis nulla natus?"', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'black'],
['"Vai Caralho, Corinthians porra. Facilis dignissimos quibusdam illo"', 'Lorem ipsum dolor sit ', 'blue'],
['"CADE O ISGUEIRO??. CADE SAPORRA???? Facilis dignissimos quibusdam illo"', 'Felix', 'blue'],
['"XURU XURU, CADE O XURU XURU. Facilis dignissimos quibusdam illo"', 'Lorem ipsum dolor sit ', 'blue']]
console.log(depoList);
let dep = 1
let leftPosition = 0;

setInterval(() => {
  dialogTemplate.style.animation = 'none';
  requestAnimationFrame(() => {
    dialogTemplate.style.animation = 'changeDepo 15s ease-in-out infinite';
    dialogImage.style.animation = 'changeDepo 15s ease-in-out infinite'
    setTimeout(() => {
      dialogBox.innerHTML = `${depoList[dep][0]}`;
      depoInfo.innerHTML = `${depoList[dep][1]}`;
    }, 1000); // delay execution by 1 second
    if (dep == depoList.length - 1) {

      dep = 0
      console.log(dep);
    } else {
      dep++;
      console.log(dep);
    }
  });
}, 15000)



