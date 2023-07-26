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
    FKuser: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    FKlibrary: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "Libraries",
        key: "id",
      },
    },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
  });
 /* {
    sequelize,
    paranoid: true,
    timestamps: true,
    deletedAt: "destroyTime"
  }*/
  
 


//Book.belongs(User, {foreignKey: 'book', sourceKey: 'id'});
//Book.belongsTo(Library, {foreignKey: 'book', targetKey: 'id'});

User.hasMany(Book);
Book.belongsTo(User);

Library.hasMany(Book);
Book.belongsTo(Library);

/*
User.hasMany(Book, {
  foreignKey: 'userId', // Nombre de la clave foránea en la tabla Book
});
Book.belongsTo(User, {
  foreignKey: 'userId', // Nombre de la clave foránea en la tabla Book
});

Library.hasMany(Book, {
  foreignKey: 'libraryId', // Nombre de la clave foránea en la tabla Book
});
Book.belongsTo(Library, {
  foreignKey: 'libraryId', // Nombre de la clave foránea en la tabla Book
});
*/

module.exports = Book;

