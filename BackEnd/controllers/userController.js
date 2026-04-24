const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const path =require("path");



const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.find({});
  res.json(user);
});

const getUserbyId = asyncHandler(async (req, res, next) => {
  const user = await User.find({_id: req.params.id });
  res.json(user);
});


const createAllUser = asyncHandler(async (req, res, next) => {
  let user = new User(req.body);

  user.save(function (err, docs) {
    if (err) res.json(err);
    else {
      res.json({ success: "Data Created SuccessFully", data: user });
    }
  });
  //res.json({success:"Data Created SuccessFully" ,data:user})
  console.log(req.body);
});


const updateUser = asyncHandler(async (req, res, next) => {
//let  value  =req.body;
console.log(req.body.rate)

if(req.body.rate){
  let user = await User.findOne({ _id: req.params.id });
  let resultrate = await user.avgrate(req.body.rate);
  console.log(resultrate)
  let result = await User.updateOne({ _id: req.params.id }, {rate:resultrate});
  res.json({ data: result,success: "Profile updated successfully rate" });
}
else{
  let result = await User.updateOne({ _id: req.params.id }, req.body);
  console.log(result);
  res.json({ success: "Profile updated successfully" });
}
});


const deleteUser = asyncHandler(async (req, res, next) => {
  let result = await User.deleteOne({ _id: req.params.id });
  console.log(result);
  res.json({ success: "Data Deleted SuccessFully" });
});


const login = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  let { email, password } = req.body;

  if (!email)
    return res.json({ status: 401, message: "Email is not provided" });

  let user = await User.findOne({ email });
  console.log(user);

  if (!user)
    return res.json({ status: 401, message: "Email provided is wrong!!" });
  else {
    if (user.flag === true) {
      // password match
      let result = await user.matchPasswords(password);

      if (!result) {
        return res.json({
          status: 401,
          message: "Password provided is wrong!!",
        });
      } else {
        return res.json({
          status: 201,
          message: "Valid User",
          role: user.role,
          doc: user
        });
      }
    } else {
      res.json({ message: "Request still pending for approval" });
    }
  }
});


const uploadPic = asyncHandler(async (req, res, next) => {
  // find the user
  let user = await User.findById(req.params.id);
  if(!user) return next({ status: 404, message: 'User not found!!' });

  // capture file and 
  console.log(req.files)
  if(!req.files) return next({ status: 404, message: 'Profile pic not provided!!' });

  let file = req.files.file;

  file.name = `pic_${user.id}${path.parse(file.name).ext}`

  console.log(file.name)
//move to a uploads directory

  if(file.size > 10000) return next({ status: 404, message: 'Profile pic not provided!!' });
  if(file.mimetype.startsWith('image'))

  file.mv('./upload/'+ file.name,async(err)=>{
      if(err) return next({ status: 500, message: 'Profile pic could not be uploadded!!' });

  // update the user with the file path
  await User.findByIdAndUpdate(req.params.id, {photo: file.name});
  console.log(file.name)

  res.json({success: true, data: file.name})

  })

})



module.exports = { getUser, getUserbyId, createAllUser, updateUser, deleteUser, login, uploadPic };


