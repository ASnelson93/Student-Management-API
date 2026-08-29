const mongoose = require("mongoose")
const { isPrimary } = require("node:cluster")

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    phone : {
        type : String,
        require: true,
        trim : true
    },
    age : {
        type : Number,
        require:true,
        min : 16
    },
    course : {
        type : String,
        require : true,
        trim : true
    },
    city : {
        type : String,
        default : "Atlanta",
        required : true,
        trim : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Student = mongoose.model("student", studentSchema)

module.exports = Student