const router = require('express').Router()
const {addFabric, getFabric} = require('../controllers/fabricController')


router.post('/', addFabric)
router.get('/', getFabric)


module.exports = router
