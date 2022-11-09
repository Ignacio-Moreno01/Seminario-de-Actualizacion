<?php

include_once( "./database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$username = $object->username;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $connection->prepare("CALL `validate_user`(:username, :password)");
	$SQLStatement->bindParam( ':username', $username );
	$SQLStatement->bindParam( ':password', $object->password );
	$SQLStatement->execute();

	//Procesar las respuestas posibles del procedimiento almacenado
	$db_response = $SQLStatement->fetchAll(PDO::FETCH_ASSOC);

	$response_client = null;

	if ( count($db_response) != 0 )
	{
		//caso favorable (el array no está vacío y se espera un array con la estructura de la respuesta que genera el procedimiento)
		$id_user = $db_response[0]["id_user"];
		$response_client = [ "status" => "OK", "response" => $id_user ];
	}
	else
	{
		//caso desfavorable (el array está vacio)
		$response_client = [ "status" => "ERROR", "description" => 'Usuario y/o Contraseña errónea'];
	}

	echo json_encode($response_client);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error ', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>
