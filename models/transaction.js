const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }, 
    delivery: {
        firstName: String, 
        lastName: String,
        phone: String,
        province: String, 
        city: String, 
        country: String, 
        postCode: String,
        address: String

    }, 
    shipping: Number,
    itemsTotal: Number,
    total: Number,
    
    items: [
        {
            fabric:{}, //array
            customize: [], //array of objects, multiple arrays 
            measurement: [],
            product: String //name of the product 
        },
    ],
    status: String ,
    payment: {
        token: String, 
        // redirect_url: String
    },
    // paymentResult: {}

}, {timestampts: true});


   

    




const transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction;