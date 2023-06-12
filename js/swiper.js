let swiperV = new Swiper('.swiper__app_v', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    direction: 'vertical',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },   
  });

let heading = document.querySelector('.header__bottom-title')
let HEADER = document.getElementById('header')
let headerLogo = document.querySelector('.header__top-logo--img')
let headerMenuLinks = document.querySelectorAll('.header__link')
let headerBackBtn = document.querySelector('.header__top-back--btn')

let burgerBtn = document.querySelector('.burger__btn')

const SVH = document.querySelector('.header__top-back img')

let currectSlide = swiperV.activeIndexChange

swiperV.on('activeIndexChange', function (item) {

  if(item.activeIndex > 0) {
    HEADER.style.backgroundColor = '#fff';
    headerLogo.src = 'img/main-logo-dark.svg';
    headerBackBtn.classList.add('header__dark_mode');
    headerMenuLinks.forEach(link => link.classList.add('header__dark_mode'));
    // headerMenuLinks.forEach(link => link.addEventListener('mousemove',function() {
    //   link.classList.add('header__link_pink')
    //   console.log('линк');
    // }));
    headerMenuLinks.forEach(link => link.classList.add('header__link_pink'))
    SVH.src = 'img/arrow-black.svg';
    burgerBtn.src = 'img/burger-btn-black.svg'
  }
  else if (item.activeIndex === 0) {
    HEADER.style.backgroundColor = '#6D5FC8';
    headerLogo.src = 'img/main-logo.svg';
    headerBackBtn.classList.remove('header__dark_mode');
    headerMenuLinks.forEach(link => link.classList.remove('header__dark_mode'));
    headerMenuLinks.forEach(link => link.classList.remove('header__link_pink'))
    SVH.src = 'img/arrow.svg';
    burgerBtn.src = 'img/burger-btn-white.svg'
  }
});


// amimation
const animation_1 = document.querySelector('.swiper-slide_amimated_1')
const animation_2 = document.querySelector('.swiper-slide_amimated_2')
const animation_3 = document.querySelector('.swiper-slide_amimated_3')

swiperV.on('activeIndexChange', function(anim) {
  console.log(swiperV.activeIndex);
  if (swiperV.activeIndex === 1) {
    animation_1.classList.add('animate__fadeInRight')
  } else {
    animation_1.classList.remove('animate__fadeInRight')
  } 
  if (swiperV.activeIndex === 2) {
    animation_2.classList.add('animate__slideInRight')
  } else {
    animation_2.classList.remove('animate__slideInRight')
  }
  if (swiperV.activeIndex === 3) {
    animation_3.classList.add('animate__bounceInRight')
  } else {
    animation_3.classList.remove('animate__bounceInRight')
  }
})




let swiperG = new Swiper('.swiper__app_g', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // direction: 'vertical',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },   
});

// let heading = document.querySelector('.header__bottom-title')
// let HEADER = document.getElementById('header')
// let headerLogo = document.querySelector('.header__top-logo--img')
// let headerMenuLinks = document.querySelectorAll('.header__link')
// let headerBackBtn = document.querySelector('.header__top-back--btn')

// let burgerBtn = document.querySelector('.burger__btn')

// const SVH = document.querySelector('.header__top-back img')

// let currectSlide = swiperG.activeIndexChange

swiperG.on('activeIndexChange', function (item) {

if(item.activeIndex > 0) {
  HEADER.style.backgroundColor = '#fff';
  headerLogo.src = 'img/main-logo-dark.svg';
  headerBackBtn.classList.add('header__dark_mode');
  headerMenuLinks.forEach(link => link.classList.add('header__dark_mode'));
  SVH.src = 'img/arrow-black.svg';
  burgerBtn.src = 'img/burger-btn-black.svg'
}
else if (item.activeIndex === 0) {
  HEADER.style.backgroundColor = '#6D5FC8';
  headerLogo.src = 'img/main-logo.svg';
  headerBackBtn.classList.remove('header__dark_mode');
  headerMenuLinks.forEach(link => link.classList.remove('header__dark_mode'));
  SVH.src = 'img/arrow.svg';
  burgerBtn.src = 'img/burger-btn-white.svg'
}
});


// // amimation
const animation_4 = document.querySelector('.swiper-slide_amimated_4')
const animation_5 = document.querySelector('.swiper-slide_amimated_5')
const animation_6 = document.querySelector('.swiper-slide_amimated_6')

swiperG.on('activeIndexChange', function(anim) {
console.log(swiperG.activeIndex);
if (swiperG.activeIndex === 1) {
  animation_4.classList.add('animate__fadeInDown')
} else {
  animation_4.classList.remove('animate__fadeInDown')
} 
if (swiperG.activeIndex === 2) {
  animation_5.classList.add('animate__slideInDown')
} else {
  animation_5.classList.remove('animate__slideInDown')
}
if (swiperG.activeIndex === 3) {
  animation_6.classList.add('animate__bounceInDown')
} else {
  animation_6.classList.remove('animate__bounceInDown')
}
})