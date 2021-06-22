const customize = require('../models/customize')

async function AddCustomize(req, res) {
    console.log('add customize service ======> ', req.body)
    res.status(201).json({
        message: 'success'
        
    })

    try{
        const {name, item} = req.body
        const result = await customize.create({name, item})
        res.status(201).json({
            message: 'success',
            data: result

        })
    }catch(error) {
        res.status(400).json(error);
} 
}

const getCustomize = async (req, res) => {
    try{
        const result = await customize.find()
        res.status(200).json({
            message: 'success',
            data: result

        })

    } catch(error) {
        res.status(400).json(error)
    }
}

module.exports = {
    AddCustomize,
    getCustomize

}