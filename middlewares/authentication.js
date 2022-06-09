const {verifyToken} = require('../helpers/jsonwebtoken')
const User = require('../models/user')

async function authentication(req, res, next) {
    try {
        
        const token = req.headers.token
        console.log(req.headers);
        if(!token) {
            res.status(403).json('dont have access')
        }
        const user = verifyToken(token)
        const result = await User.findOne({email: user.email})
        console.log('result check user', result)
        if(!result) {
            res.status(403).json('dont have access')
        } else {
            req.user = result;
            next()
        }
      

       
    } catch(error) {
        console.log(error)
        res.status(403).json(error.message)
    }
}

module.exports  = authentication