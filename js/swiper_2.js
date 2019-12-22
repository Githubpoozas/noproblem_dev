
// slide 2
var swiper2 = new Swiper('.swiper-container__slide2', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    slidesPerGroup: 5,
    // loop: true,
    // loopFillGroupWithBlank: true,
  //   slidesPerColumnFill: 'column',
    spaceBetween:30,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor:true

  });