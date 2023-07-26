const { DataTypes, ForeignKeyConstraintError } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book");

//modelo de entidad - datos de tabla library
const Library = sequelize.define(
  "Libraries",
  {
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
  },
  {
    sequelize,
    paranoid: true,
    timestamps: true,
    deletedAt: "destroyTime",
  }
);

//Library.hasMany(Book, {foreignKey: 'library', sourceKey: 'id'});
//Book.belongsTo(Library, {foreignKey: 'library', targetKey: 'id'});

module.exports = Library;


