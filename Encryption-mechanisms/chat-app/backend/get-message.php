<?php

include_once("./server.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$message = get_message('A');
$_SESSION["message"] = $message;
echo $json_body;

?>