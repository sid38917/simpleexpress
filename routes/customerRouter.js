const router = require('express').Router()

const {register, login} = require('../controllers/customerController')

router.post('/register', register)
router.post('/login', login)

module.exports = router