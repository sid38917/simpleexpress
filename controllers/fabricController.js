const Fabric = require('../models/Fabric');

const addFabric = async (req, res, next) => {

    const {code, name, color, pattern, composition, image, price} = req.body;

    try {
        const result = await Fabric.create({code, name, color, pattern, composition, image, price})
        if(result) {
            res.status(200).json({
                data: result, 
                status: 'success',
                message: 'success input data'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'error input fabric'
        })
    }


}

const getFabric = async (req, res) => {
    try {
        const result = await Fabric.find({})

        if(result) {
        
        res.status(200).json({
            status: 'success',
            message: 'success get fabric',
            data: result
        
        })
    }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'error get fabric',
            data: err
        })
    }
} 

module.exports = {
    addFabric, getFabric
}