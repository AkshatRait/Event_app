const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {type: String,},
    title: {type: String, },
    description: {type: String, },
},
{
    timestamps: true
})

const Employee = mongoose.model('Employee',employeeSchema)
module.exports= Employee;