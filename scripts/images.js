
const cards = document.querySelectorAll('.looks__image')

const images = [
  './images/_0001.png',
  './images/_0002.png',
  './images/_0003.png',
  './images/_0004.png',
  './images/_0005.png',
  './images/_0006.png',
  './images/_0007.png',
  './images/_0008.png',
  './images/_0009.png',
  './images/_0010.png',
  './images/_0011.png',
  './images/_0012.png',
  './images/_0013.png',
  './images/_0014.png',
]

function getURL() {
  const num = getRand(14)
  return images[num]
}


function getRand(number) {
  return Math.floor(Math.random()*number)
}

function changeImage() {

  const count = getRand(2)+1

  for (let i=0; i < count; i++) {
    const card = getRand(8)
    fadeIn(cards[card])
    
    
  }

  
}

const fadeIn = (card) => {
  card.style.opacity = 0;
  card.style.transition = `opacity 1000ms`;
  setTimeout(() => {
    card.src = getURL()
    card.style.opacity = 1;
  }, 1000);
};


setInterval(() => {changeImage()}, 2500)
