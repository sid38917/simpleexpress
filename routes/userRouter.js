const router = require('express').Router() //
// const {register, login} = require('../controllers/userControllers')
// const {AddCustomize, getCustomize} = require('../controllers/customizeController');
// const {addMeasurement, getMeasurements, deleteMeasurment, deleteMeasurement} = require('../controllers/measurementController')
// const {AddProduct, getProducts, deleteProducts} = require('../controllers/productController')
// const {addFabric, getFabric, deleteFabrics} = require('../controllers/fabricController')
// const {addTransaction} = require ('../controllers/transactionController')
// const authentication = require('../middlewares/authentication')
// const adminAuthorization = require('../middlewares/adminAuthorization')
// const userAuthorization = require('../middlewares/userAuthorization')
// router.post('/register', register)
// router.post('/login', login)
const customerRouter = require('./customerRouter')
const transactionRouter = require('./transactionRouter')
router.use('/customer', customerRouter)

router.use('/transaction', transactionRouter)



// router.get('/fabric', getFabric);
// router.get('/measurement', getMeasurements)
// router.get('/product', getProducts)
// router.get('/customize', getCustomize)

// router.use(authentication)

// router.post('/customize', adminAuthorization, AddCustomize)
// router.post('/product',  adminAuthorization, AddProduct)
// router.post('/measurement', adminAuthorization, addMeasurement)
// router.post('/fabric', adminAuthorization,addFabric);



// router.delete('/product/:id',adminAuthorization, deleteProducts);
// router.delete('/fabric/:id', adminAuthorization,deleteFabrics);
// router.delete('/measurement/:id', adminAuthorization,deleteMeasurement);

// router.post('/transaction', userAuthorization, addTransaction)

module.exports = router


