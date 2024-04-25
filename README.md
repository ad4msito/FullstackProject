Este proyecto universitario tiene como objetivo crear una solución Fullstack para personalizar muñecos de peluche antes de su compra. La solución se divide en dos partes: back-end y front-end.

Funcionalidades del back-end en la primera entrega:
-Crear una cuenta de usuario.
-Autenticar usuarios.
-Proporcionar endpoints públicos para ver información sobre los muñecos de peluche.
-Proporcionar endpoints privados para acceder a funciones específicas (por ejemplo, elegir peluches).

Tecnologías Utilizadas 
-Lenguaje de Programación: JavaScript 
-Modelo de Tres Capas: El proyecto sigue una arquitectura de MVC (MODEL, VIEW, CONTROLLER)
-Base de Datos: MongoDB


INSTRUCCIONES DE USO:
En SRC/CONTROLLER/PELUCHES/DBPELUCHES esta la autogeneracion de la base de datos con todas las opciones de peluches para elegir. Seguido de ella, una opcion para poder agregar una funcion que implementare a futuro la cual añade la cantidad de ventas por muñeco. De momento, eso lo realizo recorriendo la base de datos para realizar el ranking. :)
estas funciones se ejecutan en las rutas: (acceder a los endpoints que son los de POST/PUT localhost:8080/api/peluches/...(/llenar, /edit))
//router.post('/llenar', llenarDBPeluches.llenarDBPeluches);
//router.put('/edit', llenarDBPeluches.actualizarPeluches);

//ENDPOINTS PUBLICOS
//para ver el ranking de peluches:
enpoint: GET http://localhost:8080/api/public/rankingPeluches

//para ver todos los peluches disponibles:
endpoint GET localhost:8080/api/peluches/

//para crear un usuario:
endpoint: POST localhost:8080/api/usuarios/registrarse
EJEMPLO:
{
    "email": "example@mail.com",
    "name": "example",
    "lastname": "example",
    "roles": "user",
    "password": "example"
}

//para logearse: (DEVUELVE UN TOKEN PARA LOS ENDPOINTS)
endpoint: GET http://localhost:8080/api/auth/login
body: (usuario de prueba que ya adquirio peluches)
{
    "email":"adam@mail.com",
    "password":"ad4msito"
}

//ENDPOINTS PRIVADOS: (CON JWT)
//para elegir un peluche: RECORDAR ENVIAR EL JWTOKEN COMO BEARER TOKEN
endpoint: POST http://localhost:8080/api/private/elegirPeluche
ejemplo de body:
{
    "tipo": "perro",
    "color": "amarillo",
    "accesorios": "camiseta y pelota de futbol"
}

//para ver peluches: 
endpoint: GET http://localhost:8080/api/private/misPeluches

//para eliminar peluches:
endpoint: POST http://localhost:8080/api/private/eliminarPeluche
ejemplo de body:
{
    "pelucheId":"66295f459ab13fc151117783"
}
