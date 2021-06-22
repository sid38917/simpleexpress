const router = require('express').Router() //
const {register, login} = require('../controllers/userControllers')
const {AddCustomize, getCustomize} = require('../controllers/customizeController');
const {addMeasurement, getMeasurements, deleteMeasurment, deleteMeasurement} = require('../controllers/measurementController')
const {AddProduct, getProducts, deleteProducts} = require('../controllers/productController')
const {addFabric, getFabric, deleteFabrics} = require('../controllers/fabricController')



router.post('/register', register)


router.post('/login', login)

router.post('/customize', AddCustomize)

router.get('/customize', getCustomize)

router.post('/product', AddProduct)
router.post('/measurement', addMeasurement)
router.post('/fabric', addFabric);
router.get('/fabric', getFabric);
router.get('/measurement', getMeasurements)
router.get('/product', getProducts)
router.delete('/product/:id', deleteProducts);
router.delete('/fabric/:id', deleteFabrics);
router.delete('/measurement/:id', deleteMeasurement);


module.exports = router


