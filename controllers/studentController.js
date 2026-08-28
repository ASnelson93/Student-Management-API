const Student = require("../models/studentModel")


const newStudent = async (req,res) => {
    const {name,email,phone,age,course,city} = req.body

    if(!name || !email || !phone || !age || !course || !city){
        return res.status(400).send({
            message: "Invalid Input"
        })
    }

    const existingStudent = await Student.findOne({email : email})

    if(existingStudent){
        return res.status(400).send({
            message : "Student already exist"
        })
    }

    const student = await Student({
        name : name,
        email : email,
        phone : phone,
        age : age,
        course : course,
        city : city
    })

    await student.save()

    return res.status(200).send({
        message : "Student created successfully."
    })
}

const getStudent = () => {}

const updateStudent = () => {}

const deleteStudent = ()=> {}

const searchStudent = () => {}

const filterCourse = () => {}

const sortByAge = () => {}

module.exports = {
    newStudent
}