<?php
$connection = null;

$json_body = file_get_contents('php://input'); /* trae los datos del fetch */
$object = $object->password; /* instancia la variable anterior, convierte la cadena de texto en una instancia de php */

/* el try-catch se agrega porque no se garantiza que la llamada funcione correctamente */
try
{
    $connection = new PDO('localhost')
}
catch()
{
    
}