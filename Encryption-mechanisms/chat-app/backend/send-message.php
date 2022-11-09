<?php

include_once("./server.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$message = send_message('A', 'B', 'Hello!');
session_start();

$_SESSION["message"] = $message;
echo $json_body;

?>