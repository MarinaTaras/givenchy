// меню бургер

const menuBurgers = document.querySelectorAll('.menu__burger');
const popupMenu = document.querySelector('.popup-menu');
const menuSpans = document.querySelectorAll('.menu__span');
const menuItems = document.querySelectorAll('.popup-menu__item')
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

menuItems.forEach(elem => {
  elem.addEventListener("click", () => {
    closePopup(popupMenu)
    menuSpans.forEach(element => {
      activSpan(element)
    })
  })
});


function openPopup(popup) {
  popup.classList.toggle('popup-menu_open')
}

function activSpan(span) {
  span.classList.toggle('menu__span_activ')
}

function closePopup(popup) {
  popup.classList.remove('popup-menu_open')
}


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
 * ABOUT: анимация при скроле
 */

const moveLefts = document.querySelectorAll('.left')
const moveRights = document.querySelectorAll('.right')


window.addEventListener('scroll', fadeinleft)
window.addEventListener('scroll', fadeinRight)

function fadeinleft() {
  for (let i = 0; i < moveLefts.length; i++) {
    const moveLeft= moveLefts[i];
    const observer = new IntersectionObserver( trueCallback );
    observer.observe(moveLeft)

    function trueCallback() {
      setTimeout(() => {
       moveLeft.classList.add('move-left');
      }, 500);
	  };
  }
}


function fadeinRight() {
  for (let j = 0; j < moveRights.length; j++) {
    const moveRight= moveRights[j];
    const observer = new IntersectionObserver( trueCallback );
    observer.observe(moveRight)

    function trueCallback() {
      setTimeout(() => {
       moveRight.classList.add('move-right');
      }, 500);	  	
	  };
  }
}