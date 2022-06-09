const Transaction = require("../models/transaction")


const addTransaction = async (req, res) => {
   
    console.log('user from transaction', req.user)
    const {delivery, shipping, itemsTotal, total, items} = req.body
    // const {product, measurements, fabric, customizes, address} = req.body

    // const payload = {

    // }

    //
    try {
        const result = await Transaction.create({
            customer: req.customer._id,
            delivery, shipping, itemsTotal, items, total,
            status: 'pending'
        })

    
       res.status(201).json({
           status: 'success',
           message: 'success transaction',
           data: result
       })


    } catch(errr) {
        console.log(errr,'error')
        res.status(400).send(errr)
        console.log(errr)
    }

    
}



module.exports = { addTransaction}







