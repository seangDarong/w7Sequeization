import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Class = sequelize.define('Class',{
    name : DataTypes.STRING,
    schedule : DataTypes.STRING
});

export default Class;