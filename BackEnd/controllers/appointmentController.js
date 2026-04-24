
const Appointment = require('../models/appointmentModel');
const asyncHandler = require('express-async-handler'); 


  
function formatYear(day) {
    let Month = day.getMonth()+1;
    let Day = day.getDate();
    let Year = day.getFullYear();
    Day = Day < 10 ? "0" + Day : Day;
    Month = Month < 10 ? "0" + Month : Month;
    const strTime =Year +"-"+ Month + "-" + Day ;
    return strTime;
  }



const getAppointment = asyncHandler(async(req, res, next) => {
    const appointment = await Appointment.find({})
    res.json(appointment)
})


const createAllAppointment = asyncHandler(async (req,res,next)=>{
    let appointment = await Appointment.create(req.body);
    res.json({success:"Data Created SuccessFully" ,data:appointment})
})


const updateAppointment = asyncHandler(async (req,res,next)=>{
    let result = await Appointment.updateOne({_id:req.params.id},req.body);
    console.log(result);
    res.json({success:true})
     
})

const deleteAppointment = asyncHandler(async (req,res,next)=>{
    let result = await Appointment.deleteOne({_id:req.params.id});
    console.log(result);
    res.json({success:"Data Deleted SuccessFully"})

})


const todaysAppointment = asyncHandler(async(req, res, next) => {
    const day = new Date(); 
    const today = formatYear(day)
    console.log(today)
    const appointment = await Appointment.find({ date: today})
    res.json(appointment)
})

// all past appointments
const getAppointmentHistory = asyncHandler(async(req, res, next) => {
    const day = new Date(); 
    const today = formatYear(day);
    const appointment = await Appointment.find({"date": {"$lt": today}})
    res.json(appointment)
})

// all upcoming appointments
const getUpcomingAppointments = asyncHandler(async(req, res, next) => {
    const day = new Date(); 
    const today = formatYear(day);
    const appointment = await Appointment.find({"date": {"$gt": today}})
    res.json(appointment)
})



//patient history and upcoming appointments
const getAppointmentHistoryby_Pid = asyncHandler(async(req, res, next) => {
    const day = new Date(); 
    const today = formatYear(day); 
    const appointment = await Appointment.find({"date": {"$lt": today}, patientId: req.params.id})
    res.json(appointment)
})

const getUpcomingAppointmentby_Pid = asyncHandler(async(req, res, next) => {
    const day = new Date(); 
    const today =  formatYear(day); 
    const appointment = await Appointment.find({"date": {"$gt": today}, patientId: req.params.id})
    res.json(appointment)
})
const gettodaysAppointmentby_Pid = asyncHandler(async( req,res, next) => {
    const day = new Date(); 
    const today = formatYear(day); 
    console.log(today)
    const appointment = await Appointment.find({ patientId:req.params.id,"date": today})
    res.json(appointment)
})



//doctor history and upcoming
const getAppointmentHistoryby_Did = asyncHandler(async(req, res,next) => {
    const day = new Date(); 
    const today = formatYear(day); 
    const appointment = await Appointment.find({"date": {"$lt": today}, doctorId: req.params.id})
    res.json(appointment)
})

const getUpcomingAppointmentby_Did = asyncHandler(async(req, res, next) => {
    const day = new Date(); 
    const today = formatYear(day); 
    const appointment = await Appointment.find({"date": {"$gt": today}, doctorId: req.params.id})
    res.json(appointment)
})

const gettodaysAppointmentby_Did = asyncHandler(async( req,res, next) => {
    const day = new Date(); 
    const today = formatYear(day); 
    console.log(today)
    const appointment = await Appointment.find({ doctorId:req.params.id,"date": today})
    res.json(appointment)
})

module.exports={getAppointment,getAppointmentHistory,getUpcomingAppointments, getUpcomingAppointmentby_Pid, getAppointmentHistoryby_Pid, getAppointmentHistoryby_Did, getUpcomingAppointmentby_Did, createAllAppointment, todaysAppointment, updateAppointment, gettodaysAppointmentby_Pid,deleteAppointment, gettodaysAppointmentby_Did}