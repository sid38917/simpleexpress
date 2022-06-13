const router = require('express').Router()

const {getShirtCustomization, addShirtCustomization} = require('../controllers/shirtCustomizationController')

router.post('/', addShirtCustomization)
router.get('/', getShirtCustomization)

module.exports = router