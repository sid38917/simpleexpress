const router = require('express').Router()

const {getSuitCustomization, addSuitCustomization} = require('../controllers/suitCustomizationController')

router.post('/', addSuitCustomization)
router.get('/', getSuitCustomization)

module.exports = router