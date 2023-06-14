const burgerClose = document.querySelector('.burger__btn')
const menuBurger = document.querySelector('.header__menu-burger')
const menuClose = document.querySelector('.header__menu-top--close')
const header = document.querySelector('header')
// console.log(header);
// console.log(burgerClose, menuBurger, menuClose);

burgerClose.addEventListener('click', function() {
  menuBurger.classList.add('header__menu-burger-active')
})

menuClose.addEventListener('click', function() {
    menuBurger.classList.remove('header__menu-burger-active')
    // console.log('крестик нажат');
})

// document.addEventListener('click', function(e) {
//     if(e.target.closest('.menuBurger')) {
//         return;
//     }
//     else {
//         menuBurger.classList.remove('header__menu-burger-active')
//     }
// })

document.addEventListener('click', function(e) {
  let target = e.target;
  if (!target.closest(".container")) {
      menuBurger.classList.remove('header__menu-burger-active');
  //   form.querySelector('.header__top-form-input').value = "";
  //   document.querySelector('.form--open').style.opacity = 1;
  }
})

const headerItem1 = document.querySelector('.header__link--1')

// const navigatorUserAgent = navigator.userAgent
const visibleShopLink = document.querySelector('.footer__left-link_showed img')
const visibleShopAndroid = document.querySelector('.footer__left-link--android img')
// console.log(navigatorUserAgent);
// console.log(visibleShopLink);

if (/iPhone/i.test(navigator.userAgent)) {
  visibleShopLink.src = 'img/download_appstore.png'
} else if (/Android/i.test(navigator.userAgent)) {
  visibleShopLink.src = 'img/download_playmarket.png'
} else {
  visibleShopLink.src = 'img/download_rustore.png'
}
// console.log(window.screen.width);
if (window.screen.width <= 430 || /Android/i.test(navigator.userAgent)) {
  visibleShopAndroid.classList.remove('footer__left-link--hidden')
  // visibleShopAndroid.src
}

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   // код для мобильных устройств
//   console.log('вход с Айфон / андроид');

//   headerItem1.style.color = 'green'
// } else {
//   // код для обычных устройств
//   console.log('вход с компа');
//   headerItem1.style.color = 'blue'
// }

function copyClipboard(text) {
  return navigator.clipboard.writeText(text)
}

const saleTooltip = document.querySelector('.sale__tooltip')
const saleLink = document.querySelector('.sale__top-link')
const saleImg = document.querySelector('.sale__top-link img')
// console.log(saleTooltip);
saleLink.addEventListener('click', function() {
  // saleTooltip.clipboard.writeText('Скопировано')
  copyClipboard('ссылка копи')
  saleTooltip.textContent = 'Скопировано'
})

saleTooltip.addEventListener('click', function() {
  // saleTooltip.clipboard.writeText('Скопировано')
  copyClipboard('тултип копи')
  saleTooltip.textContent = 'Скопировано'
})

// saleTooltip.addEventListener('mouseleave', function() {
//   // saleTooltip.textContent = 'Копировать'
// })

const toolTipInitText = [saleLink, saleImg, saleTooltip]
toolTipInitText.forEach(item => item.addEventListener('mouseenter', function() {
  saleLink.style.background = '#877CCF'
}))

toolTipInitText.forEach(item => item.addEventListener('mouseleave', function() {
  saleLink.style.background = 'transparent'
}))

saleLink.addEventListener('mouseleave', function() {
  saleTooltip.textContent = 'Копировать'
})