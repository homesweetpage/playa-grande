<?php

if($_POST){
    $name = $_REQUEST['first_name'];
    $apellido = $_REQUEST['last_name'];
    $email = $_REQUEST['email'];
    $male = $_REQUEST['male'];
    $female = $_REQUEST['female'];
    $hostel = $_REQUEST['hostel'];
    $room = $_REQUEST['room'];
    $checkIn = $_REQUEST['checkIn'];
    $checkOut = $_REQUEST['checkOut'];

    $to = "tomasgispert@gmail.com";

    $mensaje =
		"Nombre: " .$name ."\r\n"
    ."Apellido: " .$apellido ."\r\n"
		."Email: " .$email ."\r\n" ."\r\n"
    ."Check In: " .$checkIn ."\r\n"
    ."Check Out: " .$checkOut ."\r\n" ."\r\n"
    ."Cantidad de hombres: " .$male ."\r\n"
    ."Cantidad de mujeres: " .$female ."\r\n"
    ."Hostel: " .$hostel ."\r\n"
    ."Habitacion: " .$room ."\r\n"
		;

	$subject = "HPG - Consulta de: " .$email;

	$header = "From: " .$email ."\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

    mail($to,$subject,$mensaje,$header);
}

?>
