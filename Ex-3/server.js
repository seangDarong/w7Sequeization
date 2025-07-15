import sequelize from "./db/database.js"; 
import "./model/AttendanceRecord.js"
import AttendanceRecord from "./model/AttendanceRecord.js";
import "./model/Class.js"
import "./model/Student.js"
import "./model/relationship.js"
import express from "express";
import attendanceRoute from "./routes/attendanceRoute.js"
try {
await sequelize.sync();
console.log("Database sync successfully!");

} catch (error) {
console.error("Error", error);
}

// Mark attendace for student 
// await AttendaceRecord.create({
//     studentId: 1,
//     classId: 1,
//     date: "2025-06-17",
//     status: "Present"
// });

//Get student attendace on specific date 
// const record = await AttendaceRecord.findOne({
//     where: {studentId: 1, date: "2025-06-17"}
// });
// console.log(record);

//list all student attendace in class
// const records = await AttendaceRecord.findAll({
//   where: { classId: 2 },
//   include: ["Student"]
// });

//summary attendace
// const summary = await AttendaceRecord.findAll({
//   where: { studentId: 1 }
// });


const app = express();
app.use(express.json());
app.use("/",attendanceRoute);


app.listen(3000,() => console.log("Server running on port 3000"));
