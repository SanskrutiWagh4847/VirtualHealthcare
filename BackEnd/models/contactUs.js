const mongoose = require('mongoose');

const contactUs = mongoose.Schema({
   
    name: {
        type: String,
        
    },
    email: {
        type: String
    },

    message:{
        type: String
    }
   
})

const ContactUs = mongoose.model('queries', contactUs)

module.exports = ContactUs;