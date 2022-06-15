const mongoose = require('mongoose');

const FabricSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    pattern: {
        type: String,
        required: true
    }, 
    composition: {
        type: String,
        required: true
    }, 
    image: {
        type: String, 
        required: true
    },
    price: {
        suitPrice: Number,
        shirtPrice: Number,

        trouserPrice: Number,
        jacketPrice: Number,

        overcoatPrice: Number,

        vestsPrice: Number,

        jeansPrice: Number,

        waistcoatPrice: Number,
        poloshirttPrice: Number,
        batikPrice: Number,

//overcoat, vests, jeans, waistcoat, tuxedo, polo shirts, Batik


    }


   

})

const fabric = mongoose.model('fabric', FabricSchema)

module.exports = fabric