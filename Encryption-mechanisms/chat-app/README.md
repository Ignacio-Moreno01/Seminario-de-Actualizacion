Aplicacion de chat, en donde un usuario A interactua con un usuario B.

-Consigna
    Diseñar una aplicación de comunicación básica (estilo email o chat) que permita establecer una comunicación 
    cifrada de extremo a extremo mediante cifrado simétrico. La comunicación no necesita ser sincrónica, sino 
    reflejar el mecanismo de cifrado.
    La actividad será abordada estilo taller, con espacios de resolución individual específica según se avance 
    en la implementación.

-Desarrollo
    Construir una interfaz gráfica de ejemplo simulando la comunicación entre dos personas. 
    Usuario A y Usuario B. Cada uno deberá tener un campo input de texto de entrada y un elemento textarea 
    como área de visualización del intercambio de mensajes.
    Construir la implementación Cliente/Servidor en donde cualquiera de los usuarios envía un mensaje al otro 
    y viceversa. El servidor debe ser capaz de primero otorgar una clave simétrica a ambos clientes para que 
    puedan desencriptar los mensajes. Como la comunicación es vía HTTP (Cada usuario deberá efectuar una 
    consulta periódica a su bandeja de entrada de mensajes) a fin de poder ver la fluidez en la interacción. 
    (Mecanismo de Pooling)

-Material y tips para la implementación
    -Front-End: Para realizar las operaciones de cifrado y descifrado emplear la librería CryptoJS. Descargar 
    el archivo adjunto aes.js e incluirlo en la vista HTML principal para que las funciones estén disponibles 
    para su uso. Recordar que previamente la clave de cifrado debe estar guardada en el cliente. El cliente 
    es el responsable de encriptar el mensaje a enviar luego.
    
    -Si los métodos de cifrado/descifrado son asincrónicos se debe encadenar la ejecución mediante .then( ) 
    al igual como se trabaja con la función fetch( ).
    
    -Back-End:
    Para emular el guardado de los mensajes encriptados que envía el cliente al servidor, utilizar $_SESSION 
    como mecanismo básico de persistencia.
    
    -Front-End: El usuario B tiene que tener alguna función que se ejecute periódicamente que invoque el 
    procedimiento get_messages de la API del servidor. El get_messages debe retornar los mensajes guardados 
    de la variable $_SESSION y debe borrarlos de allí al hacerlo. En JS la ejecución periódica se realiza con 
    setInterval.