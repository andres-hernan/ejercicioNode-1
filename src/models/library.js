const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');

//modelo de entidad - datos que va a tener la tabla library
const Library = sequelize.define('Libraries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    paranoid: true,
});

Library.hasMany(Book);
Book.belongsTo(Library);

/*
Ver asociaciones video 4 1:20:00 a 1:30:00

Provider->Crear ticket 1:35:50|59
Associations:
HasOne
BelongsTo
HasMany
BelongsToMany

*/ 

module.exports = Library;