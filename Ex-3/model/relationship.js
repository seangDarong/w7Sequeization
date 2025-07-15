import Student from "./Student.js";
import Class from "./Class.js";
import AttendanceRecord from "./AttendanceRecord.js";

Student.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Student);

Class.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Class);