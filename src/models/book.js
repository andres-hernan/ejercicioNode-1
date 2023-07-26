const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

//modelo de entidad - datos que va a tener el esquema
const Book = sequelize.define(
  "Books",
  {
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
      allowNull: false,
    },
    library: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "Libraries",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    paranoid: true,
    timestamps: true,
    deletedAt: "destroyTime",
  }
);

module.exports = Book;

