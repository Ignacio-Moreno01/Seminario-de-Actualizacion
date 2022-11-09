<?php

//openssl_encrypt($string, $encrypt_method, $key)
//openssl_decrypt($string, $encrypt_method, $key);

function connect_user($idUserA, $idUserB)
{
    return generate_key('A','B');
    // return generate_key($idUserA, $idUserB);
}

function send_message($senderUserId, $targetUserId, $messageBody)
{
    session_start();
    $_SESSION['Message'] = array('sender' => $senderUserId, 'reciever' => $targetUserId, 'messageBody' => $messageBody);
    return true;
    // return $body_message;
}

function generate_key($senderUserId, $targetUserId)
{
    return hash('sha256', uniqid());
}

function get_message($userId)
{
    session_start();
    if($userId == $_SESSION['Message']['reciever'])
    {
        $message = $_SESSION['Message']['messageBody'];
    }
    return $message;
}

// function disconnect_user($idUserA, $idUserB){}

?>