const mongoose = require('mongoose');

const FabricSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    color: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
    product: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true

    }

})

const fabric = mongoose.model('fabric', FabricSchema)

module.exports = fabric