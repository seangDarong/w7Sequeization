import express from "express";
import { markAttendance,getAttendanceForStudentOnDate,getAllStudentAttendanceInClass,getStudentAttendanceSummary } from "../controller/attendanceController.js";

const router = express.Router();

router.post("/attendance",markAttendance);
router.get("/attendance",getAttendanceForStudentOnDate);
router.get("/classes/:id/attendance",getAllStudentAttendanceInClass);
router.get("/students/:id/attendance",getStudentAttendanceSummary);
export default router;