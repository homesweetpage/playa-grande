$(".box-hostel-titulo").click(function(){
  $(this).find(".box-descripcion").toggleClass("hidden");
  $(this).toggleClass("descripcion-activa");
  $(this).find("i").toggleClass("fa-minus").toggleClass("fa-plus");
});
