const router = require('express').Router()
const {addFabric, getFabric, updatePrice} = require('../controllers/fabricController')


router.post('/', addFabric)
router.get('/', getFabric)
router.put('/price/:id', updatePrice)


module.exports = router
