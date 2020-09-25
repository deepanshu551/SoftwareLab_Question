var mongoose = require('mongoose');

var EmployeeSchema = mongoose.Schema({

    EmpName: { type: String, required: true },
    EmailId: { type: String, required: true },
    phone: { type: Number, required: true }
})

module.exports = mongoose.model('emp', EmployeeSchema);