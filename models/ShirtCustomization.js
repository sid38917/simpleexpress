const mongoose = require('mongoose');

const ShirtCustomizationSchema = new mongoose.Schema({
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

const ShirtCustomization = mongoose.model('ShirtCustomization', ShirtCustomizationSchema)

module.exports = ShirtCustomization