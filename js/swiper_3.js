
//slide 3
var product = new Swiper(".swiper-container__slide3", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    grabCursor:true

  });