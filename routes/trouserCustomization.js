const router = require('express').Router()

const {getTrouserCustomization, addTrouserCustomization} = require('../controllers/trouserCustomizationController')

router.post('/', addTrouserCustomization)
router.get('/', getTrouserCustomization)

module.exports = router