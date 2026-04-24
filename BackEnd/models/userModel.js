const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
   
   // we Dont have any strickly required field plz dont erase and add any feild
   // thank You!!!!!

   //Comman Field
    name:{
      type:String,
     minLength:[3,'Name must Consist at least 3 letters']
      
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
          validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          message: "Please enter a valid email"
      },
      required: [true, "Email required"]
  },
    password:{
      type: String,
      minlength: [8,"Password Must have min. Lenght 8"],
      maxlength: [16,"Password Must have max. Lenght 16"],
      trim: true,
      required: true
    },

    phone: {
      type: Number,
      min:[999999999,"Must be 10 digit"],
     // required: [true, 'User phone number required']
    },
    age:{
      type:Number,
      min:[1,"we Register people having age more than 12 months"],
      //required: [true, "Age is Required"]

    },
    gender:{
     type:String
    },
    role:{
      type: String
    },

    location:{
      type:String,  
      
    },
    
    
    //Patient
    disease:{
      type:String,

    },

    //Doctor
    education:{
      type:String,
    },

    speciality:{
      type:String,
    },

    hospital:{
      type:String,
    },

    fee:{
      type:Number, 
    },
     rate:{
      type:Number,
      default:1
    },
    
    status:{
      type:String ,
      
    },

    flag:{
      type:Boolean,
    },
    photo:
  {
    
  }

   
})



userSchema.plugin(uniqueValidator, { message: '{PATH} is already registered!!' });


// middleware pre
userSchema.pre('save',  async function(next){
    console.log('Called before create method..... ****** ', this.password);
    console.log(this);
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  });

 
  userSchema.methods.avgrate =  function(enteredrate) {
    this.rate=( enteredrate + this.rate  )/2;
    return this.rate
    }

userSchema.methods.matchPasswords = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('Users',userSchema)

module.exports = User;