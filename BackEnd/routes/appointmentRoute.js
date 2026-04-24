
const {gettodaysAppointmentby_Pid, getAppointment, gettodaysAppointmentby_Did,createAllAppointment,getAppointmentHistoryby_Did,getUpcomingAppointmentby_Did, getAppointmentHistoryby_Pid, getUpcomingAppointmentby_Pid, getAppointmentHistory, getUpcomingAppointments, updateAppointment, deleteAppointment, todaysAppointment } = require("../controllers/appointmentController");
const express = require('express');
const router = express.Router()


// express router method to create route for getting all Appointments
router.route('/')
.get(getAppointment)
.post(createAllAppointment)

//admin
router.route('/history')
.get(getAppointmentHistory)

router.route('/upcoming')
.get(getUpcomingAppointments)


//patient
router.route('/patient/today/:id')
.get(gettodaysAppointmentby_Pid)

router.route('/patient/upcoming/:id')
.get(getUpcomingAppointmentby_Pid)

router.route('/patient/history/:id')
.get(getAppointmentHistoryby_Pid)


//doctor
router.route('/doctor/upcoming/:id')
.get(getUpcomingAppointmentby_Did)

router.route('/doctor/history/:id')
.get(getAppointmentHistoryby_Did)

router.route('/doctor/today/:id')
.get(gettodaysAppointmentby_Did)


router.route('/:id')
.patch(updateAppointment)

router.route('/:id')
.delete(deleteAppointment)


router.route('/todaysAppointments')
.get(todaysAppointment)


module.exports = router;