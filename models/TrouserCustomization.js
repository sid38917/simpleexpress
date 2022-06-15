const mongoose = require('mongoose');

const TrouserCustomizationSchema = new mongoose.Schema({
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

const TrouserCustomization = mongoose.model('TrouserCustomization', TrouserCustomizationSchema)

module.exports =  TrouserCustomization