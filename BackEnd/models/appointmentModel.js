const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
   
  
    doctorId:{
        type:String,
        // required:[true,"Doctor is not Assigned!!"]
    },

    doctorName:{
        type: String
    },

    patientId:{
        type:String,
        // required:[true,"Patient is not Assigned"]
    },

    patientName:{
        type: String
    },

    symptoms:{
        
    },
    
    date:{
        type:String,
        // required:[true,"Please select date of the appointment"]
    },
    time:{
        type:String,
        // required:[true,"Please select time of the appointment"]
    },
    disease:{
        type: String
    },
    prescrips:{
        type:String,
        default:"Yet to prescribe"
    }

      
})

const Appointment = mongoose.model('Appointments',appointmentSchema)

module.exports = Appointment;