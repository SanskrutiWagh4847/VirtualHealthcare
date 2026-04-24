const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");



const getPatients = asyncHandler(async (req, res, next) => {
  let user = await User.find({role: "patient"});
  res.json(user);
});


const getDoctors = asyncHandler(async (req, res, next) => {
    let doctor = await User.find({role: "doctor", flag: true});
    res.json(doctor);
   
});

const getPendingDoctors = asyncHandler(async (req, res, next) => {
    let doctor = await User.find({role: "doctor", flag: false});
    res.json(doctor);
   
});

const getAdministrationData = asyncHandler(async (req, res, next) => {
  let admin = await User.find({role: "admin"});
  let reporter = await User.find({role: "reporter"});
  let administration = [...reporter,...admin]
  res.json(administration);
});


module.exports = { getPatients , getDoctors, getPendingDoctors, getAdministrationData}