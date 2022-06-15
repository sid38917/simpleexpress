const mongoose = require('mongoose');

const SuitCustomizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 

})

const SuitCustomization = mongoose.model('SuitCustomization', SuitCustomizationSchema)

module.exports =  SuitCustomization
