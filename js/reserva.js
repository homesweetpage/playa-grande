var checkIn= new Date();
checkIn = ((checkIn.getMonth()+1) + "/" + checkIn.getDate() + "/" + checkIn.getFullYear());
var checkOut = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
checkOut = ((checkOut.getMonth()+1) + "/" + checkOut.getDate() + "/" + checkOut.getFullYear());
var endAnimate = "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd";

$( "#input-fecha-check-in" ).change(function() {
  checkIn = $("#input-fecha-check-in")[0].value;
});

$( "#input-fecha-check-out" ).change(function() {
  checkOut = $("#input-fecha-check-out")[0].value;
});

$("#boton-reserva").click(function(event) {
    event.preventDefault();
    var form = event.target;
    var nombre = $("#first_name").val();
    var apellido = $("#last_name").val();
    var mail = $("#email").val();
    var male = $("#male").val();
    var female = $("#female").val();
    var hostel = $("#hostel").val();
    var room = $("#room").val();
    var data = {
      "first_name": nombre,
      "last_name": apellido,
      "email": mail,
      "male": male,
      "female": female,
      "hostel": hostel,
      "room": room,
      "checkIn": checkIn,
      "checkOut": checkOut
    };
    $.ajax({
        type: "POST",
        url: "reserva.php",
        data: data,
        success: function(){
          botonConsulta('Consulta Enviada <br> Exitosamente!','btnSuccess');
        },
        error:function () {
          botonConsulta('Error en servidor! <br> Consulta no Enviada','btnError');
        }
    });
});

function botonConsulta(mensaje,clase){
	var $span = $(".box-botton span");
	$(".box-botton").addClass('flipOutX').one(endAnimate, function(){
		$span.html(mensaje);
		$(".box-botton").addClass(clase);
		$(".box-botton").removeClass('flipOutX');
		$(".box-botton").addClass('flipInX').one(endAnimate, function(){
      $(".box-botton").removeClass('flipInX');
      setTimeout(function () {
        botonConsultaDefault(clase);
      },3000);
		})
	})
};

function botonConsultaDefault(clase){
  var $span = $(".box-botton span");
	$(".box-botton").addClass('flipOutX').one(endAnimate, function(){
		$span.html("Consultar <br> Disponibilidad");
		$(".box-botton").removeClass(clase);
		$(".box-botton").removeClass('flipOutX');
		$(".box-botton").addClass('flipInX').one(endAnimate, function(){
      $(".box-botton").removeClass('flipInX');
    })
	})
}
