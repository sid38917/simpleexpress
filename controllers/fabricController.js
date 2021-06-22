const { restart } = require('nodemon');
const Fabric = require('../models/fabric')


const addFabric = async(req, res) => {
    try{
        const{name, imageUrl, fabricType, price} = req.body;
        const result = await Fabric.create({name, imageUrl, fabricType, price});
        res.status(201).json({
            message: 'success',
            data: result
        })

    }catch(error) {
        res.status(400).json(error);
}
}

const getFabric = async(req, res) => {
    try{ 
        const result = await fabric.find()
        res.status(200).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteFabrics = async(req, res) => {
    const {id} = req.params;
    try{
        const result = await Fabric.deleteOne({ _id: id})

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
    addFabric, 
    getFabric, 
    deleteFabrics
}
