const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }, 
    address: {
        name: String, 
        phone: String,
        street: String,
        province: String, 
        city: String, 
        country: String, 

    }, 
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product' //refrence product, find the product and use it here 
    },
    measurements: [
        {
            key: String,  //ex. neck
            value: String //value inputted by neck
        }
    ],
    fabrics: 
        {
            key: String, //ex fabrics
            value: String //fabric choice
        }
    ,
    customizes: [
        {
            key: String,   //ex. styling options
            value: String //styling choices
        }
    ]

    
});



const transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction;