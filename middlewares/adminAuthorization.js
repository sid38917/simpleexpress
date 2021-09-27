const User = require('../models/user')

const authorization = async(req, res) => {
    try{
        const userId = req.user._id
        const result = await User.findOne({_id: userId})

        if (result.role !== 'admin' && result.role !== 'owner') {
            res.status(401).json({
                message: 'unauthorized'
            })
        }
        next()
    } catch (err) {
        res.status(401).send(err.message)
    }
}
module.exports = authorization