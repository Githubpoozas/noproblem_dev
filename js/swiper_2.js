// slide 2
var swiper2 = new Swiper(".swiper-container__slide2", {
  slidesPerView: 2,
      slidesPerColumn: 4,
      slidesPerGroup: 2,
      spaceBetween: 0,
  breakpoints: {
    600: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
       900: {
      slidesPerView: 5,
      slidesPerColumn: 2,
      slidesPerGroup: 5,
      spaceBetween: 10,
    }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  grabCursor: true
});
