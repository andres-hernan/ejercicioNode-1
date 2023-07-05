const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const { logging } = require('./middleware');
const { userRouter } = require('./routes');
const { initializeDB } = require('./config/db-config');
const { userModel } = require('./models');

//construir app con express
const app = express();

app.use(bodyParser.json());
app.use(logging);
app.use('/user', userRouter);

//correr aplicación en puerto 8080
app.listen(PORT, async ()=> {
    await initializeDB();
    console.log(`Servidor corriendo. Escuchando peticiones en puerto: ${PORT}`);

});

