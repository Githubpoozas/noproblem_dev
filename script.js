// navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Slide
var swiper1 = new Swiper(".swiper-container__slide1", {
  // autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
});

// Youtube
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  console.log("onYouTubeIframeAPIReady");
  player = new YT.Player("youtube", {
    height: "260",
    width: "730",
    //id = "url"
    videoId: "CQs_q0MTPA0",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  console.log("onPlayerReady");
  event.target.playVideo();
  swiper.autoplay.stop();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  console.log("onPlayerStateChange");

  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }

  // if video END or PAUSE
  if (event.data == YT.PlayerState.ENDED && !done) {
    stopVideo();
    done = true;
  }

  if (event.data == YT.PlayerState.PAUSED && !done) {
    pauseVideo();
    done = true;
  }
}
// Start swiper
function stopVideo() {
  player.stopVideo();
  swiper1.autoplay.start();
}

// Start swiper
function pauseVideo() {
  player.pauseVideo();
  swiper1.autoplay.start();
}

// Local video event
var vid = document.getElementById("localVideo");
function loopVid() {
  vid.load();
}
vid.onplay = function() {
  swiper1.autoplay.stop();
};
vid.onpause = function() {
  swiper1.autoplay.start();
  setTimeout(loopVid, 6000);
};
vid.onended = function() {
  swiper1.autoplay.start();
  setTimeout(loopVid, 6000);
};

// slide 2
var swiper2 = new Swiper('.swiper-container__slide2', {
  slidesPerView: 5,
  slidesPerColumn: 2,
  slidesPerGroup: 5,
  // loop: true,
  // loopFillGroupWithBlank: true,
//   slidesPerColumnFill: 'column',
  // spaceBetween:30,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//slide 3
var product = new Swiper(".swiper-container__slide3", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// socialmedia bar
$(document).ready(function() {
  var ckbox = $(".socialmedia__checkbox");

  $("input").on("click", function() {
    if (ckbox.is(":checked")) {
      $(".socialmedia").animate({right: '0px'},"slow");
      $(".socialmedia__icon").animate({margin: "5px 20px"});
      $(".socialmedia__rotated").animate({opacity: '0'},"slow");
      $(".socialmedia__rotated").css("visibility", "hidden");
      $(".socialmedia__item").animate({opacity: '1'},"slow");


    } else {
      $(".socialmedia").animate({right: '-25px'},"slow");
      $(".socialmedia__icon").animate({margin: "5px 7px"});
      $(".socialmedia__rotated").animate({opacity: '1'},"slow");
      $(".socialmedia__rotated").css("visibility", "visible");
      $(".socialmedia__item").animate({opacity: '0'},"slow");


    }
  });
});