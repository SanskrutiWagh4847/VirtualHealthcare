const asyncHandler = require('express-async-handler'); 
const Appointment = require('../models/appointmentModel');


//Get all appointments for perticular doctors

const getDoctorsAppointments = asyncHandler(async (req, res, next) => {
  let appointments = await Appointment.find({ doctorId: req.params.id });
  res.json(appointments);
});


module.exports={getDoctorsAppointments}