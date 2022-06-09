const Customer = require('../models/Customer')
const {hashPassword, verifyPassword} = require('../helpers/bcrypt')
const {tokenGenerate} = require('../helpers/jsonwebtoken')


const register = async (req, res, next) => {
    console.log(req.customer)
    console.log(req.body, 'customer register')
    
  


    
    //the following code obtains the username, email, password, through the POST function from the front end, 
    //the hashPassword is from a method used from bcrypt, to hash passwords in the database
    //The code uses wait functions to search within the database, if there is an email that matches with the email 
    //obtained from the frontend. If there is an existing email, or if it rit responds to the frontend, with the error 
    //status, and the message email already registered. The same occurs for the username.
    //if there is no taken username and email, then it uses an await function to create a new user within the database
    //the payload takes in the data 

    try{    
        const { username, email, password, } = req.body
        const hash = hashPassword(password)
        
        const checkCustomer = await Customer.find({
            email
        })

        if(checkCustomer.length > 0) {
            return res.status(400).json({
                status: 'error',
                message: 'email already registered'
            })
        }
        
        const checkCustomerUsername = await Customer.findOne({
            username
        })

        if(checkCustomerUsername) {
            return res.status(400).json({
                status: 'error',
                message: 'username taken'
            })
        }
        console.log('is customer', checkCustomer)

    

        //if the username and email both aren't registered in the DB, a new customer profile is created
        //the data includes the id of the user, username, and email
        //a token is generated, from JWT, which is important for login validations
        //the method takes in the data,and creates a token, which is then stored in the DB
        //the data of the user is then posted to the front end, through the POST command
        //it includes the status, message, token, and data with the spread payload and token. 
        //This satisfies the success criteria of registering, 
        //because the user details will be stored in the database

        const result = await Customer.create({username, email, password: hash})
        let payload = {
            id: result._id,
            username: result.username,
            email: result.email,

        }

        let token = tokenGenerate(payload);
        payload.token = token
    
        res.status(200).json({
            message: 'success register',
            data: {...payload, token},
            token: token,
            status: 'success'
            
        })
        
    } catch (error) {
        console.log("error register ===>", error)
        
    }
}
        

       
    


   
 // The email and password are the values obtained, are equal to req.body, which is the two things that the user has to
   // input for the login. This is taken from the frontend, through the POST request. The const result function finds the email of the customer,
   // to see if it exists within the database or not.
   // The customer is obtained from the CustomerModel, shown above, and it checks the database to see if this email exists. If it is 
   //true, then the server logs the result, and the password. After that, there is checkPassword, which checks if the password is correct
   // and matches the user. THe verifyPassword() is obtained from bcrypt, which simply hashes the password. So, it checks if the password 
   //exists, and matches with the email. If it is true, then payload or data, is then updated to the user information such as the id, email 
   //and password, which was existent in the Customer Model. Based on this, the token is generated from JSON Web Token, which determines 
   //whether the user is able to login. Then, the status is updated to 200, and the user has had success logging in, with the data being the 
   //user data and the token that determines that the user logged in. However, if the password is false, then the status is changed to 400 
   //to determine an error, and the message will output that the email or password doesn’t match, and the token isn’t able to be generated. 
   //Following the try statement, there is a catch(error), which basically catches the error if there is any, and logs it, and also changes 
   //the status to 400. This satisfies the Success criteria of logging in, because the code checks if there is an existing user in the database, 
   //and if there is, they will be allowed to log in. Also, if their username and password is wrong, they will be prohibited from loggin in.

const login = async (req, res, next) => {
    const {email, password} = req.body
    try{
        const result = await Customer.findOne({
            email
        })
        if(result) {
            console.log(result, result, password)
            checkPassword = verifyPassword(password, result.password)
            if(checkPassword) {
                let payload = {
                    id: result._id,
                    email: result.email,
                    password: result.password
                }
                let token = tokenGenerate(payload)
                res.status(200).json({
                    status: 'success',
                    message: 'login success',
                    data: {...payload, token}

                })            
        } else {
            res.status(400).json({
                message: 'email or password doenst match' 
            })
        }
    }   
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error
        })
    }
}
   



module.exports = {
    register, login
}