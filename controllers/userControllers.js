
const User = require('../models/user')
const {hashPassword, verifyPassword} = require('../helpers/bcrypt')
const {tokenGenerate} = require('../helpers/jsonwebtoken')



async function register(req, res) {
    console.log('hello from register controller', req.body)
    const {email, name, password, role} = req.body

    try {
        const {email, name, password, role} = req.body
        const hash = hashPassword(password)
        const result  = await User.create({email, name, password: hash, role});
        let payload = {
            id: result._id,
            email: result.email,
            name: result.name,
            role: result.role

        }
        let token = tokenGenerate(payload);
    
        res.status(200).json({
            message: 'success login',
            token
            
        })
        
    } catch (error) {
        console.log("error register ===>", error)
    }

    


   

}
//req.body -> input, res.status -> output
async function login(req, res) {
    console.log('hello from login controller')

    
        try {
            const {email, password} = req.body
            const hash = hashPassword(password)
    const result = await User.findOne({
        email 
    })
    if(result ) {
        isPassword = verifyPassword(password, result.password)

        if(isPassword) {
            let payload = {
                id: result._id,
                email: result.email,
                name: result.name,
                role: result.role

            }
            let token = tokenGenerate(payload);
        
            res.status(200).json({
                message: 'success login',
                token
                
            })
        } else {
            res.status(400).json ({
                message: 'email atau passowrd tidak sesuai'
            })
        }


        console.log('is password ===>', verifyPassword)
    } else {
        res.status(400).json({
            message: 'email atau password tidak sesuai'
        })
    }
    console.log('result login', result)
        } catch(error) {
            console.log('error login ===> ', error)
            res.status(400).json({
                message: JSON.stringify(error)
            })
        }
    }

   

module.exports = {
    login, 
    register, 

}

