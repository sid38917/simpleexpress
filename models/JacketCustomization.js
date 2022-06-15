const mongoose = require('mongoose');

const JacketCustomizationSchema = new mongoose.Schema({
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

const JacketCustomization = mongoose.model('JacketCustomization', JacketCustomizationSchema)

module.exports = JacketCustomization