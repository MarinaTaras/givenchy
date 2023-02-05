// меню бургер

const menuBurgers = document.querySelectorAll('.menu__burger');
const popupMenu = document.querySelector('.popup-menu');
const menuSpans = document.querySelectorAll('.menu__span');
let i

menuBurgers.forEach(elem => {
  elem.addEventListener("click", () => {
    openPopup(popupMenu)
    menuSpans.forEach(element => {
      activSpan(element)
    })

  })
});

menuBurgers.forEach



function openPopup(popup) {
    popup.classList.toggle('popup-menu_open')
}

function activSpan(span) {
    span.classList.toggle('menu__span_activ')
}

// function closePopup(popup) {
//   popup.classList.remove('popup-menu_opened')



/**
 * Submit 
 */
const footerItem = document.querySelector('.footer__item')

const footerForm = document.querySelector('.footer__form')

footerForm && footerForm.addEventListener('submit', submitForm)


function submitForm(event) {
  
    event.preventDefault()
    const footerItemValue = footerForm['footer-item']
    footerItem.innerText = footerItemValue.value
  
}

/**
 * ABOUT 
 */

const moveLefts = document.querySelectorAll('.left')
const moveRight = document.querySelectorAll('#right')

console.log(moveLefts)

window.addEventListener('scroll', fadeinleft)

function fadeinleft() {
  for (let i = 0; i < moveLefts.length; i++ ) {
    const moveLeft = moveLefts[i];
    const moveLeftHeight = moveLeft.offsetHeight;
    const moveLeftOffset = offSet(moveLeft).top;
    const moveLeftStart = 4;

    let moveLeftPoint = window.innerHeight - moveLeftHeight/moveLeftStart
    if (moveLeftHeight > window.innerHeight) {
      moveLeftPoint = window.innerHeight - window.innerHeight/moveLeftStart
    }

    if ((pageYOffSet > moveLeftOffset - moveLeftPoint) && (pageYOffSet < (moveLeftOffset - moveLeftHeight))) {
      moveLeft.classList.add('fadein-left')
    } else {
      moveLeft.classList.remove('fadein-left')
    }
  


  }
}