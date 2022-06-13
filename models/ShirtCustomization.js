const mongoose = require('mongoose');

const ShirtCustomizationSchema = new mongoose.schema({
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

const ShirtCustomization = mongoose.model('ShirtCUstomization', ShirtCustomizationSchema)

module.exports = ShirtCustomization