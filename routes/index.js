const router = require('express').Router()
const customerRouter = require('./customerRouter')
const transactionRouter = require('./transactionRouter')
const fabricRouter = require('./fabricRouter')
const jacketCustomizationRouter = require('./jacketCustomizationRouter');
const suitCustomizationRouter = require('./suitCustomizationRouter');
const shirtCustomizationRouter = require('./shirtCustomizationRouter');
const trouserCustomizationRouter = require('./trouserCustomization')
router.use('/customer', customerRouter)

router.use('/transaction', transactionRouter)
router.use('/fabric', fabricRouter)

module.exports = router