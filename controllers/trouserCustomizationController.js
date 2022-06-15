const TrouserCustomization = require('../models/TrouserCustomization');

const addTrouserCustomization = async (req, res, next) => {

    const {name, category, image} = req.body;

    try {
        const result = await TrouserCustomization.create({name, category, image})

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

const getTrouserCustomization = async (req, res) => {

    const {name, category, image} = req.body;

    try{
        const result = await TrouserCustomization.find({})

        if(result) {
            res.status(200).json({
                data: result,
                status: 'success',
                message: 'success get trouser'
            })
        }

    } catch (err) {
        res.status(400).json({
            
            status: 'error',
            message: 'error get trouser'
        })
    }

}

module.exports = {
    addTrouserCustomization, getTrouserCustomization
}
