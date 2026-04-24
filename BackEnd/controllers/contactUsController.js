
const ContactUs = require('../models/contactUs');
const asyncHandler = require('express-async-handler'); 


const getAllQuries = asyncHandler(async(req, res, next) => {
    const queries = await ContactUs.find({})
    res.json(queries)
    next();
})


const createQuery = asyncHandler(async (req,res,next)=>{
    let query = await ContactUs.create(req.body);
    res.json({success:"Data Created SuccessFully" ,data:query})
    console.log(req.body);
    next();
})

const deleteQuery = asyncHandler(async (req,res,next)=>{
    let result = await ContactUs.deleteOne({_id:req.params.id});
    console.log(result);
    res.json({success:"Data Deleted SuccessFully"})
    next();

})




module.exports={getAllQuries,createQuery, deleteQuery}