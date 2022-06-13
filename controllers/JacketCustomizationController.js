const JacketCustomization= require('../models/JacketCustomization')

const addJacketCustomization = async (req, res, next) => {

    try {
        const result = await JacketCustomization.create({name, category, image})

        if (result) {
            res.status(200).json({
                data: result,
                status: 'success',
                message: 'success add jacket'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'error add jacket'
        })
    }
}

const getJacketCustomization = async (req, res) => {

    try {
        const result = await JacketCustomization.find({})

        if(result) {

            res.status(400).json({
                data: result,
                status: 'success',
                message: 'success add jacket'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: 'error add jacket'
        })
    }
}

module.exports = {
    addJacketCustomization, getJacketCustomization
}