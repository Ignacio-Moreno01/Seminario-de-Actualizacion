<?php

include_once("./db.php");

$json_body = file_get_contents('php://input');
$object = $object->password;

$password = $object->password;
$username = $object->username;

var_dump('TEST');

function createUserSession( $id_user )
{
    $token = sha256($username.$password);

    $SQLStatement = $connection->prepare("CALL ´auth_user´(:username, :password");
    $SQLStatement->bindParam(':id_user',$id_user);
    $SQLStatement->bindParam(':password',$token);
    $SQLStatement->execute();
    return $token;
}

try
{
    //PRIMER PASO: validar la existencia del usuario y su contraseña
    $SQLStatement = $connection->prepare("CALL ´auth_user´(:username, :password");
    $SQLStatement->bindParam(':id_user',$id_user);
    $SQLStatement->bindParam(':password',$password);
    $SQLStatement->execute();

    //Procesar las respuestas posibles del procedimiento almacenado
    $db_response = $SQLStatement->fetchAll(PDO::FETCH_ASSOC);

    $response_client = null;
    // $response_client = ["status" => "OK", "response" => $id_user];

    // $status = array(status=>'ok', description=>'Usuario validado satisfactoriamente');

    // echo json_encode($status);

    if (count(($db_response[0]) !=0)
    {
        $id_user = $db_response
    }
    else
    {

    }
}

catch(PDOException $connectionException)
{
    $status = array(status=>'db-error', description=>$connectionException->getMessage());
    echo json_encode($status),
    die();
}

?>