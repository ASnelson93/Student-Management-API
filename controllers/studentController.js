const Student = require("../models/studentModel")

//@desc create new student
//@
//
const newStudent = async (req, res) => {
    try {
        const { search, course, sort } = req.query

        let queryObj = {}

        if (search) {
            queryObj.name = { $regex: search, $options: 'i' }
        }

        if (course) {
            queryObj.course = { $regex: new RegExp(`^${course}$`, 'i') }
        }

        let query = Student.find(queryObj)

        if (sort) {
            if (sort==='age') {
                query = query.sort({age: 1})
            } else if (sort==='-age'){
                query = query.sort({age : -1})
            } else {
                query = query.sort(sort)
            }
        }

        const { name, email, phone, age, course, city } = req.body

        if (!name || !email || !phone || !age || !course || !city) {
            return res.status(400).send({
                message: "Invalid Input"
            })
        }

        const existingStudent = await Student.findOne({ email: email })

        if (existingStudent) {
            return res.status(400).send({
                message: "Student already exist"
            })
        }

        const student = await Student({
            name: name,
            email: email,
            phone: phone,
            age: age,
            course: course,
            city: city
        })

        await student.save()

        return res.status(200).send({
            message: "Student created successfully."
        })
    }
    catch (error) {
        next()
    }
}

const getStudent = async (req, res) => {
    try {
        const studentList = await Student.find()

        return res.status(200).send(studentList)
    } catch (error) {
        next()
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params

        const studentList = await Student.findById(id)

        return res.status(200).send(studentList)
    } catch (error) {
        next()
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const { id } = req.params

        const student = await Student.findByIdAndUpdate(id, req.body)

        if (!student) {
            return res.status(400).send({
                message: "Student is not found"
            })
        }

        return res.status(200).send({
            message: "Student has been updated"
        })

    } catch (error) {

        next()
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params

        const student = await Student.findByIdAndDelete(id)

        if (!student) {
            return res.status(400).send({
                message: "Student not found"
            })
        }

        return res.status(200).send({
            message: "Student deleted succesfully"
        })
    } catch (error) {
        next()
    }
}


module.exports = {
    newStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getStudentById
}