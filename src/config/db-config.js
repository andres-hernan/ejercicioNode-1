const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

//método para inicializar la base de datos - singleton
const initializeDB = async () => {
    try {
        //verifica si la conexión es válida
        await sequelize.authenticate();
        console.log('Connection established with database');
        //va a sincronizar los modelos definidos con la base de datos
        //si tiene que cambiar algo -> alter table
        //force: true, hace un drop table con cada inicialización
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Error when initilizing database', error);
    }
};

module.exports = { sequelize, initializeDB }