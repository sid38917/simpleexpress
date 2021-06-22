const Product = require('../models/product')
const mongoose = require('mongoose');



const AddProduct = async (req, res) => {
    console.log('running add product ==> ', req.body)

    try {
        const {name, image, customizes, fabrics, measurements} = req.body;
        const result = await Product.create({ //to wait
            name, image, customizes, fabrics, measurements
        })
        console.log(result, 'result')
        res.status(201).json({
            status:'success',
            data: result
        })
    

    } catch(error){
        res.status(400).josn({
            status: 'error',
            message: error
        })
    }
}


const getProducts = async(req, res) => {
    try{
        const result  = await Product.find().populate('fabrics.fabric').populate('customizes.customize').populate('measurements.measurement');
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).josn({
            status: 'error',
            message: error
        })
    }
}

const deleteProducts = async(req, res) => {
    const {id} = req.params;
    try{
        const result = await Product.deleteOne({ _id: id})

    res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).josn({
            status: 'error',
            message: error
        })
    }
}

module.exports = {
    AddProduct,
    getProducts, 
    deleteProducts
}
