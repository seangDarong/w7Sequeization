import AttendanceRecord from "../model/AttendanceRecord.js";
import Student from "../model/Student.js"
import Class from "../model/Class.js"

// mark student attendance on given date 
export async function markAttendance (req,res){
    const {studentId,classId,date,status} = req.query;
    try{
        const record = await AttendanceRecord.create({studentId,classId,date,status});
        res.json({ message: "Attendance marked" , record});
    } catch(error){
        res.status(500).json({ error : error.message});
    }
}

//get attendance for student on a specific date 
export async function getAttendanceForStudentOnDate (req,res){
    const {studentId,date} = req.query;

    try{
        const record = await AttendanceRecord.findOne({
            where:{ studentId,date}
        });
        if (record) {
            res.json(record);
        }else{
            res.status(404).json( {message :"Attendance record not found"});
        }
    }catch (error){
        res.status(500).josn({error :error.message});
    }
}

//get all the attendance for all student in a class 
export async function getAllStudentAttendanceInClass (req,res){
    const classId = req.params.id;

    try{
        const record = await AttendanceRecord.findAll({
            where:{classId :classId},
            include: [Student]
        });
        if(record) {
            res.json(record);
        }else{
            res.status(404).json({message: "Class not found"})
        }
    }catch(error){
        res.status(500).json({error :error.message})
    }
}

// get student attendance summary 
export async function getStudentAttendanceSummary (req,res){
    const studentId = req.params.id;

    try{
        const record = await AttendanceRecord.findAll({
            where:{studentId :studentId},
            incluse :[AttendanceRecord]
        });
        if(record){
            res.json(record);
        }else{
            res.status(404).json({message : "Student not found"});
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}