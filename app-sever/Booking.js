const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    
    service: String
});

const appointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = appointmentModel;