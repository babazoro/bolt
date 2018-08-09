$(document).ready(function() {
  if($(window).width() < 766){
    $(".contact-btn").css("display","none");
    $(".sp-ham-menu").click(function(){
      $(".contact-btn").toggle();
    });
  }
});
