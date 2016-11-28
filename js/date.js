var currentDate = new Date();
var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

function inicializarFecha(){
  document.getElementById("fecha-check-in").innerHTML = currentDate.getDate();
  document.getElementById("fecha-check-out").innerHTML = tomorrow.getDate();
  $("#dia-check-in").html(parsearDia(currentDate.getDay()));
  $("#dia-check-out").html(parsearDia(tomorrow.getDay()));
  $("#mes-check-in").html(parsearMes(currentDate.getMonth()));
  $("#mes-check-out").html(parsearMes(tomorrow.getMonth()));
}

function parsearDia(num){
  switch (num) {
    case 0:
    return "dom"
    break;
    case 1:
    return "lun"
    break;
    case 2:
    return "mar"
    break;
    case 3:
    return "mie"
    break;
    case 4:
    return "jue"
    break;
    case 5:
    return "vie"
    break;
    case 6:
    return "sab"
    break;
    default:
  }
}

function parsearMes(mes){
  switch (mes) {
    case 0:
    return "ene"
    break;
    case 1:
    return "feb"
    break;
    case 2:
    return "mar"
    break;
    case 3:
    return "abr"
    break;
    case 4:
    return "may"
    break;
    case 5:
    return "jun"
    break;
    case 6:
    return "jul"
    break;
    case 7:
    return "ago"
    break;
    case 8:
    return "sep"
    break;
    case 9:
    return "oct"
    break;
    case 10:
    return "nov"
    break;
    case 11:
    return "dic"
    break;
    default:
  }
}

function formatoCalendario(){
  $("#input-fecha-check-in").datepicker({
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  });
  $("#input-fecha-check-out").datepicker({
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  });
}

$(document).ready(function(){
  inicializarFecha();
  formatoCalendario();
  $(".box-reserva").css({"visibility":"visible"});
});
