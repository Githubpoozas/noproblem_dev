$(document).ready(function() {
    $(".color-picker").click(function() {
      var image1 = $(this).css("background-image");
      var image2 = $(this).css("background-image").replace("_1", "_2");
      $(".column-front").css("background-image",image1);
      $(".column-back").css("background-image",image2);
    });

    $(".item__color-picker").click(function() {
      var image1 = $(this).css("background-image");
      var image2 = $(this).css("background-image").replace("_1", "_2");
      $(".item__front").css("background-image",image1);
      $(".item__back").css("background-image",image2);

    });

  });
  