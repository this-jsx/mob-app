// let swiperV = new Swiper('.swiper__app_v', {
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },

//     // slidesPerView: 1,

//     // touchReleaseOnEdges: true,

//     // autoplay: {
//     //   delay: 2000
//     // },

//     direction: 'vertical',
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },

//     // mousewheel: {
//     //   sensitivity: 1
//     // },
//     mousewheel: {
//       releaseOnEdges: true, // NEW
//       sensitivity: 10
//     }

//     // releaseOnEdges: true
//   });

let heading = document.querySelector('.header__bottom-title')
let HEADER = document.getElementById('header')
let headerLogo = document.querySelector('.header__top-logo--img')
let headerMenuLinks = document.querySelectorAll('.header__link')
let headerBackBtn = document.querySelector('.header__top-back--btn')
let headerBackSpan = document.querySelector('.header__top-back--btn span')
let headerBottomTitleLight = document.querySelector('.header__bottom-title--light')
let headerBottomTextLight = document.querySelector('.header__bottom-text--light')

let animationAppear = document.querySelector('.animation__appear')

let burgerBtn = document.querySelector('.burger__btn')

const SVH = document.querySelector('.header__top-back img')

// let currectSlide = swiperV.activeIndexChange

// swiperV.on('activeIndexChange', function (item) {

//   if(item.activeIndex > 0) {
//     HEADER.style.backgroundColor = '#fff';
//     headerBottomTitleLight.style.color = 'var(--black)'
//     headerBottomTextLight.style.color = 'var(--black)'
//     headerLogo.src = 'img/main-logo-dark.svg';
//     headerBackBtn.classList.add('header__dark_mode');
//     headerBackSpan.style.color = 'var(--black)'
//     headerMenuLinks.forEach(link => link.classList.add('header__dark_mode'));
//     // headerMenuLinks.forEach(link => link.addEventListener('mousemove',function() {
//     //   link.classList.add('header__link_pink')
//     //   console.log('линк');
//     // }));
//     headerMenuLinks.forEach(link => link.classList.add('header__link_pink'))
//     SVH.src = 'img/arrow-black.svg';
//     burgerBtn.src = 'img/burger-btn-black.svg'
//   }
//   else if (item.activeIndex === 0) {
//     HEADER.style.backgroundColor = '#6D5FC8';
//     headerBottomTitleLight.style.color = 'var(--white)'
//     headerBottomTextLight.style.color = 'var(--white)'
//     headerLogo.src = 'img/main-logo.svg';
//     headerBackBtn.classList.remove('header__dark_mode');
//     headerBackSpan.style.color = 'var(--white)'
//     headerMenuLinks.forEach(link => link.classList.remove('header__dark_mode'));
//     headerMenuLinks.forEach(link => link.classList.remove('header__link_pink'))
//     SVH.src = 'img/arrow.svg';
//     burgerBtn.src = 'img/burger-btn-white.svg'
// }})

//   else if (item.activeIndex === 0) {
//     animationAppear.classList.add('animation__appear_1')
//   } else (
//     animationAppear.classList.add('animation__appear_1')
//   )
// });

const directSection = document.querySelector('.direct')
const sliderVertical = document.getElementById('slider-vertical')
// console.log(sliderVertical.clientHeight);
console.log(window.screenY);

// swiperV.on('activeIndexChange', function(item) {
//   if (item.activeIndex === 0 || item.activeIndex === 1 || item.activeIndex === 2) {
//     document.querySelector('body').classList.add('stop-scrolling')
//   }
// })

// function scrollToMaxOrMin(min, max) {
//   if(item.activeIndex === min || item.activeIndex === max) {
//     swiperV.mousewheel.disable()
//   } else {
//     swiperV.mousewheel.ensable()
//   }
// }

// swiperV.on('activeIndexChange', scrollToMaxOrMin(0, 2))

// let last_scroll = 0;
// window.onscroll = function(){
//   if(window.scrollY > last_scroll){
//     console.log('down');
//   }else{
//     console.log('up');
//   }
//   last_scroll = window.scrollY;
// }

// swiperV.on('activeIndexChange', function(item) {
//   // console.log(item);
//   if (item.activeIndex === 2 && sliderVertical.clientHeight === 846) {
//     // console.log(window.scrollY, last_scroll);
//     // console.log(autoScrollOffset);
//     // scrollY(3500)
//     // directSection.scrollHeight
//     // console.log(directSection.clientHeight);
//     // window.scrollTo(directSection)
//     swiperV.mousewheel.disable()
//     // last_scroll = window.scrollY
//   } else if (item.activeIndex === 0) {
//     swiperV.mousewheel.enable()
//   }
// })

// swiperV.on('activeIndexChange', function(item) {
//   if (item.activeIndex === 0) {
//     console.log(swiperV.isBeginning)
//     swiperV.mousewheel.disable()
//   } else if (item.activeIndex === 2) {
//     console.log(swiperV.isEnd)
//   }
// })

// swiperV.on('activeIndexChange', function(item) {
//   if (activeIndex >= 2) {
//     // swiperV.releaseOnEdges = true
//   }
// })

// sliderVertical.addEventListener('mouseleave', function() {
//   swiperV.mousewheel.enable()
// })

// directSection.addEventListener('mouseenter', function() {
//   swiperV.mousewheel.enable()
// })


// amimation
const animation_1 = document.querySelector('.swiper-slide_amimated_1')
const animation_2 = document.querySelector('.swiper-slide_amimated_2')
const animation_3 = document.querySelector('.swiper-slide_amimated_3')

// swiperV.on('activeIndexChange', function(anim) {
//   console.log(swiperV.activeIndex);
//   if (swiperV.activeIndex === 0) {
//     // console.log(sliderVertical);
//     animation_1.classList.add('animate__bounceInRight')
//   } else {
//     animation_1.classList.remove('animate__bounceInRight')
//   } 
//   if (swiperV.activeIndex === 1) {
//     animation_2.classList.add('animate__bounceInRight')
//   } else {
//     animation_2.classList.remove('animate__bounceInRight')
//   }
//   if (swiperV.activeIndex === 2) {
//     animation_3.classList.add('animate__bounceInRight')
//   } else {
//     animation_3.classList.remove('animate__bounceInRight')
//   }
// })



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

swiperG.on('activeIndexChange', function (item) {

if(item.activeIndex > 0) {
  // HEADER.style.backgroundColor = '#fff';
  // headerBottomTitleLight.style.color = 'var(--black)'
  // headerBottomTextLight.style.color = 'var(--black)'
  // headerLogo.src = 'img/main-logo-dark.svg';
  // headerBackBtn.classList.add('header__dark_mode');
  // headerMenuLinks.forEach(link => link.classList.add('header__dark_mode'));
  // SVH.src = 'img/arrow-black.svg';
  // burgerBtn.src = 'img/burger-btn-black.svg'
}
else if (item.activeIndex === 0) {
  // HEADER.style.backgroundColor = '#6D5FC8';
  // headerBottomTitleLight.style.color = 'var(--white)'
  // headerBottomTextLight.style.color = 'var(--white)'
  // headerLogo.src = 'img/main-logo.svg';
  // headerBackBtn.classList.remove('header__dark_mode');
  // headerMenuLinks.forEach(link => link.classList.remove('header__dark_mode'));
  // SVH.src = 'img/arrow.svg';
  // burgerBtn.src = 'img/burger-btn-white.svg'
}
});


// amimation
const animation_4 = document.querySelector('.swiper-slide_amimated_4')
const animation_5 = document.querySelector('.swiper-slide_amimated_5')
const animation_6 = document.querySelector('.swiper-slide_amimated_6')

swiperG.on('activeIndexChange', function(anim) {
  // console.log(swiperG.activeIndex);
  if (swiperG.activeIndex === 0) {
    animation_4.classList.add('animate__bounceInRight')
  } else {
    animation_4.classList.remove('animate__bounceInRight')
  } 
  if (swiperG.activeIndex === 1) {
    animation_5.classList.add('animate__bounceInRight')
  } else {
    animation_5.classList.remove('animate__bounceInRight')
  }
  if (swiperG.activeIndex === 2) {
    animation_6.classList.add('animate__bounceInRight')
  } else {
    animation_6.classList.remove('animate__bounceInRight')
  }
})


// window.addEventListener('scroll', event => {
//   const rect = swiperV.el.getBoundingClientRect()

//   if (rect.bottom < window.innerHeight - 64 && rect.top > 64) {
//     if (!document.body.classList.contains('swiper-full-to')) {
//       document.body.classList.add('swiper-full-to')
//     }
//   } else {
//     if (document.body.classList.contains('swiper-full-to')) {
//       document.body.classList.remove('swiper-full-to')
//     }
//   }
// });


// function getCoords(elem) { // кроме IE8-
//   var box = elem.getBoundingClientRect();

//   return {
//     top: box.top + window.scrollY,
//     // left: box.left + pageXOffset
//   };

// }

// getCoords(directSection)