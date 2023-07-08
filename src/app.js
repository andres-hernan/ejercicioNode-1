const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const { authRouter, bookRouter, libraryRouter, userRouter } = require('./routes');
const { initializeDB } = require('./config/db-config');
const { userModel } = require('./models');

//construir app con express
const app = express();

//uso de middleware
app.use(bodyParser.json());

//rutas para acceder a los recursos
app.use('/login', authRouter);
app.use('/book', bookRouter);
app.use('/library', libraryRouter);
app.use('/user', userRouter);

//correr aplicación en puerto 8080
app.listen(PORT, async ()=> {
    await initializeDB();
    console.log(`Server running, listening on port: ${PORT}`);

});

