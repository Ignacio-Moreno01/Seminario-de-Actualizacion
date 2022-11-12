<?php

$connection = null;

try
{
    $connection = new PDO('mysql:host=127.0.0.1:3306;dbname=access-control-component', 'root', 'kali' );
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $connectionException) 
{
    $status = array( "status"=>'db-error', "description"=>$connectionException->getMessage() );
    echo json_encode($status);

    die();
};

?>