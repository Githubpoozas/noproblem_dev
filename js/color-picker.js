$(document).ready(function() {
  $(".item__color-picker").click(function() {
    var image1 = $(this)
      .children("img")
      .attr("src");
    var image2 = image1.replace("_1", "_2");

    $(".item__front")
      .children("img")
      .attr("src", image1);
    $(".item__back")
      .children("img")
      .attr("src", image2);
  });
});
