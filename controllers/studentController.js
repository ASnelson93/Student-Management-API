const Student = require("../models/studentModel")


const newStudent = async (req, res) => {
    try {
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
        return res.status(500).send({
            message: "Server error"
        })
    }
}

const getStudent = async (req, res) => {
    try {
        const studentList = await Student.find()

        return res.status(200).send(studentList)
    } catch (error) {
        return res.status(500).send({
            message: "server error"
        })
    }
}

const updateStudent = async (req, res) => {

}

const deleteStudent = () => { }

const searchStudent = () => { }

const filterCourse = () => { }

const sortByAge = () => { }

module.exports = {
    newStudent,
    getStudent
}