$(".box-hostel-titulo").click(function(){
  if($(this).hasClass("descripcion-activa")){
    $(this).find(".box-descripcion").addClass("hidden");
    $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
  }
  else {
    $(".box-hostel-desc").find(".box-descripcion").addClass("hidden");
    $(".box-hostel-desc").find("i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").addClass("fa-minus");
    $(this).find(".box-descripcion").toggleClass("hidden");
  }
  $(this).toggleClass("descripcion-activa");
});
