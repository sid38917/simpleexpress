const router = require('express').Router()
const {addTransaction, getTransaction, getPayment, checkTransaction} = require('../controllers/transactionController')
const {customerAuthentication} = require('../middlewares/customerAuthentication')
// const { route } = require('./customerRouter')


router.post('/', customerAuthentication, addTransaction)
router.get('/', customerAuthentication, getTransaction)
router.get('/pay/:id', customerAuthentication, getPayment)
router.post('/check', checkTransaction)

module.exports = router

