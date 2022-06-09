const router = require('express').Router()
const customerRouter = require('./customerRouter')
const transactionRouter = require('./transactionRouter')
router.use('/customer', customerRouter)

router.use('/transaction', transactionRouter)

module.exports = router