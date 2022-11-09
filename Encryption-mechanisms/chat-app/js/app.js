import sha256 from "../lib/crypto-js-develop/src/sha256";
import hmacSHA512 from "../lib/crypto-js-develop/src/sha512";
import Base64 from "../lib/crypto-js-develop/src/enc-base64";

let btnConnect = document.getElementById("btnConnect");
let btnSend = document.getElementById("btnSend");

//Conectar
function connect()
{
    let data =
	{
        method: 'POST', body: null
        // body: JSON.stringify(null)
    };
    fetch("./connect-user.php", data ).
    then( response => response.json() ).
    then( response => 
    {
        sessionStorage.setItem('chatKey', response );
        alert('Connected Sucessfully');
    });
}

//Enviar mensaje
function send() 
{
    fetch("./send-message.php", 
    { 
        method: "POST", body: JSON.stringify(encrypt_message(sessionStorage.getItem("chat-key"), inputField.value))
    })
    // fetch("./send_message.php", data ).
    .then(response => response.json())
    .then(response => 
    {
    	alert('Message send Sucessfully');
    });
}S

//Encriptar mensaje
function encrypt_message(key, message) 
{
    let encryption = CryptoJS.AES.encrypt(message, key);
    let data = 
    {
        "sender": "A",
        "reciever": "B",
        "message": encryption.toString()
    }
    return data;
}

//Desencriptar mensaje
function decrypt_message(key, message) 
{
    let decrypted = CryptoJS.AES.decrypt(message, key); 
    return decrypted.toString(CryptoJS.enc.Utf8);
}

//Obtener mensaje    
function get_message() 
{
    fetch("./get-message.php", 
    { 
        method: "POST", body: JSON.stringify({ "reciever": "B" }) 
    })
    .then(response => response.json())
    .then(response => 
    {
        decryptedMessage = decrypt_message(sessionStorage.getItem("chat-key"), response["message"]);
        textAreaB.value = decryptedMessage;
    });
}

function main()
{
    connectButton.addEventListener("click", () => connect());
    sendButton.addEventListener("click", () => send());
    getButton.addEventListener("click", () => get_message());
}
    
window.addEventListener("load", () => main());