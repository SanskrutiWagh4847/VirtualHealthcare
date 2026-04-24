const asyncHandler = require('express-async-handler'); 
const User = require('../models/userModel');
const Appointment = require('../models/appointmentModel');



const getPatientAppointments = asyncHandler(async (req, res, next) => {
     let appointments = await Appointment.find({ patientId: req.params.id});
    res.json(appointments);
  });


  const getAvaiableDoctors = asyncHandler(async (req, res, next) => {
    let available = await User.find({ status: "Available"});
    res.json({available});
  });

  const getLeaveDoctors = asyncHandler(async (req, res, next) => {
    let leave = await User.find({ status: "Leave"});
    res.json({leave});
  });



module.exports={getAvaiableDoctors, getPatientAppointments, getLeaveDoctors }