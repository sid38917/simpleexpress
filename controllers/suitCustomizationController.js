const SuitCustomization = require('../models/SuitCustomization');

const addSuitCustomization = async (req, res, next) => {

    const {name, category, image} = req.body;

    try {
        const result = await SuitCustomization.create({name, category, image})

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
            message: 'error input data'
        })
    }

}

const getSuitCustomization = async (req, res) => {

    try{
        const result = await SuitCustomization.find({})

        if(result) {
            res.status(200).json({
                data: result,
                status: 'success',
                message: 'success input suit'
            })
        }

    } catch (err) {
        res.status(400).json({
            
            status: 'error',
            message: 'error input suit'
        })
    }

}

module.exports = {
    addSuitCustomization, getSuitCustomization
}
