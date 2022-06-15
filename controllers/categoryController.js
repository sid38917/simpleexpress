const Category = require('../models/Category')

const bulkInsert = async (req, res) => {

    try {
        const {data} = req.body
        const {productId} = req.params
        const formatData = data.map((item) => {
            // item.productId = productId;
            // item.name = item
            return {
                productId: productId,
                name: item
            }
        })

        const result = await Category.insertMany(formatData)
        if(result) {
            res.status(201).json({
                status: 'success',
                message: 'success get data',
                data: result
            })
        }

    } catch(err) {
        res.status(400).json({
            status: 'error', 
            message: 'error add fabric', 
            data: err
        })
    }
}

const getByProductId = async(req, res) => {
    try {
        const {productId} = req.params;

        
            const result = await Category.find({productId: productId})
            if(result) {
                res.status(200).json({
                    status: 'success',
                    message: 'success get data',
                    data: result
                })
            }
        }
        
     catch (err) {
        res.status(400).json({
            status: 'error', 
            message: 'error add fabric', 
            data: err
        })
    }
}

module.exports = {
    bulkInsert, getByProductId
}