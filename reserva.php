<?php

if($_POST){
    $name = $_REQUEST['first_name'];
    $apellido = $_REQUEST['last_name'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $hostel = $_REQUEST['hostel'];
    $room = $_REQUEST['room'];
    $comment = $_REQUEST['comment'];

    $to = "tomasgispert@gmail.com";

    $mensaje =
		"Nombre: " .$name ."\r\n"
    ."Apellido: " .$apellido ."\r\n"
		."Telefono: " .$phone ."\r\n"
		."Email: " .$email ."\r\n"
    ."Hostel: " .$hostel ."\r\n"
    ."Habitacion: " .$room ."\r\n"
		."Comentario: " .$comment
		;

	$subject = "HPG - Consulta de: " .$email;

	$header = "From: " .$email ."\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

    mail($to,$subject,$mensaje,$header);
}

?>
