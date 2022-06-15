const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    }, 


})

const category = mongoose.model('category', CategorySchema)

module.exports = category