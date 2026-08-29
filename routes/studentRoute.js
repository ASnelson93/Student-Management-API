const express = require("express")
const { newStudent, getStudent, updateStudent, deleteStudent, getStudentById } = require("../controllers/studentController")

const studentRoute = express.Router()

studentRoute.post("/students", newStudent)
studentRoute.get("/students", getStudent)
studentRoute.get("/students/:id", getStudentById)
studentRoute.put("/students/:id", updateStudent)
studentRoute.delete("/students/:id", deleteStudent)


module.exports = studentRoute