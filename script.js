const swiper = new Swiper('.swiper', {
 
  direction: 'horizontal',
 
  slidesPerView: 3,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3, 
      spaceBetween: 20, 
    },
  }
 
});