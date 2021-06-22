const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    image: String, 
    price: Number,

    customizes: [
        {
            customizeId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'customize'
            }
        
        }
    ],
    fabrics: [
        {
            fabric: {
                type: mongoose.Schema.Types.ObjectId,
                 ref: "fabric"
            }
        }
        
    ], 
    measurements: [
        {
            measurement: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "measurement"
            }
        }
    ]
})

const produc = mongoose.model('product', productSchema)
module.exports = produc;

