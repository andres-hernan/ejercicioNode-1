const express = require('express');
const PORT = 8080;
const { authRouter, bookRouter, libraryRouter, userRouter } = require('./routes');
const { initializeDB } = require('./config/db-config');


//construir app con express
const app = express();

//uso de middleware
app.use(express.json());

//rutas para acceder a los recursos
app.use('/login', authRouter);
app.use('/book', bookRouter);
app.use('/library', libraryRouter);
app.use('/user', userRouter);

/*error handler
const errorHandler = (err, req, res, next) => {
      res.status(500);
      res.json({ message: err.message });
    };

app.use(errorHandler);*/

//correr aplicación en puerto 8080
app.listen(PORT, async ()=> {
    await initializeDB();
    console.log(`Server running, listening on port: ${PORT}`);

});

