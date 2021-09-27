const user = require("../models/user")

const userAuthorization = async(req, res, next) => {
const userId = req.user._id
    try{
        const result = await user.findOne({_id: userId})
       

        if (result.role !== 'user') {
            res.status(403).json({message: unauthorized})
        }
        next()
        console.log(result, 'result user authorization')
    } catch (error) {
        res.status(403).json({message: 'unauthorized'})
        console.log('error user authoirzation', error)
    }
}

module.exports = userAuthorization