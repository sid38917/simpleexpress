const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
   username: {
       type: String, 
       required: true
   },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
})

const customer = mongoose.model('customer', customerSchema)

module.exports = customer