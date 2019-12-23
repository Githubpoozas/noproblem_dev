

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 5,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 3,
  centeredSlides: true,

  // loop: true,
  // loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: galleryThumbs
  },
  grabCursor: true
});

