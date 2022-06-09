const mongoose = require('mongoose')




//this is the customer model
//the data will be stored as a json, which 
//inlcudes the username, stored as a string, email and password
//this allows for creating a new schema in the database, 
//where each customer data will be stored in this manner
//under the Customer folder
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