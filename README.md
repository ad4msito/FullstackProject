PROYECTO: api para e-commerce de Peluches. Basado en el modelo MVC en el cual separamos las responsabilidades en capas. Divido en Back-end y Front-end. 
En dbPeluche dentro de Controllers/peluches nos encontramos con la creacion de la base de datos la cual tiene todas las opciones disponibles.
INSTRUCCIONES:
//ENDPOINTS PUBLICOS

para ver el ranking de peluches:
enpoint: GET http://localhost:8080/api/public/rankingPeluches

para ver todos los peluches disponibles:
endpoint GET localhost:8080/api/peluches/

para logearse: (DEVUELVE UN TOKEN PARA LOS ENDPOINTS)
endpoint: GET http://localhost:8080/api/auth/login
body:
{
    "email":"adam@mail.com",
    "password":"ad4msito"
}

//ENDPOINTS PRIVADOS: (CON JWT)
para elegir un peluche: RECORDAR ENVIAR EL JWTOKEN COMO BEARER TOKEN
endpoint: POST http://localhost:8080/api/private/elegirPeluche
ejemplo de body:
{
    "tipo": "perro",
    "color": "amarillo",
    "accesorios": "camiseta y pelota de futbol"
}

para ver peluches: 
endpoint: GET http://localhost:8080/api/private/misPeluches

para eliminar peluches:
endpoint: POST http://localhost:8080/api/private/eliminarPeluche
ejemplo de body:
{
    "pelucheId":"66295f459ab13fc151117783"
}
