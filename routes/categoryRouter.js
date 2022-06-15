const router = require('express').Router()

const {bulkInsert, getByProductId} = require('../controllers/categoryController');

router.post('/bulk/:productId', bulkInsert)
router.get('/:productId', getByProductId)

module.exports = router