const express = require("express")
const { newStudent, getStudent } = require("../controllers/studentController")

const studentRoute = express.Router()

studentRoute.post("/students", newStudent)
studentRoute.get("/students", getStudent)
// studentRoute.get("/students/:id", getStudentById)
// studentRoute.put("/students/:id", updateStudent)
// studentRoute.delete("/students/:id", deleteStudent)
// studentRoute.get(`/students?search`, searchStudent)
// studentRoute.get(`/students?course`, course)
// studentRoute.get(`/students?sort=age`, ageSort)
// studentRoute.get(`/students?sort=age`, ageDesc)

module.exports = studentRoute