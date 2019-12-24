//slide 3
var product = new Swiper(".swiper-container__slide3", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 60
    },
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  grabCursor: true
});

$(document).ready(function() {
  $(".cloth__img").mouseenter(function() {
    $(this).attr(
      "src",
      $(this)
        .attr("src")
        .replace("_1", "_2")
    );
  });
  $(".cloth__img").mouseleave(function() {
    $(this).attr(
      "src",
      $(this)
        .attr("src")
        .replace("_2", "_1")
    );
  });
});
