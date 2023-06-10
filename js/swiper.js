// let index_currentSlide = swiper.realIndex;
// let currentSlide = swiper.slides[index_currentSlide]

// const slider = document.querySelector('.swiper__app')

// const swiperHero = new Swiper('.header__swiper',)
let swiperApp = new Swiper('.swiper__app', {
    // Optional parameters
    // direction: 'vertical',
    // direction: 'horizontal',
    // loop: true,

    // autoplay: {
    //   delay: 1000
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    on: {
        init: function () {
          // console.log(activeIndexChange);
        },
        // slideChange: function () {
        //   const index_currentSlide = this.swiper.realIndex;
        //   const currentSlide = swiper.slides[index_currentSlide]
        //   //
        //   console.log(currentSlide, index_currentSlide);
        //   currentSlide.style.background = "red";
        // }
      },
      // breakpoints: {
      //   576: {
      //     direction: 'vertical'
      //     // slidesPerView: 1,
      //     // grid: {
      //     //   rows: 1
      //     // },
      //     // spaceBetween: 0
      //   },
      //   1200: {
      //     direction: 'horizontal'
      //   }
      // }    
  });

  // console.log(swiper.activeIndex)


let heading = document.querySelector('.header__bottom-title')
let HEADER = document.getElementById('header')
let headerLogo = document.querySelector('.header__top-logo--img')
let headerMenuLinks = document.querySelectorAll('.header__link')
let headerBackBtn = document.querySelector('.header__top-back--btn')
// let burgerLines = document.querySelectorAll('.line')
let burgerBtn = document.querySelector('.burger__btn')
// console.log(headerMenuLinks, headerBackBtn);

const SVH = document.querySelector('.header__top-back img')
// console.log(SVH.firstElementChild.src);

let currectSlide = swiperApp.activeIndexChange

// swiperApp.on('activeIndexChange', function () {
//   // if (item.activeIndex > 0) {
//   //   container.classList.add(`white`);
//   // } else {
//   //   container.classList.remove(`white`);
//   // }
//   if(swiperApp.activeIndex !== 0) {
//     // heading.style.color = 'lime'
//     HEADER.style.backgroundColor = '#fff'
//     // swiperApp.activeIndex[0].style.backgroundColor = '#6D5FC8'
//   }
//   // else {
//   //   // heading.style.color = '#fff'
//   //   // HEADER.style.backgroundColor = '#6D5FC8'
//   //   HEADER.style.backgroundColor = '#fff'
//   // }
//   // swiperApp.activeIndex[0].style.backgroundColor = '#6D5FC8'
//   console.log(swiperApp.activeIndex);
// });

swiperApp.on('activeIndexChange', function (item) {
  // console.log(item);
  if(item.activeIndex > 0) {
    HEADER.style.backgroundColor = '#fff';
    headerLogo.src = 'img/main-logo-dark.svg';
    headerBackBtn.classList.add('header__dark_mode');
    headerMenuLinks.forEach(link => link.classList.add('header__dark_mode'));
    SVH.src = 'img/arrow-black.svg';
    burgerBtn.src = 'img/burger-btn-black.svg'
    // burgerLines.forEach(function(line) {
    //   line.background = '#2E2A28'
    // })
  }
  else if (item.activeIndex === 0) {
    HEADER.style.backgroundColor = '#6D5FC8';
    headerLogo.src = 'img/main-logo.svg';
    headerBackBtn.classList.remove('header__dark_mode');
    headerMenuLinks.forEach(link => link.classList.remove('header__dark_mode'));
    SVH.src = 'img/arrow.svg';
    burgerBtn.src = 'img/burger-btn-white.svg'
    // burgerLines.forEach(function(line) {
    //   line.background = '#fff'
    // })
  }
  // console.log(swiperApp.activeIndex);
  // console.log(swiperApp.clickedIndex);
});


// amimation
const animation_1 = document.querySelector('.swiper-slide_amimated_1')
const animation_2 = document.querySelector('.swiper-slide_amimated_2')
const animation_3 = document.querySelector('.swiper-slide_amimated_3')
// let currectSlide2 = swiperApp.activeIndex

swiperApp.on('activeIndexChange', function(anim) {
  console.log(swiperApp.activeIndex);
  if (swiperApp.activeIndex === 1) {
    animation_1.classList.add('animate__fadeInRight')
  } else {
    animation_1.classList.remove('animate__fadeInRight')
  } 
  if (swiperApp.activeIndex === 2) {
    animation_2.classList.add('animate__slideInRight')
  } else {
    animation_2.classList.remove('animate__slideInRight')
  }
  if (swiperApp.activeIndex === 3) {
    animation_3.classList.add('animate__bounceInRight')
  } else {
    animation_3.classList.remove('animate__bounceInRight')
  }
  
  // if (currectSlide2)
  // if (anim.activeIndex === 1) {
  //   animation_1.classList.add('animate__fadeInRight')
  // } else if (anim.activeIndex !== 1) {
  //   animation_2.classList.remove('animate__fadeInRight')
  // } else if (anim.activeIndex === 2) {
  //   animation_2.classList.add('animate__fadeInRight')
  // } else if (anim.activeIndex !== 2) {
  //   animation_2.classList.remove('animate__fadeInRight')
  // } else if (anim.activeIndex === 3) {
  //   animation_3.classList.add('animate__fadeInRight')
  // } else {
  //   animation_3.classList.remove('animate__fadeInRight')
  // }
})

// swiperApp.on('activeIndexChange', function(anim) {
//   console.log(swiperApp.activeIndex);
//   // if (anim.activeIndex === swiperApp.activeIndex) {
//   //   animation_swiperApp.activeIndex.classList.add('animate__fadeInRight')
//   // } else if (anim.activeIndex !== swiperApp.activeIndex) {
//   //   animation_swiperApp.activeIndex.classList.remove('animate__fadeInRight')
//   // }
//   // if(anim.activeIndex === 2) {
//   //   animation_2.classList.add('animate__fadeInRight')
//   // } else {
//   //   animation_2.classList.remove('animate__fadeInRight')
//   // }
// })

// swiperApp.on('activeIndexChange', function(anim) {
//   // console.log(swiperApp.activeIndex);
//   if (anim.activeIndex === 2) {
//     animation_1.classList.add('animate__fadeInRight')
//   } else if (anim.activeIndex !== 2) {
//     animation_1.classList.remove('animate__fadeInRight')
//   }
// })

// swiperApp.on('activeIndexChange', function(anim) {
//   // console.log(swiperApp.activeIndex);
//   if (anim.activeIndex === 3) {
//     animation_1.classList.add('animate__fadeInRight')
//   } else  if (anim.activeIndex !== 3) {
//     animation_1.classList.remove('animate__fadeInRight')
//   }
// })