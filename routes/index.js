const router = require('express').Router()
const customerRouter = require('./customerRouter')
const transactionRouter = require('./transactionRouter')
const fabricRouter = require('./fabricRouter')
const jacketCustomizationRouter = require('./jacketCustomizationRouter');
const suitCustomizationRouter = require('./suitCustomizationRouter');
const shirtCustomizationRouter = require('./shirtCustomizationRouter');
const trouserCustomizationRouter = require('./trouserCustomization')
const categoryRouter = require('./categoryRouter')
router.use('/customer', customerRouter)

router.use('/transaction', transactionRouter)
router.use('/fabric', fabricRouter)
router.use('/suitcustomization', suitCustomizationRouter);
router.use('/shirtcustomization', shirtCustomizationRouter);
router.use('/jacketcustomization', jacketCustomizationRouter);
router.use('/trousercustomization', trouserCustomizationRouter)
router.use('/category', categoryRouter)
module.exports = router