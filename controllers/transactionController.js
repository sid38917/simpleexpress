const transaction = require("../models/transaction")

const addTransaction = async (req, res) => {
    console.log('user from transaction', req.user)
    const {product, measurements, fabric, customizes, address} = req.body
    try {
        const result = await transaction.create({
            user: req.user._id,
            product, measurements, fabric, customizes, address
        })
       res.status(201).json({
           status: 'success',
           data: result
       })
    } catch(errr) {
        console.log(errr,'error')
        res.status(400).send(errr)
        console.log(error)
    }

    
}

module.exports = {
    addTransaction
}
