import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const AttendanceRecord = sequelize.define('AttendanceRecord',{
    studentId :DataTypes.INTEGER,
    classId :DataTypes.INTEGER,
    date : DataTypes.DATEONLY,
    status : DataTypes.STRING
});

export default AttendanceRecord;