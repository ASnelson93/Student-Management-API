const mongoose = require("mongoose")
const { isPrimary } = require("node:cluster")

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    phone : {
        type : String,
        require: true
    },
    age : {
        type : Number,
        require:true
    },
    course : {
        type : String,
        require : true
    },
    city : {
        type : String,
        default : "Atlanta",
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Student = mongoose.model("student", studentSchema)

module.exports = Student