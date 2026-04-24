const express = require('express');
const router = express.Router()

const { getPatients, getDoctors, getPendingDoctors, getAdministrationData} = require("../controllers/adminController");

router.route('/getPatients')
.get(getPatients)

router.route('/getDoctors')
.get(getDoctors)

router.route('/pendingDoctors')
.get(getPendingDoctors)

router.route('/administration')
.get(getAdministrationData)

module.exports = router;