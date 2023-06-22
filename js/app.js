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


// const navigatorUserAgent = navigator.userAgent
const visibleShopImg = document.querySelector('.footer__left-link_showed img')
const visibleShopLink = document.querySelector('.footer__left-link_showed')

const visibleShopAndroid = document.querySelector('.footer__left-link--android img')

// footer id's
// const footerAppstore = document.getElementById('footer__appstore')
// const footerPlaymarket = document.getElementById('footer__playmarket')
// const footerRustore = document.getElementById('footer__rustore')
// console.log(footerAppstore, footerPlaymarket, footerRustore);

// console.log(navigatorUserAgent);
// console.log(visibleShopLink);

// if (/iPhone/i.test(navigator.userAgent)) {
//   footerAppstore.src = 'img/download_appstore.png';
//   footerPlaymarket.style.display = 'none'
//   footerRustore.style.display = 'none'
// } else if (/Android/i.test(navigator.userAgent)) {
//   footerPlaymarket.src = 'img/download_playmarket.png';
//   footerAppstore.style.display = 'none'
//   footerRustore.style.display = 'none'
// } else {
//   footerRustore.src = 'img/download_rustore.png';
//   footerPlaymarket.style.display = 'none'
//   footerAppstore.style.display = 'none'
// }
// // console.log(window.screen.width);
// if (window.screen.width <= 430 || /Android/i.test(navigator.userAgent)) {
//   visibleShopAndroid.classList.remove('footer__left-link--hidden')
//   // visibleShopAndroid.src
// }

console.log(window.screen.width);

if (window.screen.width < 1024) {
  if (/iPhone/i.test(navigator.userAgent)) {
    visibleShopImg.src = 'img/download_appstore.svg';
    visibleShopLink.href = 'https://apps.apple.com/ru/app/coral-club/id1437262333'
  } else if (/Android/i.test(navigator.userAgent)) {
    visibleShopImg.src = 'img/download_playmarket.svg';
    visibleShopLink.href = 'https://play.google.com/store/apps/details?id=com.coralclub.distribution.app&hl=ru'
  } else {
    visibleShopImg.src = 'img/download_rustore.svg';
    visibleShopLink.href = 'https://apps.rustore.ru/app/com.coralclub.distribution.app'
  }
}
// if (/iPhone/i.test(navigator.userAgent)) {
//   visibleShopImg.src = 'img/download_appstore.svg';
//   visibleShopLink.href = 'https://apps.apple.com/ru/app/coral-club/id1437262333'
// } else if (/Android/i.test(navigator.userAgent)) {
//   visibleShopImg.src = 'img/download_playmarket.svg';
//   visibleShopLink.href = 'https://play.google.com/store/apps/details?id=com.coralclub.distribution.app&hl=ru'
// } else {
//   visibleShopImg.src = 'img/download_rustore.svg';
//   visibleShopLink.href = 'https://apps.rustore.ru/app/com.coralclub.distribution.app'
// }
// console.log(window.screen.width);
// if (window.screen.width <= 430 || /Android/i.test(navigator.userAgent)) {
//   visibleShopAndroid.classList.remove('footer__left-link--hidden')
//   // visibleShopAndroid.src
// }



function copyClipboard(text) {
  return navigator.clipboard.writeText(text.toUpperCase())
}

const saleTooltip = document.querySelector('.sale__tooltip')
const saleLink = document.querySelector('.sale__top-link')
const saleImg = document.querySelector('.sale__top-link img')
// console.log(saleTooltip);
saleLink.addEventListener('click', function() {
  // saleTooltip.clipboard.writeText('Скопировано')
  copyClipboard('coralapp')
  saleTooltip.textContent = 'Скопировано'
})

saleTooltip.addEventListener('click', function() {
  // saleTooltip.clipboard.writeText('Скопировано')
  copyClipboard('coralapp')
  saleTooltip.textContent = 'Скопировано'
})

// saleTooltip.addEventListener('mouseleave', function() {
//   // saleTooltip.textContent = 'Копировать'
// })

const toolTipInitText = [saleLink, saleImg, saleTooltip]
toolTipInitText.forEach(item => item.addEventListener('mouseenter', function() {
  // saleLink.style.background = '#877CCF'
}))

toolTipInitText.forEach(item => item.addEventListener('mouseleave', function() {
  saleLink.style.background = 'transparent'
}))

saleLink.addEventListener('mouseleave', function() {
  saleTooltip.textContent = 'Копировать'
})