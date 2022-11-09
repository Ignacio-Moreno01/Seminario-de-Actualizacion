<?php

include_once( "./database.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

//Esto hay que cambiarlo.. en este caso, no espero usuario/contraseña. espero un "potencial" token de sesión.
$password = $object->password;
$username = $object->username;

try
{
    //Consultar a la base de datos la existencia de ese potencial token de sesión..
    //Y determinar además, que en caso de existir, que no esté expirado.
    
	$status = array( 'status'=>'db-error ', 'description'=>'nada' );
    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error ', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>
