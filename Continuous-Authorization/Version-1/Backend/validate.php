<?php
include_once("./db.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$password = $object->username;

try
{
    $SQLStatement = $connectio->prepare("CALL ´validate_user´(:username, :password");
    $SQLStatement->bindParam(':username',$username);
    $SQLStatement->bindParam(':password',$password);
    $SQLStatement->execute();

    $status = array(status=>'ok', description=>'Usuario validado satisfactoriamente');

    echo json_encode($status);
}
catch(PDOException $connectionException)
{
    $status = array(status=>'db-error', description=>$connectionException->getMessage());
    echo json_encode($status),
    die();
}

?>