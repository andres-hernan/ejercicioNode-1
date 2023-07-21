# Ejercicio Node JS

### App:
Genero aplicación y levanto servidor.

### Modelos: 
Defino modelos de entidad para usuario, libro y librería, indicando campos, tipos de datos,  estableciendo asociación entre libro y librería.

### Providers:
Establezco las acciones que van a realizar los providers ante una petición de los servicios, al conectarse a la base de datos, de acuerdo con cada modelo -> Create, Get, GetAll, Update, Delete.

### Services:
Indico acciones que realizarán los servicios al conectarse con los providers correspondientes, cuando reciban peticiones de los controllers.

### Controllers:
Defino métodos asíncronos que ejecutarán los controllers al recibir las requests, y sus respuestas correspondientes. 

### Middleware de autenticación:
Genero estrategia de validación de usuario para admin y usuario común.

### Routes:
Defino las rutas para cada recurso, que recibirán las requests del lado del cliente, utilizando middleware de autenticación para proteger la base de datos.