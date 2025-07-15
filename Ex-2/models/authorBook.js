import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Author = sequelize.define('Author',{
    name : DataTypes.STRING,
    birthYear : DataTypes.INTEGER
});

const Book = sequelize.define('Book',{
    title : DataTypes.STRING,
    publicationYear : DataTypes.INTEGER,
    page : DataTypes.INTEGER
})
Author.hasMany(Book, { foreignKey: 'authorId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });
export { Author, Book };