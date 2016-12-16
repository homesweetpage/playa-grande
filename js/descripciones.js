$(".box-hostel-titulo").click(function(){
  if($(this).hasClass("descripcion-activa")){
    $(this).find(".box-descripcion").addClass("hidden");
    $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
    $(this).removeClass("descripcion-activa");
  }
  else {
    $(".box-hostel-desc").find(".box-descripcion").addClass("hidden");
    $(".box-hostel-desc").find(".box-hostel-titulo").removeClass("descripcion-activa");
    $(".box-hostel-desc").find("i").removeClass("fa-minus").addClass("fa-plus");
    if($(this).find(".pg-descr").html()[0]=="P"){
      $("#img-descripcion").attr("src","images/descripciones/Playa Grande.jpg");
    }
    else {
      if($(this).find(".pg-descr").html()[0]=="A"){
        $("#img-descripcion").attr("src","images/descripciones/Austral.jpg");
      }
      else {
        $("#img-descripcion").attr("src","images/descripciones/Suites.jpg");
      }
    }

    $(this).find("i").addClass("fa-minus");
    $(this).find(".box-descripcion").removeClass("hidden");
    $(this).addClass("descripcion-activa");
  }
});
