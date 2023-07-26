const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

//modelo de entidad - datos que va a tener el esquema
const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 20],
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid: true,
    timestamps: true,
    deletedAt: "destroyTime",
  }
);

/*
Ver asociaciones video 4 1:20:00 a 1:30:00

Provider->Crear ticket 1:35:50|59
Associations:
HasOne
BelongsTo
HasMany
BelongsToMany

*/

module.exports = User;
