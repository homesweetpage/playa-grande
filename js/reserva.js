$("#boton-reserva").click(function(event) {
    event.preventDefault();
    var form = event.target;
    var nombre = $("#first_name").val();
    var apellido = $("#last_name").val();
    var tel = $("#phone").val();
    var mail = $("#email").val();
    var hostel = $("#hostel").val();
    var room = $("#room").val();
    var comentario = $("#comment").val();
    var data = {
      "first_name": nombre,
      "last_name": apellido,
      "phone": tel,
      "email": mail,
      "hostel": hostel,
      "room": room,
      "comment": comentario
    };
    console.log(form.serialize());
    $.ajax({
        type: "POST",
        url: "reserva.php",
        data: form.serialize(),
        success: function(){
            document.getElementById('contact_form').reset();
            $('#success_message').slideDown({ opacity: "show" }, "slow");
        }
    });
});
