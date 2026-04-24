const { getAvaiableDoctors, getPatientAppointments, getLeaveDoctors} = require("../controllers/patientController");
const express = require('express');
const router = express.Router()


// express router method to create route for getting all users
router.route('/availableDoctors')
.get(getAvaiableDoctors)


router.route('/leave')
.get(getLeaveDoctors)

router.route('/appointment/:id')
.get(getPatientAppointments)



module.exports = router;