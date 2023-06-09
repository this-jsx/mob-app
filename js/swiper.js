// let index_currentSlide = swiper.realIndex;
// let currentSlide = swiper.slides[index_currentSlide]

// const slider = document.querySelector('.swiper__app')

// const swiperHero = new Swiper('.header__swiper',)
let swiperApp = new Swiper('.swiper__app', {
    // Optional parameters
    // direction: 'vertical',
    // direction: 'horizontal',
    loop: true,
  
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
          console.log(activeIndexChange);
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