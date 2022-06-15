const ShirtCustomization = require('../models/ShirtCustomization')

const addShirtCustomization = async (req, res, next) => {

    const {name, category, image} = req.body;

    try {
        const result = await ShirtCustomization.create({name, category, image})

        if (result) {
            res.status(200).json({
                data: result,
                status: 'success',
                message: 'success add shirt'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'error add shirt'
        })
    }
}

const getShirtCustomization = async (req, res) => {

    try {
        const result = await ShirtCustomization.find({})

        if(result) {

            res.status(200).json({
                data: result,
                status: 'success',
                message: 'success add shirt'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'error add shirt'
        })
    }
}

module.exports = {
    addShirtCustomization, getShirtCustomization
}