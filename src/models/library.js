const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db-config');
const Book = require('./book');

//modelo de entidad - datos de tabla library
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
    }
    
}, {
    paranoid: true,
    timestamps: true 
});

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;

/*
Ver asociaciones video 4 1:20:00 a 1:30:00

Provider->Crear ticket 1:35:50|59
Associations:
HasOne
BelongsTo
HasMany
BelongsToMany

*/ 
