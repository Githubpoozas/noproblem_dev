// socialmedia bar
$(document).ready(function() {
    var ckbox = $(".socialmedia__checkbox");
  
    $("input").on("click", function() {
      if (ckbox.is(":checked")) {
        $(".socialmedia").animate({right: '0px'},"slow");
        $(".socialmedia__icon").animate({margin: "0 20px 5px"});
        $(".socialmedia__rotated").animate({opacity: '0'},"slow");
        $(".socialmedia__rotated").css("visibility", "hidden");
        $(".socialmedia__item").animate({opacity: '1'},"slow");
  
  
      } else {
        $(".socialmedia").animate({right: '-25px'},"slow");
        $(".socialmedia__icon").animate({margin: "0 7px 5px"});
        $(".socialmedia__rotated").animate({opacity: '1'},"slow");
        $(".socialmedia__rotated").css("visibility", "visible");
        $(".socialmedia__item").animate({opacity: '0'},"slow");
  
  
      }
    });
  });