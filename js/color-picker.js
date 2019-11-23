$(document).ready(function() {
    $(".color-picker").click(function() {
      var color = $(this).css("background-color");
      var color2 = $(".column-front").css("background-color");
      $(".column-front").css("background-color",color);
      $(".column-back").css("background-color",color2);
    });
  });
  