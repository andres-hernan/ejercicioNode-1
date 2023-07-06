const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

//modelo de entidad - datos que va a tener el esquema
const Book = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: true,

    }
});


/*
Ver asociaciones video 4 1:20:00 a 1:30:00

Provider->Crear ticket 1:35:50|59
Associations:
HasOne
BelongsTo
HasMany
BelongsToMany

*/ 

module.exports = Book;