const Customer = require('../models/Customer')
const {verifyToken} = require('../helpers/jsonwebtoken')

async function customerAuthentication(req, res, next) {
    try {
        
        const token = req.headers.token
     
        if(!token) {
            res.status(403).json('dont have access')
        }
        const user = verifyToken(token)
        const result = await Customer.findOne({email: user.email})
        console.log('result', result)
        if(!result) {
            res.status(403).json('dont have access')
        } else {
            req.customer = result;
            next()
        }
      

       
    } catch(error) {
        console.log(error)
        res.status(403).json(error.message)
    }
}

module.exports = {customerAuthentication}


    
    