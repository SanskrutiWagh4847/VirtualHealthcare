const {getDoctorsAppointments} = require('../controllers/doctorController');
const express = require('express');
const router = express.Router()

router.route('/appointments/:id')
.get(getDoctorsAppointments)

module.exports = router;