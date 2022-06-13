const router = require('express').Router()

const {getJacketCustomization, addJacketCustomization} = require('../controllers/JacketCustomizationController')

router.post('/', addJacketCustomization)
router.get('/', getJacketCustomization)

module.exports = router