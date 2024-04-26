Este proyecto universitario tiene como objetivo crear una solución **Fullstack** para personalizar muñecos de peluche antes de su compra. La solución se divide en dos partes: **back-end** y **front-end**.

## Funcionalidades del Back-End (Primera Entrega)

- **Crear una Cuenta de Usuario**: Los usuarios pueden registrarse y crear una cuenta para acceder a las funcionalidades personalizadas.
- **Autenticar Usuarios (con JSON Web Token)**: Implementamos autenticación segura para proteger las rutas privadas.
- **Endpoints Públicos**:
  - Ver información sobre los muñecos de peluche disponibles.
- **Endpoints Privados**:
  - Acceder a funciones específicas, como elegir peluches personalizados.

## Tecnologías Utilizadas

- **Lenguaje de Programación**: JavaScript
- **Modelo de Tres Capas**: El proyecto sigue una arquitectura MVC (Modelo-Vista-Controlador).
- **Base de Datos**: MongoDB

## Instrucciones de Uso

1. **Poblar la Base de Datos**:
   - En `SRC/CONTROLLER/PELUCHES/DBPELUCHES`, encontrarás la función para poblar la base de datos con todas las opciones de peluches disponibles.
   - Además, hay una opción para agregar una función (para implementar a futuro) que registre la cantidad de ventas por muñeco.
   - Por ahora, calculamos el ranking recorriendo la base de datos.

2. **Endpoints**:
   - Las funciones mencionadas se ejecutan en los endpoints del back-end.
   - A continuación, se presentan ejemplos de cómo utilizar los endpoints:

### ENDPOINTS PÚBLICOS:

- **Ver Ranking de Peluches Más Comprados**:
  - `GET http://localhost:8080/api/public/rankingPeluches`

- **Ver Todos los Peluches Disponibles**:
  - `GET http://localhost:8080/api/peluches/`

- **Crear un Usuario**:
  - `POST http://localhost:8080/api/usuarios/registrarse`
  - Cuerpo de la solicitud (Content-Type: application/json):
    ```json
    {
      "email": "example@mail.com",
      "name": "example",
      "lastname": "example",
      "roles": "user",
      "password": "example"
    }
    ```

- **Iniciar Sesión (Devuelve un Token para los Endpoints)**:
  - `POST http://localhost:8080/api/auth/login`
  - Cuerpo de la solicitud (Content-Type: application/json):
    ```json
    {
      "email": "adam@mail.com",
      "password": "ad4msito"
    }
    ```

### ENDPOINTS PRIVADOS (Recordar cambiar el JWT que va al lado de Authorization: Bearer):

- **Elegir un Peluche (Enviar JWT como Bearer Token)**:
  - `POST http://localhost:8080/api/private/elegirPeluche`
  - Cabecera de la solicitud:
    ```
    Authorization: Bearer <tu_token_jwt>
    ```
  - Cuerpo de la solicitud (Content-Type: application/json):
    ```json
    {
      "tipo": "perro",
      "color": "amarillo",
      "accesorios": "camiseta y pelota de fútbol"
    }
    ```

- **Ver Peluches del Usuario**:
  - `GET http://localhost:8080/api/private/misPeluches`
  - Cabecera de la solicitud:
    ```
    Authorization: Bearer <tu_token_jwt>
    ```

- **Eliminar un Peluche**:
  - `POST http://localhost:8080/api/private/eliminarPeluche`
  - Cabecera de la solicitud (Content-Type: application/json):
    ```
    Authorization: Bearer <tu_token_jwt>
    ```
  - Cuerpo de la solicitud:
    ```json
    {
      "pelucheId": "66295f459ab13fc151117783"
    }
    ```

¡Espero que esta descripción te ayude a presentar tu proyecto de manera clara y concisa! 🌟
