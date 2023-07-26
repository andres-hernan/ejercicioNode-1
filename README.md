# Ejercicio Node JS

## Instalación
Clonar repositorio.
Situarse en el directorio de la app e instalar dependencias con comando "npm install".

## Correr aplicación
Ejecutar comando "npm run start" (entorno de producción) | "npm run dev" (entorno de desarrollo).

## Modelos
La base de datos tiene 3 modelos: book, library y user.
Book y library tienen relación entre sí.

#### Book
Entidad: id, isbn, title, author, year, library.

#### Library
Entidad: id, name, location, telephone.
Relación 1 a n: Library has many books, book belongs to library.

#### User
Entidad: id, fistName, lastName, userName, email, password.

### Login
Usuario administrador -> userName: "admin", password: "admin".
Nota: solo el usuario admin puede crear, actualizar y eliminar libros y librerías, 
así como ver usuarios y lista de usuarios. El usuario común puede crear su propio 
usuario, modificarlo, hacer login y ver libros y lista de libros.

----------------------------------------------------------------------

## Estructura

### App
Genero aplicación y levanto servidor.

### Modelos
Defino modelos de entidad para usuario, libro y librería, indicando campos, tipos de datos, validaciones, estableciendo asociación entre libro y librería.

### Providers
Establezco las acciones que van a realizar los providers ante una petición de los servicios, al conectarse a la base de datos, de acuerdo con cada modelo -> Create, Get, GetAll, Update, Delete, Validate (en el caso de user).

### Services
Indico acciones que realizarán los servicios al conectarse con los providers correspondientes, cuando reciban peticiones de los controllers.

### Controllers:
Defino métodos asíncronos que ejecutarán los controllers al recibir las requests, y sus respuestas correspondientes. 

### Middleware de autenticación:
Genero estrategia de validación para usuario admin y usuario común.

### Routes:
Defino las rutas para cada recurso, que recibirán las requests del lado del cliente, utilizando middleware de autenticación para proteger la base de datos.