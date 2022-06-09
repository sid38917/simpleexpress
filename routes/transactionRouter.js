const router = require('express').Router()
const {addTransaction} = require('../controllers/transactionController')
const {customerAuthentication} = require('../middlewares/customerAuthentication')


router.post('/', customerAuthentication, addTransaction)


module.exports = router

