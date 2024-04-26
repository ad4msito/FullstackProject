Este proyecto universitario tiene como objetivo crear una solución Fullstack para personalizar muñecos de peluche antes de su compra. La solución se divide en dos partes: back-end y front-end.

Funcionalidades del back-end en la primera entrega:
-Crear una cuenta de usuario.
-Autenticar usuarios (con Json Web Token).
-Proporcionar endpoints públicos para ver información sobre los muñecos de peluche.
-Proporcionar endpoints privados para acceder a funciones específicas (por ejemplo, elegir peluches).

Tecnologías Utilizadas 
-Lenguaje de Programación: JavaScript 
-Modelo de Tres Capas: El proyecto sigue una arquitectura de MVC (MODEL, VIEW, CONTROLLER)
-Base de Datos: MongoDB


INSTRUCCIONES DE USO:
En SRC/CONTROLLER/PELUCHES/DBPELUCHES  esta la funcion para poblar la base de datos con todas las opciones de peluches para elegir. 
Seguido de ella, una opcion para poder agregar una funcion que implementare a futuro la cual añade la cantidad de ventas por muñeco. 
De momento, eso lo realizo recorriendo la base de datos para realizar el ranking. :)
estas funciones se ejecutan en los endpoints:
POST http://localhost:8080/api/peluches/llenar
PUT http://localhost:8080/api/peluches/edit

///utilizacion de endpoints en un archivo .http/.rest con el ejemplo de un usuario y su token:
### ENDPOINTS PUBLICOS:

### GET ranking
GET http://localhost:8080/api/public/rankingPeluches

### para ver todos los peluches disponibles:
GET http://localhost:8080/api/peluches/

### para crear un usuario:
POST http://localhost:8080/api/usuarios/registrarse
Content-type:application/json

{
"email": "example@mail.com",
"name": "example",
"lastname": "example",
"roles": "user",
"password": "example"
}

### para logearse: (DEVUELVE UN TOKEN PARA LOS ENDPOINTS)
POST http://localhost:8080/api/auth/login
Content-Type: application/json

{
"email":"adam@mail.com",
"password":"ad4msito"
}

### ENDPOINTS PRIVADOS: (recordar cambiar el jwt que va al lado de Authorization: Bearer) 

### para elegir un peluche: RECORDAR ENVIAR EL JWTOKEN COMO BEARER TOKEN:
POST http://localhost:8080/api/private/elegirPeluche
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mjg0NDYwY2FjNmM1NzE4MTBlMGQzMyIsImVtYWlsIjoiYWRhbUBtYWlsLmNvbSIsImlhdCI6MTcxNDA4MzY5MH0.zqWC9W_b0V3Gssd-VOBZG0VR9kTBpmdd6PAvDiiEkQg

{
"tipo": "perro",
"color": "amarillo",
"accesorios": "camiseta y pelota de futbol"
}

### para ver peluches:
GET http://localhost:8080/api/private/misPeluches
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mjg0NDYwY2FjNmM1NzE4MTBlMGQzMyIsImVtYWlsIjoiYWRhbUBtYWlsLmNvbSIsImlhdCI6MTcxNDA4MzY5MH0.zqWC9W_b0V3Gssd-VOBZG0VR9kTBpmdd6PAvDiiEkQg



### para eliminar peluches:
POST http://localhost:8080/api/private/eliminarPeluche
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mjg0NDYwY2FjNmM1NzE4MTBlMGQzMyIsImVtYWlsIjoiYWRhbUBtYWlsLmNvbSIsImlhdCI6MTcxNDA4MzY5MH0.zqWC9W_b0V3Gssd-VOBZG0VR9kTBpmdd6PAvDiiEkQg

{
"pelucheId":"66295f459ab13fc151117783"
}
