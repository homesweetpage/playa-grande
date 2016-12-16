$(document).ready(function(){
  $(".anchor-link").on("click", function(){
    $(".anchor-link").removeClass("active");
    $(this).addClass("active");
  })
});
