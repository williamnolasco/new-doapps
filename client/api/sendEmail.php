<?php
header('Access-Control-Allow-Origin: *');


if (isset($_POST['message_name']) && isset($_POST['message_text']) && isset($_POST['message_phone']) && isset($_POST['message_email'])) {
	$message_name = trim($_POST['message_name']);
	$message_text = trim($_POST['message_text']);
	$message_phone = trim($_POST['message_phone']);
	$message_email = trim($_POST['message_email']);

	$response = array();

	$html = "<b>DoApps quieren contactarse:</b><br>";
	$html = $html."> Nombre: ".$message_name."<br>";
	$html = $html."> Email: ".$message_email."<br>";
	$html = $html."> Celular: ".$message_phone."<br>";
	$html = $html."> Mensaje: ".$message_text."<br>";

	/*$to   = "terrazass@tigo.net.bo";
	$cc   = "sacrea@tigo.net.bo";
	$bcc  = "renato.rodriguez.vargas@gmail.com";*/

	/*Destinatarios*/
	$to = "doapps.me@gmail.com";
	//$to = "jnolascob@gmail.com";
	/**/

	$from = "website@doapps.me";

	$subject  = "Mensaje desde DoApps.me";
	$boundary = str_replace(" ", "", date('l jS \of F Y h i s A'));
	$newline  = "\r\n";

	$headers = "From: " . strip_tags($from ) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	if(mail($to,$subject,$html,$headers)){
		$response['status'] = 200;
	    $response["success"] = 1;
	    $response['message'] = "Mensaje enviado";
	    echo json_encode($response);
	}else{
		$response['status'] = 200;
	    $response["success"] = 0;
	    $response['message'] = "Mensaje no fue enviado";
	    echo json_encode($response);
	}
}else{
	$response['status'] = 400;
    $response["success"] = 0;
    $response['message'] = "Datos incorrectos";
    echo json_encode($response);
}
?>
