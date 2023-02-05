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